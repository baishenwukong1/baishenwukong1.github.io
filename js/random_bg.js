var bg = [
"/img/background/bg1.jpg",
"/img/background/bg2.jpg",
"/img/background/bg3.jpg",
"/img/background/bg4.jpg"
];

var random = Math.floor(Math.random() * bg.length);
document.getElementById("page-header").style.backgroundImage = "url(" + bg[random] + ")";