console.log('👍 JS Connected');

// Tailwind Background Utlities
const backgrounds = ["bg-red-300", "bg-green-300", "bg-blue-300"];


// Album cover images (optional, can be used for dynamic backgrounds or album art)
const albumCovers = [
  "assets/images/GMT (Jaie xx Remix) [Edit].png",
  "assets/images/What You Need (feat. Charrlotte Day Wilson).png",
  "assets/images/Young Folks.png",
  "assets/images/SLOW DANCING IN THE DARK.png",
  "assets/images/Cinderella.png",
  "assets/images/Keep Me Satisfied.png",
  "assets/images/Disco Dangerous.png",
  "assets/images/Aperture.png",
  "assets/images/Terrified.png",
  "assets/images/Don't Try This At Home.png",
  "assets/images/Let's Live.png"
];

// Sample design quotes JSON data
const music  = [
  {
    music: "What You Need (feat. Charrlotte Day Wilson) ",
    author: "KAYTRANADA"
  },
  {
    music: "Young Folks",
    author: "Peter Bjorn and John"
  },
  {
    music: "SLOW DANCING IN THE DARK ",
    author: "Joji"
  },
{
    music: "Cinderella",
    author: "Remi Wolf"
  },
{
    music: "Keep Me Satisfied",
    author: "Jungle"
  },
{
    music: "Disco Dangerous",
    author: "Little Dragon"
  },
  {
    music: "Aperture",
    author: "Harry Styles"
  },
 {
    music: "Terrified",
    author: "Childish Gambino"
  },
 {
    music: "Don't Try This At Home",
    author: "Future Utopia"
  },
   {
    music: "Let's Live",
    author: "FKJ"
  }
];

// Get DOM elements
const body = document.querySelector("#body");
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const refreshBtn = document.querySelector("#refresh-btn");

// Function to get random quote and background
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * music.length);
  const selectedQuote = music[randomIndex];

  // Update quote
  quoteText.textContent = `"${selectedQuote.quote}"`;
  quoteAuthor.textContent = `— ${selectedQuote.author}`;

  // Get random background
  const randomBgIndex = Math.floor(Math.random() * backgrounds.length);
  const newBackground = backgrounds[randomBgIndex];

  // Replace entire class attribute
  body.className = `${newBackground} min-h-screen flex items-center justify-center transition-all duration-700`;
}

// Add event listener to button
refreshBtn.addEventListener("click", getRandomQuote);
