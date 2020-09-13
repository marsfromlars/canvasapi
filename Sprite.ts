/**
 * 2D pixel image
 * 
 */
class Sprite {

  w: number;
  h: number;
  data = {};

  constructor( w: number, h: number ) {
    this.w = w;
    this.h = h;
  }

  clear() {
    this.data = {};
  }

  set( x: number, y: number, color: string ) {
    this.check( x, y );
    this.data[ x + ':' + y ] = color;
  }

  get( x: number, y: number ) {
    this.check( x, y );
    return this.data[ x + ':' + y ];
  }

  private check( x: number, y: number ) {
    if( x < 0 ) {
      throw new Error( "x < 0" );
    }
    if( x >= this.w ) {
      throw new Error( "x > " + this.w );
    }
    if( y < 0 ) {
      throw new Error( "y < 0" );
    }
    if( y >= this.h ) {
      throw new Error( "y > " + this.h );
    }
  }

}

