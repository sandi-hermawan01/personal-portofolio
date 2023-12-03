const pageHome = document.querySelector(".home");
const pageBlog = document.querySelector(".page__blog");
const pageWiki = document.querySelector(".page__wiki");
const pageGames = document.querySelector(".page__games");

particlesJS ("particles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

function scrollToTop(){
    window,scrollTo({
        top:0,
    });
}
function homeBack(){
    location.href = pageHome
}

function toBlog(){
    location.href = pageBlog
}
function toWiki(){
    location.href = pageWiki
}
function toGames(){
    location.href = pageGames
}

window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

window.addEventListener('search-box', function () {
    var scrollHomeButton = document.querySelector('.home-back');
    if (this.window.pageYOffset > 200) {
        scrollHomeButton.style.display = 'block';
    } else {
        scrollHomeButton.style.display = 'none';
    }
});

