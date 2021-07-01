// Author: Aaron Hobson

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let sliderDiv;
let slider;
let sadSpan;
let happySpan;
let buttonDiv;
let addExampleButton;
let trainButton;

// Global ML Variables
let featureExtractor;
let predictor;
let video;
let isModelReady;
let isTrainingComplete;
let addedExamples;

function setup() {
  // Build canvas and text UI 
  canvasDiv = createDiv();
  canvas = createCanvas(640, 480);
  canvas.parent(canvasDiv);
  textDiv = createDiv();
  textP = createP("Model loading, please wait...");
  textP.parent(textDiv);
  // Build the input
  buildInput();
  // initialize addedExamples  
  addedExamples = 0;
  // initialize isModelReady and isTrainingComplete
  isModelReady = false;
  isTrainingComplete = false;
  // load the video 
  video = createCapture(VIDEO, videoReady);
}

function draw() {

}

function buildInput() {
  // Create slider div 
  sliderDiv = createDiv();
  sadSpan = createSpan("Sad");
  sadSpan.parent(sliderDiv);
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.parent(sliderDiv);
  happySpan = createSpan("Happy");
  happySpan.parent(sliderDiv);
  // Create button div 
  buttonDiv = createDiv();
  addExampleButton = createButton("Add Example");
  addExampleButton.parent(buttonDiv);
  addExampleButton.mousePressed(function () {
    addedExamples++;
    textP.html("Added Examples: " + addedExamples);
    predictor.addImage(canvas, slider.value());
  });
  trainButton = createButton("Train Model");
  trainButton.parent(buttonDiv);
  trainButton.mousePressed(function() {
    buttonDiv.style("display", "none");
    sliderDiv.style("display", "none");
    predictor.train(whileTraining);
  });
}

function videoReady() {

}

function featureExtractorLoaded() {

}

function modelReady() {

}

function whileTraining(loss) {

}

function gotResults(error, results) {

}
