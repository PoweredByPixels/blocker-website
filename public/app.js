const dialogs = [...document.querySelectorAll('dialog')];
document.querySelectorAll('[data-dialog]').forEach(button => {
  button.addEventListener('click', () => document.getElementById(button.dataset.dialog).showModal());
});
document.querySelectorAll('[data-close]').forEach(button => {
  button.addEventListener('click', () => button.closest('dialog').close());
});
dialogs.forEach(dialog => {
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
});
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    const image = document.getElementById('large-image');
    image.src = button.dataset.image;
    image.alt = button.querySelector('img').alt;
    document.getElementById('large-caption').textContent = button.dataset.caption;
    document.getElementById('image-dialog').showModal();
  });
});
