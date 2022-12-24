const subtitle = document.getElementsByClassName("card-subtitle")[0];

const createWord = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

const createSubtitle = text => text.split(" ").map(addWord);

createSubtitle("Yeah, I’m a human person. Also a student, designer, and developer at some stuff hehe. And I have some projects that you can check here :D And now some more important stuff that you need if you want to contact me: My time zone is EET so check the timezone before you contact me,and now just add me on Discord (Gaba#6066) or on Twitter and that's kinda it. ");