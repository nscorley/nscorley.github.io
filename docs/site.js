const photoDialog = document.querySelector('#photo-dialog');
const dialogPhoto = document.querySelector('#dialog-photo');
const dialogCaption = document.querySelector('#dialog-caption');
document.querySelectorAll('[data-gallery]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !photoDialog?.showModal) return;
    event.preventDefault();
    const img = link.querySelector('img');
    dialogPhoto.src = link.href;
    dialogPhoto.alt = img.alt;
    dialogCaption.textContent = img.alt;
    photoDialog.showModal();
  });
});
document.querySelector('#close-photo')?.addEventListener('click', () => photoDialog.close());
photoDialog?.addEventListener('click', event => {
  if (event.target === photoDialog) photoDialog.close();
});
