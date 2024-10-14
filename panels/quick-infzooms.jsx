(function quickInfzooms(thisObj) {
    function onZoomIn_10() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Infzooms - Zoom In 10: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Infzooms - Zoom In 10");

        // Effect 'Infzoom'
        // Zoom In 10px
        function fxInfzoom() {
            const props = {
                offset: [10, 10],
            };
            // Infinite Zooming effect
            // Props:
            // - offset: offset in percent (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current scale
            // The second keyframe at the outPoint, with the position set to current scale + offset

            // Check props
            if (!props.offset) {
                _alert(
                    "Error | offset is not defined in props, you must define offset."
                );
                return;
            }

            if (props.offset.length !== 2) {
                _alert("Error | offset must be an array of two floats.");
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // For each selected layer
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];

                var currentScale = [
                    layer.transform.scale.value[0],
                    layer.transform.scale.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.scale.setValueAtTime(
                    layer.inPoint,
                    currentScale
                );
                var key2 = layer.transform.scale.setValueAtTime(
                    layer.outPoint,
                    [
                        currentScale[0] + props.offset[0],
                        currentScale[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Infzoom'
        // Call effect
        fxInfzoom();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onZoomIn_20() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Infzooms - Zoom In 20: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Infzooms - Zoom In 20");

        // Effect 'Infzoom'
        // Zoom In 20px
        function fxInfzoom() {
            const props = {
                offset: [20, 20],
            };
            // Infinite Zooming effect
            // Props:
            // - offset: offset in percent (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current scale
            // The second keyframe at the outPoint, with the position set to current scale + offset

            // Check props
            if (!props.offset) {
                _alert(
                    "Error | offset is not defined in props, you must define offset."
                );
                return;
            }

            if (props.offset.length !== 2) {
                _alert("Error | offset must be an array of two floats.");
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // For each selected layer
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];

                var currentScale = [
                    layer.transform.scale.value[0],
                    layer.transform.scale.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.scale.setValueAtTime(
                    layer.inPoint,
                    currentScale
                );
                var key2 = layer.transform.scale.setValueAtTime(
                    layer.outPoint,
                    [
                        currentScale[0] + props.offset[0],
                        currentScale[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Infzoom'
        // Call effect
        fxInfzoom();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onZoomIn_50() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Infzooms - Zoom In 50: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Infzooms - Zoom In 50");

        // Effect 'Infzoom'
        // Zoom In 50px
        function fxInfzoom() {
            const props = {
                offset: [50, 50],
            };
            // Infinite Zooming effect
            // Props:
            // - offset: offset in percent (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current scale
            // The second keyframe at the outPoint, with the position set to current scale + offset

            // Check props
            if (!props.offset) {
                _alert(
                    "Error | offset is not defined in props, you must define offset."
                );
                return;
            }

            if (props.offset.length !== 2) {
                _alert("Error | offset must be an array of two floats.");
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // For each selected layer
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];

                var currentScale = [
                    layer.transform.scale.value[0],
                    layer.transform.scale.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.scale.setValueAtTime(
                    layer.inPoint,
                    currentScale
                );
                var key2 = layer.transform.scale.setValueAtTime(
                    layer.outPoint,
                    [
                        currentScale[0] + props.offset[0],
                        currentScale[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Infzoom'
        // Call effect
        fxInfzoom();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onZoomOut_10() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Infzooms - Zoom Out 10: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Infzooms - Zoom Out 10");

        // Effect 'Infzoom'
        // Zoom Out 10px
        function fxInfzoom() {
            const props = {
                offset: [-10, -10],
            };
            // Infinite Zooming effect
            // Props:
            // - offset: offset in percent (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current scale
            // The second keyframe at the outPoint, with the position set to current scale + offset

            // Check props
            if (!props.offset) {
                _alert(
                    "Error | offset is not defined in props, you must define offset."
                );
                return;
            }

            if (props.offset.length !== 2) {
                _alert("Error | offset must be an array of two floats.");
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // For each selected layer
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];

                var currentScale = [
                    layer.transform.scale.value[0],
                    layer.transform.scale.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.scale.setValueAtTime(
                    layer.inPoint,
                    currentScale
                );
                var key2 = layer.transform.scale.setValueAtTime(
                    layer.outPoint,
                    [
                        currentScale[0] + props.offset[0],
                        currentScale[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Infzoom'
        // Call effect
        fxInfzoom();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onZoomOut_20() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Infzooms - Zoom Out 20: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Infzooms - Zoom Out 20");

        // Effect 'Infzoom'
        // Zoom Out 20px
        function fxInfzoom() {
            const props = {
                offset: [-20, -20],
            };
            // Infinite Zooming effect
            // Props:
            // - offset: offset in percent (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current scale
            // The second keyframe at the outPoint, with the position set to current scale + offset

            // Check props
            if (!props.offset) {
                _alert(
                    "Error | offset is not defined in props, you must define offset."
                );
                return;
            }

            if (props.offset.length !== 2) {
                _alert("Error | offset must be an array of two floats.");
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // For each selected layer
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];

                var currentScale = [
                    layer.transform.scale.value[0],
                    layer.transform.scale.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.scale.setValueAtTime(
                    layer.inPoint,
                    currentScale
                );
                var key2 = layer.transform.scale.setValueAtTime(
                    layer.outPoint,
                    [
                        currentScale[0] + props.offset[0],
                        currentScale[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Infzoom'
        // Call effect
        fxInfzoom();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onZoomOut_50() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Infzooms - Zoom Out 50: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Infzooms - Zoom Out 50");

        // Effect 'Infzoom'
        // Zoom Out 50px
        function fxInfzoom() {
            const props = {
                offset: [-50, -50],
            };
            // Infinite Zooming effect
            // Props:
            // - offset: offset in percent (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current scale
            // The second keyframe at the outPoint, with the position set to current scale + offset

            // Check props
            if (!props.offset) {
                _alert(
                    "Error | offset is not defined in props, you must define offset."
                );
                return;
            }

            if (props.offset.length !== 2) {
                _alert("Error | offset must be an array of two floats.");
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // For each selected layer
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];

                var currentScale = [
                    layer.transform.scale.value[0],
                    layer.transform.scale.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.scale.setValueAtTime(
                    layer.inPoint,
                    currentScale
                );
                var key2 = layer.transform.scale.setValueAtTime(
                    layer.outPoint,
                    [
                        currentScale[0] + props.offset[0],
                        currentScale[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Infzoom'
        // Call effect
        fxInfzoom();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function buildUi(thisObj) {
        var w =
            thisObj instanceof Panel
                ? thisObj
                : new Window("palette", "Quick Infinite Zooms");
        w.groupZoomInsPanel = w.add("panel", undefined, "Zoom In");
        w.groupZoomIns = w.groupZoomInsPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupZoomIns.buttonZoomIn_10 = w.groupZoomIns.add(
            "button",
            undefined,
            "10%"
        );
        w.groupZoomIns.buttonZoomIn_10.onClick = function () {
            onZoomIn_10();
        };
        w.groupZoomIns.buttonZoomIn_20 = w.groupZoomIns.add(
            "button",
            undefined,
            "20%"
        );
        w.groupZoomIns.buttonZoomIn_20.onClick = function () {
            onZoomIn_20();
        };
        w.groupZoomIns.buttonZoomIn_50 = w.groupZoomIns.add(
            "button",
            undefined,
            "50%"
        );
        w.groupZoomIns.buttonZoomIn_50.onClick = function () {
            onZoomIn_50();
        };
        w.groupZoomOutsPanel = w.add("panel", undefined, "Zoom Out");
        w.groupZoomOuts = w.groupZoomOutsPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupZoomOuts.buttonZoomOut_10 = w.groupZoomOuts.add(
            "button",
            undefined,
            "10%"
        );
        w.groupZoomOuts.buttonZoomOut_10.onClick = function () {
            onZoomOut_10();
        };
        w.groupZoomOuts.buttonZoomOut_20 = w.groupZoomOuts.add(
            "button",
            undefined,
            "20%"
        );
        w.groupZoomOuts.buttonZoomOut_20.onClick = function () {
            onZoomOut_20();
        };
        w.groupZoomOuts.buttonZoomOut_50 = w.groupZoomOuts.add(
            "button",
            undefined,
            "50%"
        );
        w.groupZoomOuts.buttonZoomOut_50.onClick = function () {
            onZoomOut_50();
        };
        w.layout.layout(true);
        return w;
    }

    // Show the Panel
    var w = buildUi(thisObj);
    if (w.toString() == "[object Panel]") {
        w;
    } else {
        w.show();
    }
})(this);
