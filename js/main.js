const menu = document.getElementById("menu");
menu.addEventListener('click', (event) => {
  menu.classList.toggle('open');
  const nav = document.getElementById("drawer-nav");
  nav.classList.toggle('in');
});