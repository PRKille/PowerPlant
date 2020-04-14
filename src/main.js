import { storeState, wateringCan, sunnyDay, redFood } from './plant.js';
import './scss/main.scss';
import $ from 'jquery';

const plant1 = storeState();
const plant2 = storeState();

$(document).ready(function() { 
  $('#feed').click(function() {
    const newPlant = plant1(redFood);
    $('#soil-value').text(newPlant.soil);
  });
  $('#water').click(function() {
    const newPlant = plant1(wateringCan);
    $('#water-value').text(newPlant.water);
  });
  $('#sun').click(function() {
    const newPlant = plant1(sunnyDay);
    $('#sun-value').text(newPlant.light);
  });

  $('#feed2').click(function() {
    const newPlant = plant2(redFood);
    $('#soil-value2').text(newPlant.soil);
    $('#water-value2').text(newPlant.water);
  });
  $('#water2').click(function() {
    const newPlant = plant2(wateringCan);
    $('#water-value2').text(newPlant.water);
  });
  $('#sun2').click(function() {
    const newPlant = plant2(sunnyDay);
    $('#sun-value2').text(newPlant.light);
  });
});

