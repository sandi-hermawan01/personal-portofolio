// projects
let projectCards = [...document.querySelectorAll(".project-card")];

// project details container
let projectName = document.querySelector(".project-details .name");
let projectImage = document.querySelector(".project-details .image");
let projectDetail = document.querySelector(".project-details .details");

// buttons

let liveBtn = document.querySelector("#live-btn");
let githubBtn = document.querySelector("#github-btn");

let progressTrack = [...document.querySelectorAll(".progress-track")];

//hacker effect
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var fontSize = 18;
var columns = Math.floor(W / fontSize);
var drops = [];
for (var i = 0; i < columns; i++) {
  drops.push(0);
}

var str = "Zsans Product - Sandi Portofolio";
function draw() {
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, W, H);
  context.fontSize = "700 " + fontSize + "px";
  context.fillStyle = "#a1a1a1";
  for (var i = 0; i < columns; i++) {
    var index = Math.floor(Math.random() * str.length);
    var x = i * fontSize;
    var y = drops[i] * fontSize;
    context.fillText(str[index], x, y);
    if (y >= canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
draw();
setInterval(draw, 35);

//particle affect
// particlesJS("particles", {
//   particles: {
//     number: {
//       value: 100,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//     color: {
//       value: "#ffffff",
//     },
//     shape: {
//       type: "circle",
//       stroke: {
//         width: 0,
//         color: "#000000",
//       },
//     },
//     opacity: {
//       value: 0.8,
//       random: true,
//       animation: {
//         enable: true,
//         speed: 1,
//         opacity_min: 0,
//         sync: false,
//       },
//     },
//     size: {
//       value: 3,
//       random: true,
//     },
//     line_linked: {
//       enable: true,
//       distance: 150,
//       color: "#ffffff",
//       opacity: 0.4,
//       width: 1,
//     },
//     move: {
//       enable: true,
//       speed: 2,
//       direction: "none",
//       random: true,
//       straight: false,
//       out_mode: "out",
//       bounce: false,
//     },
//   },
//   interactivity: {
//     detectsOn: "canvas",
//     events: {
//       onHover: {
//         enable: true,
//         mode: "push",
//       },
//       onClick: {
//         enable: true,
//         mode: "push",
//       },
//       resize: true,
//     },
//     modes: {
//       repulse: {
//         distance: 100,
//         duration: 0.4,
//       },
//       push: {
//         particles_nb: 4,
//       },
//     },
//   },
//   retina_detect: true,
// });

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header-nav");
  const container = document.getElementById("container");
  const menuButton = document.getElementById("menu");
  const links = document.querySelectorAll('a[href^="#"]');

  // Function to handle the scroll
  function handleScroll() {
    container.classList.remove("menuopen");
    header.classList.toggle("sticky", window.scrollY >= 100);
  }

  // Function to handle menu button click
  function handleMenuButtonClick() {
    header.classList.remove("sticky");
    container.classList.toggle("menuopen");
  }

  // Function to handle anchor links click
  function handleLinkClick(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  // Function to close the menu when clicking outside and show the sticky menu
  function handleCloseOutside(event) {
    if (!menuButton.contains(event.target)) {
      // Check if the click was outside the menu button
      container.classList.remove("menuopen");
      header.classList.add("sticky");
    }
  }

  window.addEventListener("scroll", handleScroll);
  menuButton.addEventListener("click", handleMenuButtonClick);
  links.forEach((link) => link.addEventListener("click", handleLinkClick));

  // Listen for clicks anywhere in document
  document.addEventListener("click", handleCloseOutside);
});

//new
projectCards.map((project, i) => {
  project.addEventListener("click", () => {
    projectCards.map((card) => card.classList.remove("active"));

    project.classList.add("active");

    let data = JSON.parse(project.getAttribute("data-info"));

    setUpProjectInfo(data);
  });
});

const setUpProjectInfo = (data) => {
  projectImage.src = data.image;
  projectName.innerHTML = data.name;
  projectDetail.innerHTML = data.about;
  liveBtn.href = data.live;
  githubBtn.href = data.github;

  progressTrack.map((item) => {
    let progress = item.querySelector(".progress");

    progress.style.width = data.languages[item.getAttribute("data-name")];
  });
};

// filters

const filters = [...document.querySelectorAll(".filter-btn")];

filters.map((btn, i) => {
  btn.addEventListener("click", () => {
    filters.map((item) => item.classList.remove("active"));

    btn.classList.add("active");

    let tag = btn.getAttribute("data-filter-value");

    projectCards.map((project) => {
      if (tag == "all") {
        project.style.display = null;
      } else if (!project.getAttribute("data-tags").includes(tag)) {
        project.style.display = "none";
      } else {
        project.style.display = null;
      }
    });
  });
});

projectCards[0].classList.add("active");
setUpProjectInfo(projects[0]);

// navbar

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (scrollY > 195) {
    navbar.classList.add("bg");
  } else {
    navbar.classList.remove("bg");
  }
});

//contact
function sendMail() {
  var params = {
    from_name: document.getElementById("full-name").value,
    user_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_6oyj0wx";
  const templateID = "template_6o280xe";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("full-name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}

//lamp
// function updateTimeAndDate() {
//   const now = new Date();
//   let hours = now.getHours();
//   const minutes = now.getMinutes().toString().padStart(2, "0");
//   let amPm = hours >= 12 ? "PM" : "AM";
//   if (hours > 12) {
//     hours -= 12;
//   } else if (hours === 0) {
//     hours = 12;
//   }
//   let timeStr = hours.toString().padStart(2, "0") + minutes;
//   if (timeStr.startsWith("0")) {
//     timeStr = " " + timeStr.slice(1);
//   }
//   let month = (now.getMonth() + 1).toString().padStart(2, "0");
//   let day = now.getDate().toString().padStart(2, "0");
//   const year = now.getFullYear().toString().slice(-2);
//   if (month.startsWith("0")) {
//     month = " " + month.slice(1);
//   }
//   if (day.startsWith("0")) {
//     day = " " + day.slice(1);
//   }
//   const displayStr = timeStr + amPm + month + day + year;
//   for (let i = 0; i < 12; i++) {
//     document.getElementById("char" + i + "1").textContent = displayStr[i];
//     document.getElementById("char" + i + "2").textContent = displayStr[i];
//   }
// }
// updateTimeAndDate();
// setInterval(updateTimeAndDate, 60000);
