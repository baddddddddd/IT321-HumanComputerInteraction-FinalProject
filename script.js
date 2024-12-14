const btn = document.getElementById('colorblind-btn');
const menu = document.getElementById('colorblind-menu');
const modeSelect = document.getElementById('colorblind-mode');
const content = document.querySelector(".content");
const burger = document.querySelector(".header-burger");
const dropdown = document.querySelector(".header-dropdown");

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

modeSelect.addEventListener('change', function () {
  content.className = 'content';
  
  const mode = this.value;
  if (mode !== 'normal') {
    content.classList.add(mode);
    localStorage.setItem('colorblindMode', mode);
  } else {
    localStorage.removeItem('colorblindMode');
  }

  menu.classList.toggle('hidden');
});

burger.onclick = (e) => {
    if (dropdown.classList.contains("active")) {
        dropdown.classList.remove("active");
    } else {
        dropdown.classList.add("active");
    }
};

const colorblindMode = localStorage.getItem('colorblindMode');
content.className = 'content';
if (colorblindMode) {
    content.classList.add(colorblindMode);
}