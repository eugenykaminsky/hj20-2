const wrapperDropdown = document.getElementsByClassName('wrapper-dropdown');

function displayMenu() {
  this.classList.toggle('active');
}

for (const button of wrapperDropdown) {
  button.onclick = displayMenu;
}
