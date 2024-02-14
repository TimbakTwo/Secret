// Create a heart button element
var heartButton = document.createElement("button");
// Set the style of the button
heartButton.style.width = "50px";
heartButton.style.height = "50px";
heartButton.style.border = "2px solid white";
heartButton.style.borderRadius = "50%";
heartButton.style.backgroundColor = "transparent";
heartButton.style.position = "absolute";
heartButton.style.left = "50%";
heartButton.style.top = "10%";
heartButton.style.zIndex = "999";
heartButton.style.transform = "translateX(-50%)";
// Add a heart icon to the button
var heartIcon = document.createElement("i");
heartIcon.className = "fas fa-heart";
heartIcon.style.fontSize = "30px";
heartIcon.style.color = "white";
heartButton.appendChild(heartIcon);
// Append the button to the body
document.body.appendChild(heartButton);

// Create a text label element
var textLabel = document.createElement("p");
// Set the style of the text label
textLabel.style.color = "white";
textLabel.style.fontFamily = "Arial, sans-serif";
textLabel.style.fontSize = "12px";
textLabel.style.textAlign = "center";
textLabel.style.margin = "0";
textLabel.style.position = "absolute";
textLabel.style.left = "50%";
textLabel.style.top = "16%";
textLabel.style.zIndex = "999";
textLabel.style.transform = "translateX(-50%)";
// Set the text content of the text label
textLabel.textContent = "Click here";
// Append the text label to the body
document.body.appendChild(textLabel);

// Create an audio element
var audio = document.createElement("audio");
// Set the source of the audio
audio.src = "music.mp3"; // Change this to your desired music file
// Append the audio to the body
document.body.appendChild(audio);

// Define a function to toggle the heart animation and the music playback
function toggleHeart() {
  // Check if the button is clicked or not
  var clicked = heartButton.getAttribute("data-clicked");
  // If the button is not clicked, change the background to red, add the animation class, and play the music
  if (!clicked) {
    heartButton.style.backgroundColor = "red";
    heartIcon.classList.add("animate__heartBeat");
    audio.play();
    heartButton.setAttribute("data-clicked", "true");
  }
  // If the button is clicked, change the background to transparent, remove the animation class, and pause the music
  else {
    heartButton.style.backgroundColor = "transparent";
    heartIcon.classList.remove("animate__heartBeat");
    audio.pause();
    heartButton.removeAttribute("data-clicked");
  }
}

// Add an event listener to the button to call the toggle function on click
heartButton.addEventListener("click", toggleHeart);
