onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// create a new h1 element
let h1 = document.createElement("h1");

// set the text content to "happy valentine's day"
h1.textContent = "Happy valentine’s day, lover";
// set the style properties
h1.style.position = "absolute";
h1.style.top = "2rem";
h1.style.color = "white";
h1.style.fontFamily = "cursive";

// append the h1 element to the body
document.body.appendChild(h1);



