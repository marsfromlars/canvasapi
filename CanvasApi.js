var CanvasApi = /** @class */ (function () {
    function CanvasApi(canvasEl) {
        this.rgbToHex = function (r, g, b) {
            if (r > 255 || g > 255 || b > 255)
                throw "Invalid color component";
            return ((r << 16) | (g << 8) | b).toString(16);
        };
        this.canvasEl = canvasEl;
        this.ctx = canvasEl.getContext("2d");
    }
    CanvasApi.forId = function (canvasId) {
        return new CanvasApi(document.getElementById(canvasId));
    };
    CanvasApi.prototype.drawLine = function (x, y, x1, y1) {
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x1, y1);
        this.ctx.stroke();
    };
    CanvasApi.prototype.drawRect = function (x, y, w, h) {
        this.ctx.strokeRect(x, y, w, h);
    };
    CanvasApi.prototype.fillRect = function (x, y, w, h) {
        this.ctx.fillRect(x, y, w, h);
    };
    CanvasApi.prototype.setLineColor = function (c) {
        this.ctx.strokeStyle = c;
    };
    CanvasApi.prototype.setFillColor = function (c) {
        this.ctx.fillStyle = c;
    };
    CanvasApi.prototype.getColorAt = function (x, y) {
        var p = this.ctx.getImageData(x, y, 1, 1).data;
        return "#" + (("000000" + this.rgbToHex(p[0], p[1], p[2])).slice(-6)).toUpperCase();
    };
    CanvasApi.prototype.onMouse = function (mouseaction, callback) {
        this.canvasEl.addEventListener(mouseaction, function (event) {
            callback(event.offsetX, event.offsetY, event);
        });
    };
    return CanvasApi;
}());
