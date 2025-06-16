// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: June 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the volume of the triangle
 */
function displayNumbers() {
  // Information about values
  
  let numbers = "";
  let userNumone = parseInt(document.getElementById('userNumone').value);
  let counter = userNumone;
  let userNumtwo = parseInt(document.getElementById('userNumtwo').value);

  while (counter <= userNumtwo) { 
    numbers = numbers + counter + "<br>";
    counter = counter + 1;
  }

  // Display
  document.getElementById('display-results').innerHTML = numbers;
}