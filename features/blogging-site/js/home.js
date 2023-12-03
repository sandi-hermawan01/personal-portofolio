const blogSection = document.querySelector(".blogs-section");
const pageBloghome2 = document.querySelector(".blog-home");

db.collection("blogs")
  .get()
  .then((blogs) => {
    blogs.forEach((blog) => {
      if (blog.id != decodeURI(location.pathname.split("/").pop())) {
        createBlog(blog);
      }
    });
  });

const createBlog = (blog) => {
  let data = blog.data();
  blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + "..."}</h1>
        <p class="blog-overview">${data.article.substring(0, 100) + "..."}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
    </div>
    `;
};

// paralax ani
const position = document.documentElement;
position.addEventListener("mousemove", (e) => {
  position.style.setProperty("--x", e.clientX + "px");
});

const pagePacman = document.querySelector(".pacman-page");

function toPacman() {
  location.href = pagePacman;
}

function toBloghome2() {
  location.href = pageBloghome2;
}
