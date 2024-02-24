let projects = [
  {
    name: "Portofolio v2",
    about: "Personal portofolio second vesion.",
    tags: "#react, #fullstack, #html, #css",
    live: "",
    github: "",
    image: "./assets/img/portofoliov2.jpg",
    languages: {
      html: "90%",
      css: "40%",
      javascript: "20%",
      reactjs: "90%",
      nodejs: "0%",
      database: "0%",
      tailwind: "80%",
      other: "0%",
    },
  },
  {
    name: "Blog Publisher",
    about:
      "Zsans Blog Publisher, is a media provider of various articles, you can easily publish and write your articles, create your articles and achieve top trending!",
    tags: "#fullstack, #html, #css, #react, #big-project",
    live: "https://www.zsans-product.tech",
    github: "",
    image: "./assets/img/zsans-blog-publisher-promo.png",
    languages: {
      html: "50%",
      css: "30%",
      javascript: "80%",
      reactjs: "90%",
      nodejs: "70%",
      database: "45%",
      tailwind: "70%",
      other: "40%",
    },
  },
  {
    name: "Sans Blog",
    about:
      "Sans Blog is my personal blog, in which you can read and publish a blog with the image, tittle and content of your blog.",
    tags: "#javascript, #fullstack, #css, #html",
    live: "./features/blogging-site/home.html",
    github: "",
    image: "./assets/img/sans-blog.jpg",
    languages: {
      html: "80%",
      css: "80%",
      javascript: "70%",
      reactjs: "0%",
      nodejs: "0%",
      database: "0%",
      tailwind: "0%",
      other: "0%",
    },
  },
  {
    name: "Sans Wiki",
    about:
      "Sans Wiki is a search engine using the wikipedia API, everything on wikipedia can be searched here.",
    tags: "#fullstack, #javascript, #css, #html",
    live: "./features/wiki-site/wiki.html",
    github: "",
    image: "./assets/img/sans-wiki.jpg",
    languages: {
      html: "90%",
      css: "90%",
      javascript: "80%",
      reactjs: "0%",
      nodejs: "0%",
      database: "0%",
      tailwind: "0%",
      other: "0%",
    },
  },
  {
    name: "Spotify Clone",
    about:
      "In this Spotify Clone, I cloned the front-end, the progress is only up to the home page and 50% responsive.",
    tags: "#frontend, #html, #css",
    live: "./features/spotify-clone/spoti-home.html",
    github: "",
    image: "./assets/img/spotify-clone.jpg",
    languages: {
      html: "90%",
      css: "90%",
      javascript: "15%",
      reactjs: "0%",
      nodejs: "0%",
      database: "0%",
      tailwind: "0%",
      other: "0%",
    },
  },
];

let projectGallery = document.querySelector(".project-gallery");

const createProjects = (data) => {
  projectGallery.innerHTML += `
    <a class="project-card" data-tags="${
      data.tags
    }" data-info='${JSON.stringify(data)}' >
        <img src="${data.image}" class="project-image" alt="">
        <span class="tags">${data.tags}</span>
    </a>
    `;
};

// creating project cards

projects.map((project, i) => {
  createProjects(project);
});
