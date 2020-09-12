let c = CanvasApi.forId( 'canvas' );
let picker = CanvasApi.forId( 'picker' );
let colors = new Colors();
// picker.drawLine( 0, 0, 100, 200 );
// picker.setLineColor( 'red' );
// picker.drawRect( 10, 10, 20, 20 );

let pixel = 20;

let y = 0;
let x = 0;
for( let i = 0; i < 100; i++ ) {
  picker.setFillColor( colors.getColorForIndex( i ) );
  picker.fillRect( x * pixel, y * pixel, pixel, pixel );
  x++;
  if( x > 400 / pixel ) {
    x = 0;
    y++;
  }
}

c.setFillColor( 'red' );

let ed = new SpriteEditor( c, pixel, pixel, );
new ColorPicker( picker, ( color ) => {
  console.log( color );
  ed.setPenColor( color );
});


