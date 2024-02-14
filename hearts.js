// Create a function to generate a random number between min and max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create a function to generate a random direction
function randomDirection() {
  // Create an array of possible directions
  var directions = ["top", "right", "bottom", "left"];

  // Get a random index from the array
  var index = random(0, directions.length - 1);

  // Return the direction at the index
  return directions[index];
}

// Create a function to append an image element that will appear and then fade on a random direction
function appendImage() {
  // Create a new image element
  var image = document.createElement("img");

  // Set the source of the image element to your custom image
  image.src = "heart.png";

  // Set the style of the image element to match the size
  image.style.width = "3rem";
  image.style.height = "3rem";

  // Set the style of the image element to make it appear and then fade
  image.style.opacity = "1";
  image.style.transition = "opacity 2s";

  // Set the style of the image element to position it randomly on the viewport
  image.style.position = "fixed";
  image.style.top = random(0, 100) + "%";
  image.style.left = random(0, 100) + "%";

  // Set the style of the image element to add a border with radius 50% and padding
  image.style.border = "5px solid green";
  image.style.borderRadius = "50%";
  image.style.padding = "5px";

  // Get the body element
  var body = document.body;

  // Append the image element to the body element
  body.appendChild(image);

  // Get a random direction
  var direction = randomDirection();

  // Set a timeout to fade the border of the image element on the direction
  setTimeout(function() {
    // Set the border color of the image element to transparent
    image.style.borderColor = "transparent";

    // Set the transform of the image element to translate it on the direction
    image.style.transform = "translate" + direction + "(" + image.width + "px)";
  }, 1000);

  // Set another timeout to fade the image element
  setTimeout(function() {
    // Set the opacity of the image element to 0
    image.style.opacity = "0";
  }, 2000);
}

// Add an event listener to append images when the window loads
window.addEventListener("load", function() {
  // Append 8 images every second
  setInterval(function() {
    for (var i = 0; i < 5;i++) {
      appendImage();
    }
  }, 1000);
});
