const quotes = [
  "Professional nothinger since 2016.",
  "Connoisseur of chaos and caffeine.",
  "Master of bad ideas, student of fun.",
  "Breaking things and learning along the way.",
  "Finding inspiration in procrastination.",
  "Just vibing through the universe.",
  "Chasing dreams, catching coffee.",
  "Laughing through the chaos of life.",
  "Not lost, just exploring infinite distractions.",
  "Creative sparks and midnight ideas.",
  "Turning 'what ifs' into 'why nots.'",
  "Daydreamer, night thinker.",
  "Building castles in the digital sky.",
  "Adventurer in a world of pixels.",
  "Collecting moments, not things.",
  "Living on caffeine and code.",
  "Learning through trial and awesome errors.",
  "Fueled by curiosity and energy drinks.",
  "A work in progress, just like my projects.",
  "Seeing life through a prism of humor.",
  "Walking the fine line between genius and nonsense.",
  "Head in the clouds, fingers on the keyboard.",
  "Turning ideas into imperfect creations.",
  "Turning boredom into brilliance.",
  "Life’s too short to not make weird stuff.",
  "Pixel perfect, idea infinite.",
  "Exploring the universe, one thought at a time.",
  "Fighting dragons in my dreams, bugs in reality.",
  "Taking things apart to see how they tick.",
  "Transforming chaos into art since forever.",
  "Wandering soul with a keyboard compass.",
  "Crafting stories from binary and imagination.",
  "Changing the world one bad pun at a time.",
  "Happy accidents and intentional mistakes.",
  "Living by the motto: 'Why not?'",
  "A firm believer in the magic of ideas.",
  "Turning 'meh' into marvelous.",
  "Out here being 'meh-zing' at nothing.",
  "Dream big, procrastinate bigger.",
  "Curator of imaginary museums.",
  "Every day is a new patch update for life.",
  "Mistakes? No, they’re happy experiments.",
  "Problem solver by day, problem maker by night.",
  "Quirky, weird, and probably overthinking.",
  "Infinite loops, finite patience.",
  "Chief procrastinator at Life, Inc.",
  "Programming: 10% coding, 90% debugging.",
  "If curiosity killed the cat, I'm next.",
  "Here for the giggles and the glitches.",
  "Stealing ideas from the universe and remixing them.",
  "Always hungry for food and knowledge.",
  "Witty, gritty, and occasionally a bit glitchy."
];

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const aboutQuote = document.querySelector(".basic-infos p");
  if (aboutQuote) {
    aboutQuote.textContent = quotes[randomIndex];
  }
}

// Set a new random quote every 5 seconds
displayRandomQuote();
setInterval(displayRandomQuote, 10000);