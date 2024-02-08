/* eslint-disable */
import "bootstrap";
import "./style.css";

//create a random excuse

const who = ["My dog ", "My grandma ", "His suegro ", "My bird "];
const action = ["ate ", "peed on ", "broke ", "lost "];
const what = ["my homework ", "the keys ", "the car ", "my sister "];
const when = [
  "before class ",
  "right on time ",
  "this morning ",
  "during lunch "
];

function randomIndex(len) {
  return Math.floor(Math.random() * len);
}

window.onload = function() {
  console.log("hi");
};

const indexWho = randomIndex(who.length);
const indexAction = randomIndex(action.length);
const indexWhat = randomIndex(what.length);
const indexWhen = randomIndex(when.length);
const excuse =
  who[indexWho] + action[indexAction] + what[indexWhat] + when[indexWhen];

document.querySelector("div").innerText = excuse;
