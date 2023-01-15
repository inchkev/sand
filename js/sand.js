var canvas;
var gl;

//
// start here
//
function main() {
  canvas = document.querySelector("#glcanvas");

  // Initialize the GL context
  gl = canvas.getContext("webgl");

  resizeCanvas();

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }

  render();
}

function render() {
  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}

function resizeCanvas() {
  var width = canvas.clientWidth;
  var height = canvas.clientHeight;

  canvas.width = width;
  canvas.height = height;
  render();
}

window.addEventListener("resize", resizeCanvas);
main();
