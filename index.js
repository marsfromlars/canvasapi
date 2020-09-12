var canvasEl = document.getElementById("canvas");
var c = new CanvasApi(canvasEl);
var colors = new Colors();
c.drawLine(0, 0, 100, 200);
c.setLineColor('red');
c.drawRect(10, 10, 20, 20);
for (var i = 0; i < 100; i++) {
    c.setFillColor(colors.getColorForIndex(i));
    c.fillRect(i * 5, i * 5, 5, 5);
}
c.setFillColor('red');
var ed = new SpriteEditor(c, 1, 1);
// c.onMouse( 'mousedown', function( x: number, y:number, e: MouseEvent ) {
//   c.fillRect( x, y, 5, 5 );
// });
// canvasEl.addEventListener( 'mousedown', function( event ) {
//   let x = event.offsetX;
//   let y = event.offsetY;
//   c.fillRect( x, y, 10, 10 );
// });
// c.handleMouse( ( x : number, y : number , ev : MouseEvent ) => {
//     console.log( ev.offsetX + ":" + ev.offsetY );
// } );
