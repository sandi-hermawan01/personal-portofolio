let firebaseConfig = {
    apiKey: "AIzaSyAvvy9sIA-fxFiLSkTAzZZe8nh-ZQOSyh0",
    authDomain: "portofolio-blog.firebaseapp.com",
    projectId: "portofolio-blog",
    storageBucket: "portofolio-blog.appspot.com",
    messagingSenderId: "693611356810",
    appId: "1:693611356810:web:b4809589368991c5e4c373"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}