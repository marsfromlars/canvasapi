var ColorPicker = /** @class */ (function () {
    function ColorPicker(canvas, callback) {
        var _this = this;
        this.canvas = canvas;
        this.callback = callback;
        canvas.onMouse('click', function (x, y, e) {
            _this.color = canvas.getColorAt(x, y);
            if (_this.callback) {
                _this.callback(_this.color);
            }
        });
    }
    ColorPicker.prototype.getColor = function () {
        return this.color;
    };
    return ColorPicker;
}());
//# sourceMappingURL=ColorPicker.js.map