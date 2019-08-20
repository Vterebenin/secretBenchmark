function RandomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function GlitchText() {
  var container = document.createElement("div"),
    content = document.createElement("div"),
    output = document.createElement("div")

  container.innerHTML = ""
  container.setAttribute("class", "ternow1308-delete-me")
  container.style.textAlign = "center"
  container.style.background = "rgba(0, 0, 0, 0.8)"
  container.style.color = "rgba(231, 176, 228, 0.8)"
  container.style.position = "fixed"
  container.style.left = "0"
  container.style.right = "0"
  container.style.top = "0"
  container.style.bottom = "0"
  container.style.display = "flex"
  container.style.zIndex = "999999"
  container.style.justifyContent = "center"
  container.style.alignItems = "center"
  container.style.transition = "opacity 1s ease-out"
  output.innerHTML = ""
  content.innerHTML = "they slipped you a 🐖 !<br> <p style='font-size: 24px'> with love from Valentine🐽Terebenin </p>"
  content.style.display = "none"
  output.style.fontSize = "72px"
  
  var text = content.innerHTML
  container.appendChild(content)
  container.appendChild(output)
  document.body.appendChild(container)

  var length = text.length,
    glitch = ['▒', '░', '█', '▓', '/', '.'],
    start = Date.now();

  var timerId = setInterval(function () {
    var timePassed = Date.now() - start,
      part = timePassed / 1000,
      countShowSymbols = Math.round(part * length),
      errorShow = Math.round((1 - part) * countShowSymbols),
      outputText = text.substring(0, countShowSymbols);

    for (var i = 0; i < errorShow; i++) {
      var strArr = outputText.split(""),
        p = RandomRange(0, length),
        k = RandomRange(0, 5);
      strArr[p] = glitch[k];
      outputText = strArr.join("");
    }

    output.innerHTML = outputText;

  }, 50);

  setTimeout(function () {
    clearInterval(timerId);
    output.innerHTML = text;
  }, 1000);

  setTimeout(function () {
    var elements = document.getElementsByClassName('ternow1308-delete-me');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.style.opacity = 0
    }
  }, 5000)

  setTimeout(function () {
    var elements = document.getElementsByClassName('ternow1308-delete-me');

    while (elements[0]) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }, 6000)
}

window.onkeypress = handle;

var lastTime = Date.now();
var phrase = "";


function handle(e) {

  var text = e.key;

  if (Date.now() - lastTime > 400) {
    phrase = ""
  }
  lastTime = Date.now();

  phrase += text;
  if (phrase.toLocaleLowerCase() === "ternow1308") {
    GlitchText()
  }
}
