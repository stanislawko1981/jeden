var guess = 50;
var start = 0;
var stop = 100;
var smallest = start;
var biggest = stop;

function debug() {
  document.getElementById('guess').innerHTML = guess;
  document.getElementById('start_').innerHTML = start;
  document.getElementById('stop_').innerHTML = stop;
  document.getElementById('smallest').innerHTML = smallest;
  document.getElementById('biggest').innerHTML = biggest;
}

function begin() {
  document.getElementById('first').style.display = 'none';
  document.getElementById('second').style.display = '';
  document.getElementById('result').innerHTML = guess;
  debug();
}
function less() {
  biggest = guess;
  guess = Math.floor((biggest - smallest) / 2) + smallest;
  document.getElementById('result').innerHTML = guess;
  debug();
}
function more() {
  smallest = guess;
  guess = Math.floor((biggest - smallest) / 2) + smallest;
  document.getElementById('result').innerHTML = guess;
  debug();
}
function correct() {
  document.getElementById('first').style.display = '';
  document.getElementById('second').style.display = 'none';
  guess = Math.floor((stop - start) / 2);
  smallest = start;
  biggest = stop;
  document.getElementById('result').innerHTML = guess;
  debug();
}

document.getElementById('begin').addEventListener('click', begin, false);
document.getElementById('less').addEventListener('click', less, false);
document.getElementById('more').addEventListener('click', more, false);
document.getElementById('correct').addEventListener('click', correct, false);
document.getElementById('start').innerHTML = start;
document.getElementById('stop').innerHTML = stop;
