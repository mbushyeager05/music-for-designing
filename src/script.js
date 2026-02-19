console.log('👍 JS Connected');

// Tailwind Background Utlities
const backgrounds = ["bg-red-300", "bg-green-300", "bg-blue-300"];


// Album cover images (optional, can be used for dynamic backgrounds or album art)
const albumCovers = [
  "/images/GMT (Jaie xx Remix) [Edit].png",
  "/images/What You Need (feat. Charrlotte Day Wilson).png",
  "/images/Young Folks.png",
  "/images/SLOW DANCING IN THE DARK.png",
  "/images/Cinderella.png",
  "/images/Keep Me Satisfied.png",
  "/images/Disco Dangerous.png",
  "/images/Aperture.png",
  "/images/Terrified.png",
  "/images/Don't Try This At Home.png",
  "/images/Let's Live.png"
];

// Sample design quotes JSON data
const music  = [
  {
    music: "What You Need (feat. Charrlotte Day Wilson) ",
    author: "KAYTRANADA",
    cover: "/images/What You Need (feat. Charrlotte Day Wilson).png",
    bgColor: "bg-cyan-950",
    appleLink: "https://music.apple.com/us/search?term=What%20You%20Need%20(feat.%20Charrlotte%20Day%20Wilson)",
    spotifyLink: "https://open.spotify.com/search/What%20You%20Need%20(feat.%20Charrlotte%20Day%20Wilson)"
  },
  {
    music: "Young Folks",
    author: "Peter Bjorn and John",
    cover: "/images/Young Folks.png",
    bgColor: "bg-stone-200",
    appleLink: "https://music.apple.com/us/search?term=Young%20Folks",
    spotifyLink: "https://open.spotify.com/search/Young%20Folks"
  },
  {
    music: "SLOW DANCING IN THE DARK ",
    author: "Joji",
    cover: "/images/SLOW DANCING IN THE DARK.png",
    bgColor: "bg-zinc-900",
    appleLink: "https://music.apple.com/us/search?term=SLOW%20DANCING%20IN%20THE%20DARK",
    spotifyLink: "https://open.spotify.com/search/SLOW%20DANCING%20IN%20THE%20DARK"
  },
  {
    music: "Cinderella",
    author: "Remi Wolf",
    cover: "/images/Cinderella.png",
    bgColor: "bg-red-800",
    appleLink: "https://music.apple.com/us/search?term=Cinderella%20remi%20wolf",
    spotifyLink: "https://open.spotify.com/search/Cinderela%20remi%20wof"
  },
  {
    music: "Keep Me Satisfied",
    author: "Jungle",
    cover: "/images/Keep Me Satisfied.png",
    bgColor: "bg-amber-100",
    appleLink: "https://music.apple.com/us/search?term=Keep%20Me%20Satisfied%20jungle",
    spotifyLink: "https://open.spotify.com/search/Keep%20Me%20Satisfied%20jungle"
  },
  {
    music: "Disco Dangerous",
    author: "Little Dragon",
    cover: "/images/Disco Dangerous.png",
    bgColor: "bg-blue-950",
    appleLink: "https://music.apple.com/us/search?term=Disco%20Dangerous%20little%20dragon",
    spotifyLink: "https://open.spotify.com/search/Disco%20Dangerous%20little%20dragon"
  },
  {
    music: "Aperture",
    author: "Harry Styles",
    cover: "/images/Aperture.png",
    bgColor: "bg-gray-950",
    appleLink: "https://music.apple.com/us/search?term=Aperture%20harry%20styles",
    spotifyLink: "https://open.spotify.com/search/Aperture%20harry%20styles"
  },
  {
    music: "Terrified",
    author: "Childish Gambino",
    cover: "/images/Terrified.png",
    bgColor: "bg-sky-900",
    appleLink: "https://music.apple.com/us/search?term=Terrified%20childish%20gambino",
    spotifyLink: "https://open.spotify.com/search/Terrified%20childish%20gambino"
  },
  {
    music: "Don't Try This At Home",
    author: "Future Utopia",
    cover: "/images/Don't Try This At Home.png",
    bgColor: "bg-amber-100",
    appleLink: "https://music.apple.com/us/search?term=Don't%20Try%20This%20At%20Home%20future%20utopia",
    spotifyLink: "https://open.spotify.com/search/Don't%20Try%20This%20At%20Home%20future%20utopia"
  },
  {
    music: "Let's Live",
    author: "FKJ",
    cover: "/images/Let's Live.png",
    bgColor: "bg-green-950",
    appleLink: "https://music.apple.com/us/search?term=Let's%20Live%20fkj",
    spotifyLink: "https://open.spotify.com/search/Let's%20Live%20fkj"
  }
];

// Get DOM elements
const body = document.querySelector("#body");
const albumImg = document.querySelector("img");
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const refreshBtn = document.querySelector("#refresh-btn");
const appleLink = document.querySelector("#apple-link");
const spotifyLink = document.querySelector("#spotify-link");

// Function to get random quote and background
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * music.length);
  const selectedQuote = music[randomIndex];

  // Update album cover
  albumImg.src = selectedQuote.cover;
  albumImg.alt = `${selectedQuote.music} Album cover`;

  // Update quote
  quoteText.textContent = `"${selectedQuote.music}"`;
  quoteAuthor.textContent = `— ${selectedQuote.author}`;

  // Update links
  appleLink.href = selectedQuote.appleLink;
  spotifyLink.href = selectedQuote.spotifyLink;

  // Use the album's specific background color
  body.className = `${selectedQuote.bgColor} min-h-screen flex items-center justify-center transition-all duration-700`;
}

// Add event listener to button
refreshBtn.addEventListener("click", getRandomQuote);
