import { stateChanger, blueFood, wateringCan, sunnyDay, doubleFoodChanger } from './plant.js';
import './scss/main.scss';
import $ from 'jquery';

$(document).ready(function() {
  // This function has side effects because we are using JQuery. 
  $('#feed').click(function() {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });
  $('#water').click(function() {
    const newState = stateChanger(wateringCan);
    $('#water-value').text(newState.water);
  });
  $('#sun').click(function() {
    const newState = stateChanger(sunnyDay);
    $('#sun-value').text(newState.light);
  });

  $('#feed2').click(function() {
    // const newState = stateChanger(redFood)(wateringCan);
    const newState2 = doubleFoodChanger(wateringCan);
    // const newState2 = stateChanger(wateringCan);
    $('#soil-value2').text(newState2.soil);
    $('#water-value2').text(newState2.water);
  });
  $('#water2').click(function() {
    const newState2 = stateChanger(wateringCan);
    $('#water-value2').text(newState2.water);
  });
  $('#sun2').click(function() {
    const newState2 = stateChanger(sunnyDay);
    $('#sun-value2').text(newState2.light);
  });
});

