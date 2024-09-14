let img = [ 3, 4, 5];
let land = document.querySelector("body");
setInterval(() => {
    let random = Math.floor(Math.random() * img.length);
    land.style.backgroundImage = 'url("imgs/'+img[random] +'.jpg")'
    // console.log(random);
}, 3000);