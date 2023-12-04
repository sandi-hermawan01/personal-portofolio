const position = document.documentElement;
        position.addEventListener('mousemove', e => {
            position.style.setProperty('--x', e.clientX + 'px')
        })

const pagePacman = document.querySelector(".pacman-page");

function toPacman(){
    location.href = pagePacman
}