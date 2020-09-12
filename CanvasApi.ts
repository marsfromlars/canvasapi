type MouseCallback = ( x: number, y: number, e: MouseEvent ) => void;

class CanvasApi {

  canvasEl: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor( canvasEl: HTMLCanvasElement ) {

    this.canvasEl = canvasEl;
    this.ctx = canvasEl.getContext( "2d" );

  }

  drawLine( x: number, y: number, x1: number, y1: number ) {
    this.ctx.moveTo( x, y );
    this.ctx.lineTo( x1, y1 );
    this.ctx.stroke();
  }

  drawRect( x: number, y: number, w: number, h: number ) {
    this.ctx.strokeRect( x, y, w, h );
  }

  fillRect( x: number, y: number, w: number, h: number ) {
    this.ctx.fillRect( x, y, w, h );
  }

  setLineColor( c: string ) {
    this.ctx.strokeStyle = c;
  }

  setFillColor( c: string ) {
    this.ctx.fillStyle = c;
  }

  onMouse( mouseaction: string, callback: ( x: number, y: number, e: MouseEvent ) => void ) {
    this.canvasEl.addEventListener( mouseaction, function( event: MouseEvent ) {
      callback( event.offsetX, event.offsetY, event );
    });
  }

}

