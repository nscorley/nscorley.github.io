# Nate Corley’s personal website

A scientific portfolio for Nathaniel “Nate” Corley, PhD student in David Baker’s lab at the University of Washington Institute for Protein Design.

## Local preview

Requires Node.js 18 or newer. No installation or build is needed for the new site:

```sh
npm start
```

Open http://127.0.0.1:4173. Set `PORT` to use a different port.

The website is plain HTML, CSS, and JavaScript in `docs/`, the repository’s existing GitHub Pages output directory. Edit `docs/index.html` for content, `docs/site.css` for styling, and `docs/site.js` for the media controls, and `docs/protein-viewer.js` for the interactive structure. `npm run check` checks JavaScript syntax for both the preview server and browser script. Typography uses system fonts.

The old React/Webpack source remains in `client/` and `webpack.config.js` for reference. The historical command is preserved as `npm run start:legacy`; it uses the original, outdated dependencies. Do not run its build against `docs/`, which now contains the new website source.

## GitHub Pages

The public site uses the `dev` branch and `/docs` directory, with the custom domain `natecorley.com` retained in `docs/CNAME`. The site is buildless; GitHub Pages serves the files directly.

## Media provenance

- `docs/assets/nate-corley.webp`: public Baker Lab portrait, https://www.bakerlab.org/photo-proxy/2522.webp.
- `docs/assets/rfd4-pte.webp`: public RFD4-Proteina artwork, https://rfd4-proteina.org/assets/hero/pte-light.webp.
- `docs/assets/atomworks.png` and `rfd3-overview.png`: research-overview figures from the local `PhD/Research Overview/figures/` directory, retained as static fallbacks.
- `docs/assets/outside/`: Nate’s six selected skiing and backpacking photos. Private selection links and original downloads stay in ignored `.local/`. Photos were converted to JPEG and location metadata removed.
- Molecular coordinates and alignment details are documented below and in the structure provenance file. No manuscript files were modified.

## Interactive protein viewers

`docs/vendor/3Dmol-min.js` is the vendored 3Dmol.js distribution from the RFD4 website, with its accompanying license notices. The three viewers show:

- RFD4: the released BLITZ-1 design model from https://rfd4-proteina.org/assets/structures/pte_p2h11.pdb.gz, rendered with the RFD4 site's enzyme styling.
- RF3/AtomWorks: the released 5VHT regression prediction (blue), overlaid on its experimental reference (gray). The reference was rigidly aligned onto the prediction using 190 matching Cα atoms, with verified chain/residue identity; Cα RMSD is 1.124 Å. Prediction coordinates are unchanged. This is an illustrative example, not an aggregate benchmark.
- RFD3: the released advanced enzyme tutorial's metalloprotease design (purple), with its transition-state analog (orange), zinc (gray), and nearby side chains. This is a design model, not an experimental structure or a refolded prediction.

Source URLs, Git blob IDs, asset hashes, and RF3 alignment details are in `docs/assets/structures/provenance.json`. Original figure assets remain available as image fallbacks. Dragging pauses rotation; double-clicking toggles rotation. Keyboard arrows rotate, +/− zoom, 0 resets, and space toggles rotation. Reduced-motion preferences disable initial rotation. Off-screen viewers stop spinning.

Repository star badges are loaded live from Shields.io. RF3 and RFD3 link to their model directories and display the star count of the shared Foundry repository, labeled Foundry. AtomWorks and RFD4-Proteina use their own repository counts. The adoption statement is supplied by Nate.
