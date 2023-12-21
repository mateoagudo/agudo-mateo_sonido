let osc, osc2, playing, freq, freq2, amp, amp2;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator("square");
  osc2 = new p5.Oscillator("sine");
}

function draw() {
  background(220);
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  freq2 = constrain(map(mouseX, 0, width, 500, 1000), 500, 1000);

  // amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);
  amp = 0.5;

  text("tap to play", 20, 20);
  text("freq: " + freq, 20, 40);
  text("amp: " + amp, 20, 60);

  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();
  osc2.start();
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  os2.amp(0, 0.5);
  playing = false;
}
