const themeOptions = document.getElementById('theme-select');
const body1 = document.querySelector('body')
const byuiLogo = document.querySelector('.logo_webp');
function changeBackground() {
    const selectedBackground = themeOptions.value;
    if (selectedBackground == 'dark') {
        body1.classList.add('dark');
        byuiLogo.setAttribute('src', 'images/byui-logo_white.png');
    }
    else {
        body1.classList.remove('dark');
        byuiLogo.setAttribute('src', 'images/byui-logo_blue.webp');
    }
}

themeOptions.addEventListener('change', changeBackground);