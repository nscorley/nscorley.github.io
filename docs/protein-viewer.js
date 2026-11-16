// Coordinates and alignment provenance: assets/structures/provenance.json.
// Rendering follows the RFD4-Proteina site's 3Dmol.js structure presets.
const motion = matchMedia('(prefers-reduced-motion: reduce)');
async function loadStructure(file) {
  const response = await fetch(`assets/structures/${file}`);
  if (!response.ok) throw new Error(`Structure unavailable: ${file}`);
  return {text: await response.text(), format: file.endsWith('.cif') ? 'cif' : 'pdb'};
}
async function startStructure(canvas) {
  let viewer;
  let rotating = !motion.matches;
  let visible = false;
  const syncSpin = () => viewer.spin(rotating && visible && !document.hidden ? 'y' : false, 0.45);
  canvas.addEventListener('wheel', event => {
    if (!event.ctrlKey && !event.metaKey) event.stopImmediatePropagation();
  }, {capture: true, passive: true});
  try {
    if (!window.$3Dmol) throw new Error('3D renderer unavailable');
    const [main, overlay] = await Promise.all([
      loadStructure(canvas.dataset.file),
      canvas.dataset.overlay ? loadStructure(canvas.dataset.overlay) : null,
    ]);
    viewer = $3Dmol.createViewer(canvas, {backgroundAlpha: 0, antialias: true});
    viewer.addModel(main.text, main.format);
    viewer.setStyle({}, {});
    const style = canvas.dataset.style;
    if (style === 'rf3') {
      viewer.setStyle({model: 0}, {cartoon: {color: '#367db0'}});
      viewer.addStyle({model: 0, resn: 'PBF'}, {stick: {radius: 0.13, colorscheme: 'blueCarbon'}});
      viewer.addModel(overlay.text, overlay.format);
      viewer.setStyle({model: 1}, {cartoon: {color: '#aaaaaa', opacity: 0.55}});
    } else {
      const color = style === 'pte' ? '#186c70' : '#8765a2';
      const ligandSelection = style === 'pte' ? {chain: 'D'} : {resn: 'PKF'};
      viewer.setStyle({chain: 'A'}, {cartoon: {color}});
      viewer.addStyle(ligandSelection, {stick: {radius: 0.17, colorscheme: 'orangeCarbon'}});
      viewer.setStyle({elem: 'Zn'}, {sphere: {radius: 0.9, color: '#7d8a92'}});
      const ligand = viewer.selectedAtoms(ligandSelection);
      const residues = new Set();
      for (const atom of viewer.selectedAtoms({chain: 'A'})) {
        if (ligand.some(other => (atom.x-other.x)**2+(atom.y-other.y)**2+(atom.z-other.z)**2 < 4.5**2)) residues.add(atom.resi);
      }
      viewer.addStyle({chain: 'A', resi: [...residues]}, {stick: {radius: 0.13, colorscheme: style === 'pte' ? 'cyanCarbon' : 'magentaCarbon'}});
    }
    viewer.zoomTo();
    viewer.render();
    const initialView = viewer.getView();
    canvas.parentElement.classList.add('ready');
    canvas.dataset.loaded = 'true';
    canvas.addEventListener('pointerdown', () => { rotating = false; syncSpin(); });
    canvas.addEventListener('dblclick', () => { rotating = !rotating; syncSpin(); });
    canvas.addEventListener('keydown', event => {
      const rotations = {ArrowLeft: [-8,'y'], ArrowRight: [8,'y'], ArrowUp: [-8,'x'], ArrowDown: [8,'x']};
      if (rotations[event.key]) {
        event.preventDefault(); rotating = false; syncSpin(); viewer.rotate(...rotations[event.key]); viewer.render();
      } else if (['+','=','-'].includes(event.key)) {
        event.preventDefault(); viewer.zoom(event.key === '-' ? 1/1.2 : 1.2); viewer.render();
      } else if (event.key === '0') {
        event.preventDefault(); viewer.setView(initialView); viewer.render();
      } else if (event.key === ' ') {
        event.preventDefault(); rotating = !rotating; syncSpin();
      }
    });
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncSpin(); }).observe(canvas);
    new ResizeObserver(() => viewer.resize()).observe(canvas);
    document.addEventListener('visibilitychange', syncSpin);
    motion.addEventListener('change', () => { rotating = !motion.matches; syncSpin(); });
    syncSpin();
  } catch (error) {
    viewer?.spin(false);
    canvas.dataset.loaded = 'false';
    console.warn('Protein viewer:', error.message);
  }
}
document.querySelectorAll('.molecule-viewer').forEach(startStructure);
