var SpriteEditor = /** @class */ (function () {
    function SpriteEditor(canvas, scaleX, scaleY) {
        this.mousedown = false;
        this.canvas = canvas;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.installHandlers();
        this.activatePen(true);
    }
    SpriteEditor.prototype.installHandlers = function () {
        var _this = this;
        this.canvas.onMouse('mousedown', function (x, y, e) {
            _this.mousedown = true;
        });
        this.canvas.onMouse('mouseup', function (x, y, e) {
            _this.mousedown = false;
        });
        this.canvas.onMouse('mousemove', function (x, y, e) {
            if (_this.penActive) {
                if (_this.mousedown) {
                    x = Math.floor(x / _this.scaleX);
                    y = Math.floor(y / _this.scaleY);
                    _this.setPixel(x, y, _this.penColor);
                }
            }
        });
        this.canvas.onMouse('mouseleave', function (x, y, e) {
            _this.mousedown = false;
        });
    };
    SpriteEditor.prototype.setPixel = function (x, y, color) {
        this.canvas.fillRect(x * this.scaleX, y * this.scaleY, this.scaleX, this.scaleY);
    };
    SpriteEditor.prototype.setPenColor = function (penColor) {
        this.penColor = penColor;
        this.canvas.setFillColor(penColor);
    };
    SpriteEditor.prototype.setPenWidth = function (penWidth) {
        this.penWidth = penWidth;
    };
    SpriteEditor.prototype.activatePen = function (active) {
        this.penActive = active;
    };
    return SpriteEditor;
}());
