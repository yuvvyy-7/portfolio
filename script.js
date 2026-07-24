const cheerfulQuestions = [
  "How are you doing today? 😊",
  "How's your day going so far? ✨",
  "What made you smile today? 😄",
  "How has your day been treating you? 🌸",
  "What's the best thing that happened to you today? 🌟",
  "Are you having a good day? 💛",
  "What's been keeping you happy today? ☀️",
  "How are you feeling today? 😊",
  "Did anything exciting happen today? 🎉",
  "What's something nice you did for yourself today? 🌷",
  "How's everything going on your side? ✨",
  "What are you up to today? 😄",
  "Has your day been fun so far? 🎈",
  "What's the highlight of your day? 🌟",
  "Feeling good today? 💫",
  "Tell me, how's your day been? 😊",
  "What's putting a smile on your face today? 😁",
  "How's life treating you today? 🌟",
  "Did today bring you any happy surprises? 🎁",
  "What's making today a good day for you? 💖"
];



const lawl = document.querySelector('.js-lawl-sprite');
const lawlText = document.querySelector('.js-lawl-sprite-text'); 

function renderLawlText () {
    const indexRandom = Math.floor(Math.random() * 20);

    const msg = cheerfulQuestions[indexRandom];

    lawlText.innerHTML = `${msg}`;
}

renderLawlText();

lawl.addEventListener('mouseenter', () => {
    lawlHover();
})

lawl.addEventListener('mouseleave', () => {
    lawlNoHover();
})




function lawlHover() {
    lawlText.classList.remove('-translate-x-7');
    lawlText.classList.add('opacity-90', 'translate-x-4');
   
}



function lawlNoHover() {
    document.querySelector('.js-lawl-sprite-text').innerHTML = ``;

    document.querySelector('.js-lawl-sprite-text').classList.remove('opacity-90', 'translate-x-4');
    lawlText.classList.add('-translate-x-7');    
    renderLawlText();
}