/* eslint-disable */

import "./style.css";

window.onload = function generateExcuse() {
  let first = ["My dog", "My mom", "The cat", "My neighbor"];
  let second = ["ate my", "took my", "threw my", "destroyed my"];
  let third = ["homework", "shoes", "lunch", "dinner"];
  let fourth = ["last night.", "this morning.", "at work.", "after school."];

  let firstIndex = Math.floor(Math.random() * first.length);
  let secondIndex = Math.floor(Math.random() * second.length);
  let thirdIndex = Math.floor(Math.random() * third.length);
  let fourthIndex = Math.floor(Math.random() * fourth.length);

  let generateExcuse =
    first[firstIndex] +
    " " +
    second[secondIndex] +
    " " +
    third[thirdIndex] +
    "" +
    fourth[fourthIndex];

  document.getElementById("excuse").innerHTML = generateExcuse();

  return generateExcuse();
};
