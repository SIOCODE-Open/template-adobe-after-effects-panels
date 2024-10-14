(function quickScale(thisObj) {
    function onInHalfSecond_10Percent() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Scale - In Half Second 10 Percent: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Scale - In Half Second 10 Percent");

        // Effect 'Scalein'
        // 0.5s 10% scale in
        function fxScalein() {
            const props = {
                t: 0.5,
                offset: [10, 10],
            };
            // Scale In effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in percent (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the scale set to current scale + offset
            // The second keyframe at the inPoint + t, with the scale set to current scale

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                var key1 = layer.transform.scale.setValueAtTime(layer.inPoint, [
                    currentScale[0] + props.offset[0],
                    currentScale[1] + props.offset[1],
                ]);
                var key2 = layer.transform.scale.setValueAtTime(
                    layer.inPoint + props.t,
                    currentScale
                );
            }
        }
        // End of effect 'Scalein'
        // Call effect
        fxScalein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onInOneSecond_10Percent() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Scale - In One Second 10 Percent: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Scale - In One Second 10 Percent");

        // Effect 'Scalein'
        // 1s 10% scale in
        function fxScalein() {
            const props = {
                t: 1.0,
                offset: [10, 10],
            };
            // Scale In effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in percent (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the scale set to current scale + offset
            // The second keyframe at the inPoint + t, with the scale set to current scale

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                var key1 = layer.transform.scale.setValueAtTime(layer.inPoint, [
                    currentScale[0] + props.offset[0],
                    currentScale[1] + props.offset[1],
                ]);
                var key2 = layer.transform.scale.setValueAtTime(
                    layer.inPoint + props.t,
                    currentScale
                );
            }
        }
        // End of effect 'Scalein'
        // Call effect
        fxScalein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onInHalfSecond_25Percent() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Scale - In Half Second 25 Percent: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Scale - In Half Second 25 Percent");

        // Effect 'Scalein'
        // 0.5s 25% scale in
        function fxScalein() {
            const props = {
                t: 0.5,
                offset: [25, 25],
            };
            // Scale In effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in percent (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the scale set to current scale + offset
            // The second keyframe at the inPoint + t, with the scale set to current scale

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                var key1 = layer.transform.scale.setValueAtTime(layer.inPoint, [
                    currentScale[0] + props.offset[0],
                    currentScale[1] + props.offset[1],
                ]);
                var key2 = layer.transform.scale.setValueAtTime(
                    layer.inPoint + props.t,
                    currentScale
                );
            }
        }
        // End of effect 'Scalein'
        // Call effect
        fxScalein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onInOneSecond_25Percent() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Scale - In One Second 25 Percent: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Scale - In One Second 25 Percent");

        // Effect 'Scalein'
        // 1s 25% scale in
        function fxScalein() {
            const props = {
                t: 1.0,
                offset: [25, 25],
            };
            // Scale In effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in percent (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the scale set to current scale + offset
            // The second keyframe at the inPoint + t, with the scale set to current scale

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                var key1 = layer.transform.scale.setValueAtTime(layer.inPoint, [
                    currentScale[0] + props.offset[0],
                    currentScale[1] + props.offset[1],
                ]);
                var key2 = layer.transform.scale.setValueAtTime(
                    layer.inPoint + props.t,
                    currentScale
                );
            }
        }
        // End of effect 'Scalein'
        // Call effect
        fxScalein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onOutHalfSecond_10Percent() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Scale - Out Half Second 10 Percent: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Scale - Out Half Second 10 Percent");

        // Effect 'Scaleout'
        // 0.5s 10% scale out
        function fxScaleout() {
            const props = {
                t: 0.5,
                offset: [10, 10],
            };
            // Scale Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in percent (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the scale set to current scale
            // The second keyframe at the outPoint, with the scale set to current scale + offset

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    layer.outPoint - props.t,
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
        // End of effect 'Scaleout'
        // Call effect
        fxScaleout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onOutOneSecond_10Percent() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Scale - Out One Second 10 Percent: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Scale - Out One Second 10 Percent");

        // Effect 'Scaleout'
        // 1s 10% scale out
        function fxScaleout() {
            const props = {
                t: 1.0,
                offset: [10, 10],
            };
            // Scale Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in percent (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the scale set to current scale
            // The second keyframe at the outPoint, with the scale set to current scale + offset

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    layer.outPoint - props.t,
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
        // End of effect 'Scaleout'
        // Call effect
        fxScaleout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onOutHalfSecond_25Percent() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Scale - Out Half Second 25 Percent: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Scale - Out Half Second 25 Percent");

        // Effect 'Scaleout'
        // 0.5s 25% scale out
        function fxScaleout() {
            const props = {
                t: 0.5,
                offset: [25, 25],
            };
            // Scale Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in percent (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the scale set to current scale
            // The second keyframe at the outPoint, with the scale set to current scale + offset

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    layer.outPoint - props.t,
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
        // End of effect 'Scaleout'
        // Call effect
        fxScaleout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onOutOneSecond_25Percent() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Scale - Out One Second 25 Percent: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Scale - Out One Second 25 Percent");

        // Effect 'Scaleout'
        // 1s 25% scale out
        function fxScaleout() {
            const props = {
                t: 1.0,
                offset: [25, 25],
            };
            // Scale Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in percent (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the scale set to current scale
            // The second keyframe at the outPoint, with the scale set to current scale + offset

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    layer.outPoint - props.t,
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
        // End of effect 'Scaleout'
        // Call effect
        fxScaleout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function buildUi(thisObj) {
        var w =
            thisObj instanceof Panel
                ? thisObj
                : new Window("palette", "Quick Scale");
        w.groupScaleinsPanel = w.add("panel", undefined, "Scale In Effects");
        w.groupScaleins = w.groupScaleinsPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupScaleins.buttonInHalfSecond_10Percent = w.groupScaleins.add(
            "button",
            undefined,
            "0.5s 10%"
        );
        w.groupScaleins.buttonInHalfSecond_10Percent.onClick = function () {
            onInHalfSecond_10Percent();
        };
        w.groupScaleins.buttonInOneSecond_10Percent = w.groupScaleins.add(
            "button",
            undefined,
            "1s 10%"
        );
        w.groupScaleins.buttonInOneSecond_10Percent.onClick = function () {
            onInOneSecond_10Percent();
        };
        w.groupScaleins.buttonInHalfSecond_25Percent = w.groupScaleins.add(
            "button",
            undefined,
            "0.5s 25%"
        );
        w.groupScaleins.buttonInHalfSecond_25Percent.onClick = function () {
            onInHalfSecond_25Percent();
        };
        w.groupScaleins.buttonInOneSecond_25Percent = w.groupScaleins.add(
            "button",
            undefined,
            "1s 25%"
        );
        w.groupScaleins.buttonInOneSecond_25Percent.onClick = function () {
            onInOneSecond_25Percent();
        };
        w.groupScaleoutsPanel = w.add("panel", undefined, "Scale Out Effects");
        w.groupScaleouts = w.groupScaleoutsPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupScaleouts.buttonOutHalfSecond_10Percent = w.groupScaleouts.add(
            "button",
            undefined,
            "0.5s 10%"
        );
        w.groupScaleouts.buttonOutHalfSecond_10Percent.onClick = function () {
            onOutHalfSecond_10Percent();
        };
        w.groupScaleouts.buttonOutOneSecond_10Percent = w.groupScaleouts.add(
            "button",
            undefined,
            "1s 10%"
        );
        w.groupScaleouts.buttonOutOneSecond_10Percent.onClick = function () {
            onOutOneSecond_10Percent();
        };
        w.groupScaleouts.buttonOutHalfSecond_25Percent = w.groupScaleouts.add(
            "button",
            undefined,
            "0.5s 25%"
        );
        w.groupScaleouts.buttonOutHalfSecond_25Percent.onClick = function () {
            onOutHalfSecond_25Percent();
        };
        w.groupScaleouts.buttonOutOneSecond_25Percent = w.groupScaleouts.add(
            "button",
            undefined,
            "1s 25%"
        );
        w.groupScaleouts.buttonOutOneSecond_25Percent.onClick = function () {
            onOutOneSecond_25Percent();
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
