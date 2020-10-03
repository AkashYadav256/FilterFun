var oimg = null;
var col = "#000000";

function upload() {
  var x = document.getElementById("can");
  var i = document.getElementById("fip");
  oimg = new SimpleImage(i);
  oimg.drawTo(x);
}

function gray() {
  if (oimg==null || !oimg.complete()){
    alert("There is no image to grayscale!");
  }
  else{
    var aimg = new SimpleImage(oimg);
    for (var pixel of aimg.values()) {
          var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
          pixel.setRed(avg);
          pixel.setBlue(avg);
          pixel.setGreen(avg);
      }
    var x = document.getElementById("can1");
    aimg.drawTo(x);
  }
}

function red() {
  if (oimg==null || !oimg.complete()){
    alert("There is no image to redden!");
  }
  else{
    var aimg = new SimpleImage(oimg);
    for (var pixel of aimg.values()) {
          var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
      if (avg < 128) {
          pixel.setRed(2*avg);
          pixel.setBlue(0);
          pixel.setGreen(0);
      }
      else {
          pixel.setRed(255);
          pixel.setBlue(2*avg-255);
          pixel.setGreen(2*avg-255);
      }
      }
    var x = document.getElementById("can1");
    aimg.drawTo(x);
  }
}

function blurIt() {
  if (oimg==null || !oimg.complete()){
    alert("There is no image to blur!");
  }
  else{
    var ans = new SimpleImage(oimg);

    var w = ans.getWidth(); //x
var h = ans.getHeight(); //y



for (pixel of ans.values()) {

    var x = pixel.getX();
    var y = pixel.getY();

    if (x>0 && x<w-1 && y>0 && y<h-1){

        var p = oimg.getPixel(x-1,y-1);
        var r = p.getRed();
        var b = p.getBlue();
        var g = p.getGreen();

        var p = oimg.getPixel(x,y-1);
        r = r+p.getRed();
        b = b+p.getBlue();
        g = g+p.getGreen();

        var p = oimg.getPixel(x+1,y-1);
        r = r+p.getRed();
        b = b+p.getBlue();
        g = g+p.getGreen();

        var p = oimg.getPixel(x-1,y);
        r = r+p.getRed();
        b = b+p.getBlue();
        g = g+p.getGreen();

        var p = oimg.getPixel(x,y);
        r = r+p.getRed();
        b = b+p.getBlue();
        g = g+p.getGreen();

        var p = oimg.getPixel(x+1,y);
        r = r+p.getRed();
        b = b+p.getBlue();
        g = g+p.getGreen();

        var p = oimg.getPixel(x-1,y+1);
        r = r+p.getRed();
        b = b+p.getBlue();
        g = g+p.getGreen();

        var p = oimg.getPixel(x,y+1);
        r = r+p.getRed();
        b = b+p.getBlue();
        g = g+p.getGreen();

        var p = oimg.getPixel(x+1,y+1);
        r = r+p.getRed();
        b = b+p.getBlue();
        g = g+p.getGreen();

        r = r/9;
        b = b/9;
        g = g/9;

        pixel.setRed(r);
        pixel.setBlue(b);
        pixel.setGreen(g);
    }
}
    var x = document.getElementById("can1");
    ans.drawTo(x);
  }
}

function reset() {
  if (oimg==null || !oimg.complete()){
    alert("There is no image to remove!");
  }
  else{
    var x = document.getElementById("can");
    var ctx = x.getContext("2d");
    ctx.clearRect(0 ,0, x.width, x.height);
    var y = document.getElementById("can1");
    var ctx = y.getContext("2d");
    ctx.clearRect(0 ,0, y.width, y.height);
    oimg = null;
  }
}

function rBow() {
  if (oimg==null || !oimg.complete()){
    alert("There is no image!");
  }
  else{
    var aimg = new SimpleImage(oimg);
    var h = aimg.getHeight();
    for (var pixel of aimg.values()) {
      var y = pixel.getY();
      var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
      if (y<h/3 && y>=0) {
        //orange
        if (avg < 128) {
          pixel.setRed(2*avg);
          pixel.setBlue(0);
          pixel.setGreen(0.8*avg);
      }
      else {
          pixel.setRed(255);
          pixel.setBlue(2*avg-255);
          pixel.setGreen(1.2*avg-51);
      }
      }
      else if (y>=h/3 && y<2*h/3){
        //white
        if (avg < 128) {
          pixel.setRed(2*avg);
          pixel.setBlue(2*avg);
          pixel.setGreen(2*avg);
      }
      else {
          pixel.setRed(255);
          pixel.setBlue(255);
          pixel.setGreen(255);
      }
      }
      else if (y>2*h/3) {
        //green
        if (avg < 128) {
          pixel.setRed(0);
          pixel.setBlue(0);
          pixel.setGreen(2*avg);
      }
      else {
          pixel.setRed(2*avg-255);
          pixel.setBlue(2*avg-255);
          pixel.setGreen(255);
      }
      }


      }
    var x = document.getElementById("can1");
    aimg.drawTo(x);
  }
}

function fadeIt() {
  if (oimg==null || !oimg.complete()){
    alert("There is no image!");
  }
  else{
    var aimg = new SimpleImage(oimg.width, oimg.height);
    for (var pixel of aimg.values()) {
    var r = Math.random();
    var x = pixel.getX();
    var y = pixel.getY();
    if (r<0.5) {
      pixel.setRed(oimg.getPixel(x,y).getRed());
      pixel.setBlue(oimg.getPixel(x,y).getBlue());
      pixel.setGreen(oimg.getPixel(x,y).getGreen());
    }
    else {
      pixel.setRed(200);
      pixel.setBlue(200);
      pixel.setGreen(200);
    }
    }
    var x = document.getElementById("can1");
    aimg.drawTo(x);
  }
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function setBlack(pixel){
    pixel.setRed(hexToRgb(col).r);
    pixel.setGreen(hexToRgb(col).g);
    pixel.setBlue(hexToRgb(col).b);
}
function pixelOnEdge(pixel,image,borderWidth){
    var x = pixel.getX();
    var y = pixel.getY();
    if (x <= borderWidth || x >= image.getWidth() - borderWidth || y <= borderWidth || y >= image.getHeight() - borderWidth) return true;
    return false;
}

function border() {
  if (oimg==null || !oimg.complete()){
    alert("There is no image!");
  }
  else{
  var aimg = new SimpleImage(oimg);
for (var pixel of aimg.values()){
    if (pixelOnEdge(pixel,aimg,10)){
        pixel = setBlack(pixel);
    }
}
  var x = document.getElementById("can1");
    aimg.drawTo(x);
  }
}

function cpick() {
  var c = document.getElementById("cpick");
  col = c.value;
}
