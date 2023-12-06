require("dotenv").config();

const express = require("express");
const PORT = process.env.PORT || 3000;
const path = require("path");
const fileupload = require("express-fileupload");

let initial_path = path.join(__dirname, "./public/features/blogging-site");
let basic_path = path.join(__dirname, "./public");

const app = express();
app.use(express.static(initial_path));
app.use(express.static(basic_path));
app.use(fileupload());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(basic_path, "index.html"));
});

app.get("/editor", (req, res) => {
  res.sendFile(path.join(initial_path, "editor.html"));
});
app.get("/:blog/editor", (req, res) => {
  res.sendFile(path.join(initial_path, "editor.html"));
});

// upload link
app.post("/upload", (req, res) => {
  let file = req.files.image;
  let date = new Date();
  // image name
  let imagename = date.getDate() + date.getTime() + file.name;
  // image upload path
  let path = "./public/features/blogging-site/uploads/" + imagename;

  // create upload
  file.mv(path, (err, result) => {
    if (err) {
      throw err;
    } else {
      // our image upload path
      res.json(`uploads/${imagename}`);
    }
  });
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(initial_path, "dashboard.html"));
});

app.get("/:blog", (req, res) => {
  res.sendFile(path.join(initial_path, "blog.html"));
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server Listening on PORT", PORT);
});
