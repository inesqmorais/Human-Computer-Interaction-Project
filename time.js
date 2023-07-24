function startTime() {
  var today = new Date();
  var h = today.getHours();
  h = checkTime(h);
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('titulo').innerHTML = h + ":" + m; 
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function update() {
  localStorage.setItem('ecraAnterior', localStorage.getItem('frame'));
	localStorage.setItem('frame', parse(location.href));
}

function parse(url) {
	return url.substring(url.lastIndexOf('/')+1);
}