/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net"];

  function domainGenerator(array1, array2, array3, array4) {
    let domainArray = [];
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        for (let x = 0; x < array3.length; x++) {
          for (let y = 0; y < array4.length; y++) {
            domainArray.push(
              `${array1[i]}${array2[j]}${array3[x]}${array4[y]}`
            );
          }
        }
      }
    }
    for (let k = 0; k < domainArray.length; k++) {
      console.log(domainArray[k]);
    }
  }
  domainGenerator(pronoun, adj, noun, ext);
};
