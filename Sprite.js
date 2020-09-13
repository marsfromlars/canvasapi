/**
 * 2D pixel image
 *
 */
var Sprite = /** @class */ (function () {
    function Sprite(w, h) {
        this.data = {};
        this.w = w;
        this.h = h;
    }
    Sprite.prototype.clear = function () {
        this.data = {};
    };
    Sprite.prototype.set = function (x, y, color) {
        this.check(x, y);
        this.data[x + ':' + y] = color;
    };
    Sprite.prototype.get = function (x, y) {
        this.check(x, y);
        return this.data[x + ':' + y];
    };
    Sprite.prototype.check = function (x, y) {
        if (x < 0) {
            throw new Error("x < 0");
        }
        if (x >= this.w) {
            throw new Error("x > " + this.w);
        }
        if (y < 0) {
            throw new Error("y < 0");
        }
        if (y >= this.h) {
            throw new Error("y > " + this.h);
        }
    };
    return Sprite;
}());
//# sourceMappingURL=Sprite.js.map