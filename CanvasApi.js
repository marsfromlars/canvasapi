var CanvasApi = /** @class */ (function () {
    function CanvasApi(canvasEl) {
        this.canvasEl = canvasEl;
        this.ctx = canvasEl.getContext("2d");
    }
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
    CanvasApi.prototype.onMouse = function (mouseaction, callback) {
        this.canvasEl.addEventListener(mouseaction, function (event) {
            callback(event.offsetX, event.offsetY, event);
        });
    };
    return CanvasApi;
}());
