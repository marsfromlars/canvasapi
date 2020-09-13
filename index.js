var c = CanvasApi.forId('canvas');
var picker = CanvasApi.forId('picker');
var colors = new Colors();
// picker.drawLine( 0, 0, 100, 200 );
// picker.setLineColor( 'red' );
// picker.drawRect( 10, 10, 20, 20 );
var pixel = 20;
var y = 0;
var x = 0;
for (var i = 0; i < 100; i++) {
    picker.setFillColor(colors.getColorForIndex(i));
    picker.fillRect(x * pixel, y * pixel, pixel, pixel);
    x++;
    if (x > 400 / pixel) {
        x = 0;
        y++;
    }
}
c.setFillColor('red');
var ed = new SpriteEditor(c, pixel, pixel);
new ColorPicker(picker, function (color) {
    console.log(color);
    ed.setPenColor(color);
});
//# sourceMappingURL=index.js.map