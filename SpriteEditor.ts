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
          x = Math.floor( x / this.scaleX );
          y = Math.floor( y / this.scaleY );
          this.setPixel( x, y, this.penColor );
        }
      }
    });
    this.canvas.onMouse( 'mouseleave', (x,y,e) =>{
      this.mousedown = false;
    });
  }

  setPixel( x: number, y: number, color: string ) {
    this.canvas.fillRect( x * this.scaleX, y * this.scaleY, this.scaleX, this.scaleY );
  }

  setPenColor( penColor: string ) {
    this.penColor = penColor;
    this.canvas.setFillColor( penColor );
  }

  setPenWidth( penWidth: number ) {
    this.penWidth = penWidth;
  }

  activatePen( active: boolean ) {
    this.penActive = active;
  }
  
}
