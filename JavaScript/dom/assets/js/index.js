var h1 = document.getElementById('page-title');
var button = document.getElementById('mode-selector');
var footer = document.getElementsByTagName('footer')[0]; 
var body = document.getElementsByTagName('body')[0];


function changeClasses() {
	button.classList.toggle('dark-mode');
	h1.classList.toggle('dark-mode');
	body.classList.toggle('dark-mode');
	footer.classList.toggle('dark-mode');
}

function changeText(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains('dark-mode')){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';

}

function changeMode() {
	changeClasses();
	changeText();
}

button.addEventListener('click', changeMode);

