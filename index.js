const flake = document.querySelector(".flake");
const container = document.querySelector(".container");

function createFlake() {

// cloning the flake node
const clone = flake.cloneNode(true);

// creating left padding
clone.style.paddingLeft = Math.random() * 60 + "px";

// animation duration between 3-5
clone.style.animationDuration = Math.random() * 5 + 3 + "s";
clone.style.opacity = Math.random() * 1;
clone.style.width = Math.random() * 30 + 'px';
container.append(clone); // adding clone flake to container
}

// to create more flakes decrease 100
const s = setInterval(createFlake, 100);


setTimeout(() => {
clearInterval(s);
}, 3000); // flake creation stops after 3000 milliseconds or 3s