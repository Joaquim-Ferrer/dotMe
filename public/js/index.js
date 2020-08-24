let separatorSoFarIndex = 0;
let separatorInterval = null;
let separatorCarOn = false;

const writeSeparator = () => {
  let separator = document.getElementById("separator");
  let separatorPhrase =
    "<!--This is a comment. Comments apparently appear in the browser-->";
  separator.innerText = separatorPhrase.slice(0, separatorSoFarIndex);
  if (separatorCarOn) {
    separator.classList.add("text-thingy-on");
  } else {
    separator.classList.remove("text-thingy-on");
  }
  separatorSoFarIndex += 1;
};

const toggleSeparatorCarOn = () => {
  separatorCarOn = !separatorCarOn;
};

window.onload = () => {
  setInterval(toggleSeparatorCarOn, 500);
  separatorInterval = setInterval(writeSeparator, 50);
};
