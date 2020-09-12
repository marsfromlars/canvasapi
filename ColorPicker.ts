class ColorPicker {
  
  canvas: CanvasApi;
  color: string;
  callback: (color: string) => void;
  
  constructor( canvas: CanvasApi, callback: ( color: string ) => void ) {
    this.canvas = canvas;
    this.callback = callback;
    canvas.onMouse( 'click', (x,y,e) => {
      this.color = canvas.getColorAt( x, y );
      if( this.callback ) {
        this.callback( this.color );
      }
    });
  }

  getColor() {
    return this.color;
  }

}

