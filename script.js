$(document).ready(function() {
    $("#camera").webcam({
        width: 500,
        height: 500,
        mode: "callback",
        swffile: "jscam_canvas_only.swf",
        onTick: function() {},
        onSave: function() {},
        onCapture: function() {},
        debug: function() {},
        onLoad: function() {}
    });
});