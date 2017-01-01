 var canvas, ctx, flag = false,
     prevX = 0,
     currX = 0,
     prevY = 0,
     currY = 0,
     dot_flag = false;


 var x = "black",
     y = 2;

 function init() {
     canvas = document.getElementById('can');
     ctx = canvas.getContext("2d");
     canvas.addEventListener("mousemove", function (e) {
         findxy('move', e)
     }, false);
     canvas.addEventListener("mousedown", function (e) {
         findxy('down', e)
     }, false);
     canvas.addEventListener("mouseup", function (e) {
         findxy('up', e)
     }, false);
     canvas.addEventListener("mouseout", function (e) {
         findxy('out', e)
     }, false);

     canvas1 = document.getElementById('can1');
     ctx1 = canvas1.getContext("2d");
 }

 function draw() {
     ctx1.beginPath();
     ctx1.moveTo(prevX, prevY);
     ctx1.lineTo(currX, currY);
     ctx1.strokeStyle = x;
     ctx1.lineWidth = y;
     ctx1.stroke();
     ctx1.closePath();
     console.log("can   " + currX + " " + currY);
 }

 function findxy(res, e) {
     if (res == 'down') {
         prevX = currX;
         prevY = currY;
         currX = e.clientX - canvas.offsetLeft
         currY = e.clientY - canvas.offsetTop
         flag = true;
     }
     if (res == "out") {
         flag = false;
     }
     if (res == 'up') {
         flag = false;
         convertCanvasToImage();
//         cropImageFromCanvas();
         //         $('img').css('z-index','');
     }
     if (res == 'move') {
         if (flag) {
             prevX = currX;
             prevY = currY;
             currX = e.clientX - canvas.offsetLeft;
             currY = e.clientY - canvas.offsetTop;
             draw();

         }
     }
 }
 //var image = new Image();
 function convertCanvasToImage() {
     var image = new Image();
     image.src = canvas1.toDataURL("image/png");
     var element = document.getElementById("image-position");
     element.appendChild(image);
     $('img').draggable();
     $('img').click(function () {
         $(this).css("z-index", "1");
     });

     clear_rectangle();
 }

 function clear_rectangle() {
     $('#can1').css('display', 'none');
     $('#image-position').addClass('can2');
     ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

 }




 function cropImageFromCanvas() {

     var w = canvas1.width,
         h = canvas1.height,
         pix = {
             x: [],
             y: []
         },
         imageData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height),
         x, y, index;

     for (y = 0; y < h; y++) {
         for (x = 0; x < w; x++) {
             index = (y * w + x) * 4;
             if (imageData.data[index + 3] > 0) {

                 pix.x.push(x);
                 pix.y.push(y);

             }
         }
     }
     pix.x.sort(function (a, b) {
         return a - b
     });
     pix.y.sort(function (a, b) {
         return a - b
     });
     var n = pix.x.length - 1;

     w = pix.x[n] - pix.x[0];
     h = pix.y[n] - pix.y[0];
     var cut = ctx1.getImageData(pix.x[0], pix.y[0], w, h);

     canvas1.width = w;
     canvas1.height = h;
     ctx1.putImageData(cut, 0, 0);

     var image = new Image();
     image.src = canvas1.toDataURL("image/png");
     var element = document.getElementById("image-position");
     element.appendChild(image);
     $('img').draggable();
     $('img').click(function () {
         $(this).css("z-index", "1");
     });

     clear_rectangle();
     //var win=window.open(image, '_blank');
     //win.focus();

 }