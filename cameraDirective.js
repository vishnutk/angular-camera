myApp.directive('cameraDirective', function($rootScope) {
    return {
        replace: true,
        restrict: 'E',
        link: function(scope, elem, attr) {
            
            function onLoad() {
                var camList = webcam.getCameraList();
                if(camList.length > 0) {
                    $rootScope.cameraSupported = true;
                }
            };
            
            function debug(type, string) {
	            console.log(type + ": " + string);
            };
            
            $(elem).webcam({
                width: 500,
                height: 500,
                mode: "callback",
                swffile: "jscam_canvas_only.swf",
                onTick: function() {},
                onSave: function() {},
                onCapture: function() {},
                debug: debug,
                onLoad: onLoad
            });
        }
    }
});