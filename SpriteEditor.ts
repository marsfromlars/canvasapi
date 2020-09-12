class SpriteEditor {
  
  canvas: CanvasApi;
  penColor: string;
  penWidth: number;
  mousedown: boolean = false;
  penActive: boolean;
  scaleX: number;
  scaleY: number;

  constructor( canvas: CanvasApi, scaleX: number, scaleY: number ) {
    this.canvas = canvas;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.installHandlers();
    this.activatePen( true );
  }

  installHandlers() {
    this.canvas.onMouse( 'mousedown', (x,y,e) => {
      this.mousedown = true;
    });
    this.canvas.onMouse( 'mouseup', (x,y,e) => {
      this.mousedown = false;
    });
    this.canvas.onMouse( 'mousemove', (x,y,e) => {
      if( this.penActive ) {
        if( this.mousedown ) {
          this.setPixel( x, y, this.penColor );
        }
      }
    });
  }

  setPixel( x: number, y: number, color: string ) {
    this.canvas.fillRect( x * this.scaleX, y * this.scaleY, this.scaleX, this.scaleY );
  }

  setPenColor( penColor: string ) {
    this.penColor = penColor;
  }

  setPenWidth( penWidth: number ) {
    this.penWidth = penWidth;
  }

  activatePen( active: boolean ) {
    this.penActive = active;
  }
  
}
