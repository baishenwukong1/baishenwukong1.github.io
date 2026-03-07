var bg = [
"/img/background/bj1.jpg",
"/img/background/bj2.jpg",
"/img/background/bj3.jpg",
"/img/background/bj4.jpg"
"/img/background/bj5.jpg"
"/img/background/bj6.jpg"
"/img/background/bj7.jpg"
"/img/background/bj8.jpg"
];

var random = Math.floor(Math.random() * bg.length);
document.getElementById("page-header").style.backgroundImage = "url(" + bg[random] + ")";