(function quickPan(thisObj) {
    function onPanLeft_100() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Pan - Pan Left 100: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Pan - Pan Left 100");

        // Effect 'Pan'
        // Left pan 100px
        function fxPan() {
            const props = {
                offset: [100, 0],
            };
            // Pan effect
            // Props:
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.inPoint,
                    currentPos
                );
                var key2 = layer.transform.position.setValueAtTime(
                    layer.outPoint,
                    [
                        currentPos[0] + props.offset[0],
                        currentPos[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Pan'
        // Call effect
        fxPan();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onPanLeft_250() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Pan - Pan Left 250: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Pan - Pan Left 250");

        // Effect 'Pan'
        // Left pan 250px
        function fxPan() {
            const props = {
                offset: [250, 0],
            };
            // Pan effect
            // Props:
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.inPoint,
                    currentPos
                );
                var key2 = layer.transform.position.setValueAtTime(
                    layer.outPoint,
                    [
                        currentPos[0] + props.offset[0],
                        currentPos[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Pan'
        // Call effect
        fxPan();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onPanLeft_500() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Pan - Pan Left 500: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Pan - Pan Left 500");

        // Effect 'Pan'
        // Left pan 500px
        function fxPan() {
            const props = {
                offset: [500, 0],
            };
            // Pan effect
            // Props:
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.inPoint,
                    currentPos
                );
                var key2 = layer.transform.position.setValueAtTime(
                    layer.outPoint,
                    [
                        currentPos[0] + props.offset[0],
                        currentPos[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Pan'
        // Call effect
        fxPan();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onPanRight_100() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Pan - Pan Right 100: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Pan - Pan Right 100");

        // Effect 'Pan'
        // Right pan 100px
        function fxPan() {
            const props = {
                offset: [-100, 0],
            };
            // Pan effect
            // Props:
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.inPoint,
                    currentPos
                );
                var key2 = layer.transform.position.setValueAtTime(
                    layer.outPoint,
                    [
                        currentPos[0] + props.offset[0],
                        currentPos[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Pan'
        // Call effect
        fxPan();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onPanRight_250() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Pan - Pan Right 250: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Pan - Pan Right 250");

        // Effect 'Pan'
        // Right pan 250px
        function fxPan() {
            const props = {
                offset: [-250, 0],
            };
            // Pan effect
            // Props:
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.inPoint,
                    currentPos
                );
                var key2 = layer.transform.position.setValueAtTime(
                    layer.outPoint,
                    [
                        currentPos[0] + props.offset[0],
                        currentPos[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Pan'
        // Call effect
        fxPan();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onPanRight_500() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Pan - Pan Right 500: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Pan - Pan Right 500");

        // Effect 'Pan'
        // Right pan 500px
        function fxPan() {
            const props = {
                offset: [-500, 0],
            };
            // Pan effect
            // Props:
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.inPoint,
                    currentPos
                );
                var key2 = layer.transform.position.setValueAtTime(
                    layer.outPoint,
                    [
                        currentPos[0] + props.offset[0],
                        currentPos[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Pan'
        // Call effect
        fxPan();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onPanUp_100() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Pan - Pan Up 100: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Pan - Pan Up 100");

        // Effect 'Pan'
        // Up pan 100px
        function fxPan() {
            const props = {
                offset: [0, 100],
            };
            // Pan effect
            // Props:
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.inPoint,
                    currentPos
                );
                var key2 = layer.transform.position.setValueAtTime(
                    layer.outPoint,
                    [
                        currentPos[0] + props.offset[0],
                        currentPos[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Pan'
        // Call effect
        fxPan();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onPanUp_250() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Pan - Pan Up 250: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Pan - Pan Up 250");

        // Effect 'Pan'
        // Up pan 250px
        function fxPan() {
            const props = {
                offset: [0, 250],
            };
            // Pan effect
            // Props:
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.inPoint,
                    currentPos
                );
                var key2 = layer.transform.position.setValueAtTime(
                    layer.outPoint,
                    [
                        currentPos[0] + props.offset[0],
                        currentPos[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Pan'
        // Call effect
        fxPan();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onPanUp_500() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Pan - Pan Up 500: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Pan - Pan Up 500");

        // Effect 'Pan'
        // Up pan 500px
        function fxPan() {
            const props = {
                offset: [0, 500],
            };
            // Pan effect
            // Props:
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.inPoint,
                    currentPos
                );
                var key2 = layer.transform.position.setValueAtTime(
                    layer.outPoint,
                    [
                        currentPos[0] + props.offset[0],
                        currentPos[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Pan'
        // Call effect
        fxPan();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onPanDown_100() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Pan - Pan Down 100: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Pan - Pan Down 100");

        // Effect 'Pan'
        // Down pan 100px
        function fxPan() {
            const props = {
                offset: [0, -100],
            };
            // Pan effect
            // Props:
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.inPoint,
                    currentPos
                );
                var key2 = layer.transform.position.setValueAtTime(
                    layer.outPoint,
                    [
                        currentPos[0] + props.offset[0],
                        currentPos[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Pan'
        // Call effect
        fxPan();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onPanDown_250() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Pan - Pan Down 250: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Pan - Pan Down 250");

        // Effect 'Pan'
        // Down pan 250px
        function fxPan() {
            const props = {
                offset: [0, -250],
            };
            // Pan effect
            // Props:
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.inPoint,
                    currentPos
                );
                var key2 = layer.transform.position.setValueAtTime(
                    layer.outPoint,
                    [
                        currentPos[0] + props.offset[0],
                        currentPos[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Pan'
        // Call effect
        fxPan();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onPanDown_500() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Pan - Pan Down 500: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Pan - Pan Down 500");

        // Effect 'Pan'
        // Down pan 500px
        function fxPan() {
            const props = {
                offset: [0, -500],
            };
            // Pan effect
            // Props:
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.inPoint,
                    currentPos
                );
                var key2 = layer.transform.position.setValueAtTime(
                    layer.outPoint,
                    [
                        currentPos[0] + props.offset[0],
                        currentPos[1] + props.offset[1],
                    ]
                );
            }
        }
        // End of effect 'Pan'
        // Call effect
        fxPan();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function buildUi(thisObj) {
        var w =
            thisObj instanceof Panel
                ? thisObj
                : new Window("palette", "Quick Pan");
        w.groupPanLeftPanel = w.add("panel", undefined, "Pan Left");
        w.groupPanLeft = w.groupPanLeftPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupPanLeft.buttonPanLeft_100 = w.groupPanLeft.add(
            "button",
            undefined,
            "100"
        );
        w.groupPanLeft.buttonPanLeft_100.onClick = function () {
            onPanLeft_100();
        };
        w.groupPanLeft.buttonPanLeft_250 = w.groupPanLeft.add(
            "button",
            undefined,
            "250"
        );
        w.groupPanLeft.buttonPanLeft_250.onClick = function () {
            onPanLeft_250();
        };
        w.groupPanLeft.buttonPanLeft_500 = w.groupPanLeft.add(
            "button",
            undefined,
            "500"
        );
        w.groupPanLeft.buttonPanLeft_500.onClick = function () {
            onPanLeft_500();
        };
        w.groupPanRightPanel = w.add("panel", undefined, "Pan Right");
        w.groupPanRight = w.groupPanRightPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupPanRight.buttonPanRight_100 = w.groupPanRight.add(
            "button",
            undefined,
            "100"
        );
        w.groupPanRight.buttonPanRight_100.onClick = function () {
            onPanRight_100();
        };
        w.groupPanRight.buttonPanRight_250 = w.groupPanRight.add(
            "button",
            undefined,
            "250"
        );
        w.groupPanRight.buttonPanRight_250.onClick = function () {
            onPanRight_250();
        };
        w.groupPanRight.buttonPanRight_500 = w.groupPanRight.add(
            "button",
            undefined,
            "500"
        );
        w.groupPanRight.buttonPanRight_500.onClick = function () {
            onPanRight_500();
        };
        w.groupPanUpPanel = w.add("panel", undefined, "Pan Up");
        w.groupPanUp = w.groupPanUpPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupPanUp.buttonPanUp_100 = w.groupPanUp.add(
            "button",
            undefined,
            "100"
        );
        w.groupPanUp.buttonPanUp_100.onClick = function () {
            onPanUp_100();
        };
        w.groupPanUp.buttonPanUp_250 = w.groupPanUp.add(
            "button",
            undefined,
            "250"
        );
        w.groupPanUp.buttonPanUp_250.onClick = function () {
            onPanUp_250();
        };
        w.groupPanUp.buttonPanUp_500 = w.groupPanUp.add(
            "button",
            undefined,
            "500"
        );
        w.groupPanUp.buttonPanUp_500.onClick = function () {
            onPanUp_500();
        };
        w.groupPanDownPanel = w.add("panel", undefined, "Pan Down");
        w.groupPanDown = w.groupPanDownPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupPanDown.buttonPanDown_100 = w.groupPanDown.add(
            "button",
            undefined,
            "100"
        );
        w.groupPanDown.buttonPanDown_100.onClick = function () {
            onPanDown_100();
        };
        w.groupPanDown.buttonPanDown_250 = w.groupPanDown.add(
            "button",
            undefined,
            "250"
        );
        w.groupPanDown.buttonPanDown_250.onClick = function () {
            onPanDown_250();
        };
        w.groupPanDown.buttonPanDown_500 = w.groupPanDown.add(
            "button",
            undefined,
            "500"
        );
        w.groupPanDown.buttonPanDown_500.onClick = function () {
            onPanDown_500();
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
