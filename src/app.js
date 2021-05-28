/* eslint-disable */

import "./style.css";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let first = ["My dog", "My mom", "The cat", "My neighbor"];
  let second = ["ate my", "took my", "threw my", "destroyed my"];
  let third = ["homework", "shoes", "lunch", "dinner"];
  let fourth = ["last night.", "this morning.", "at work.", "after school."];

  let firstIndex = 0;
  let secondIndex = 0;
  let thirdIndex = 0;
  let fourthIndex = 0;

  return (
    first[firstIndex] +
    " " +
    second[secondIndex] +
    " " +
    third[thirdIndex] +
    " " +
    fourth[fourthIndex]
  );
};
