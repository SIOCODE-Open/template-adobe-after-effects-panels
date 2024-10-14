(function quickMoveout(thisObj) {
    function onLeftHalfSecond_100() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Left Half Second 100: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Left Half Second 100");

        // Effect 'Moveout'
        // 0.5s 100px left move out
        function fxMoveout() {
            const props = {
                t: 0.5,
                offset: [-100, 0],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onLeftOneSecond_100() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Left One Second 100: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Left One Second 100");

        // Effect 'Moveout'
        // 1s 100px left move out
        function fxMoveout() {
            const props = {
                t: 1.0,
                offset: [-100, 0],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onLeftHalfSecond_250() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Left Half Second 250: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Left Half Second 250");

        // Effect 'Moveout'
        // 0.5s 250px left move out
        function fxMoveout() {
            const props = {
                t: 0.5,
                offset: [-250, 0],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onLeftOneSecond_250() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Left One Second 250: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Left One Second 250");

        // Effect 'Moveout'
        // 1s 250px left move out
        function fxMoveout() {
            const props = {
                t: 1.0,
                offset: [-250, 0],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onRightHalfSecond_100() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Right Half Second 100: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Right Half Second 100");

        // Effect 'Moveout'
        // 0.5s 100px right move out
        function fxMoveout() {
            const props = {
                t: 0.5,
                offset: [100, 0],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onRightOneSecond_100() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Right One Second 100: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Right One Second 100");

        // Effect 'Moveout'
        // 1s 100px right move out
        function fxMoveout() {
            const props = {
                t: 1.0,
                offset: [100, 0],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onRightHalfSecond_250() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Right Half Second 250: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Right Half Second 250");

        // Effect 'Moveout'
        // 0.5s 250px right move out
        function fxMoveout() {
            const props = {
                t: 0.5,
                offset: [250, 0],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onRightOneSecond_250() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Right One Second 250: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Right One Second 250");

        // Effect 'Moveout'
        // 1s 250px right move out
        function fxMoveout() {
            const props = {
                t: 1.0,
                offset: [250, 0],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onUpHalfSecond_100() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Up Half Second 100: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Up Half Second 100");

        // Effect 'Moveout'
        // 0.5s 100px up move out
        function fxMoveout() {
            const props = {
                t: 0.5,
                offset: [0, 100],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onUpOneSecond_100() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Up One Second 100: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Up One Second 100");

        // Effect 'Moveout'
        // 1s 100px up move out
        function fxMoveout() {
            const props = {
                t: 1.0,
                offset: [0, 100],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onUpHalfSecond_250() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Up Half Second 250: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Up Half Second 250");

        // Effect 'Moveout'
        // 0.5s 250px up move out
        function fxMoveout() {
            const props = {
                t: 0.5,
                offset: [0, 250],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onUpOneSecond_250() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Up One Second 250: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Up One Second 250");

        // Effect 'Moveout'
        // 1s 250px up move out
        function fxMoveout() {
            const props = {
                t: 1.0,
                offset: [0, 250],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onDownHalfSecond_100() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Down Half Second 100: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Down Half Second 100");

        // Effect 'Moveout'
        // 0.5s 100px down move out
        function fxMoveout() {
            const props = {
                t: 0.5,
                offset: [0, -100],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onDownOneSecond_100() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Down One Second 100: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Down One Second 100");

        // Effect 'Moveout'
        // 1s 100px down move out
        function fxMoveout() {
            const props = {
                t: 1.0,
                offset: [0, -100],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onDownHalfSecond_250() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Down Half Second 250: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Down Half Second 250");

        // Effect 'Moveout'
        // 0.5s 250px down move out
        function fxMoveout() {
            const props = {
                t: 0.5,
                offset: [0, -250],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onDownOneSecond_250() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Moveout - Down One Second 250: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Moveout - Down One Second 250");

        // Effect 'Moveout'
        // 1s 250px down move out
        function fxMoveout() {
            const props = {
                t: 1.0,
                offset: [0, -250],
            };
            // Move Out effect
            // Props:
            // - t: duration in seconds (float)
            // - offset: offset in pixels (array of two floats)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the position set to current pos
            // The second keyframe at the outPoint, with the position set to current pos + offset

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

                var currentPos = [
                    layer.transform.position.value[0],
                    layer.transform.position.value[1],
                ];

                // Create keyframes
                var key1 = layer.transform.position.setValueAtTime(
                    layer.outPoint - props.t,
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
        // End of effect 'Moveout'
        // Call effect
        fxMoveout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function buildUi(thisObj) {
        var w =
            thisObj instanceof Panel
                ? thisObj
                : new Window("palette", "Quick Move Out");
        w.groupLeftPanel = w.add("panel", undefined, "Left");
        w.groupLeft = w.groupLeftPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupLeft.buttonLeftHalfSecond_100 = w.groupLeft.add(
            "button",
            undefined,
            "0.5s 100px"
        );
        w.groupLeft.buttonLeftHalfSecond_100.onClick = function () {
            onLeftHalfSecond_100();
        };
        w.groupLeft.buttonLeftOneSecond_100 = w.groupLeft.add(
            "button",
            undefined,
            "1s 100px"
        );
        w.groupLeft.buttonLeftOneSecond_100.onClick = function () {
            onLeftOneSecond_100();
        };
        w.groupLeft.buttonLeftHalfSecond_250 = w.groupLeft.add(
            "button",
            undefined,
            "0.5s 250px"
        );
        w.groupLeft.buttonLeftHalfSecond_250.onClick = function () {
            onLeftHalfSecond_250();
        };
        w.groupLeft.buttonLeftOneSecond_250 = w.groupLeft.add(
            "button",
            undefined,
            "1s 250px"
        );
        w.groupLeft.buttonLeftOneSecond_250.onClick = function () {
            onLeftOneSecond_250();
        };
        w.groupRightPanel = w.add("panel", undefined, "Right");
        w.groupRight = w.groupRightPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupRight.buttonRightHalfSecond_100 = w.groupRight.add(
            "button",
            undefined,
            "0.5s 100px"
        );
        w.groupRight.buttonRightHalfSecond_100.onClick = function () {
            onRightHalfSecond_100();
        };
        w.groupRight.buttonRightOneSecond_100 = w.groupRight.add(
            "button",
            undefined,
            "1s 100px"
        );
        w.groupRight.buttonRightOneSecond_100.onClick = function () {
            onRightOneSecond_100();
        };
        w.groupRight.buttonRightHalfSecond_250 = w.groupRight.add(
            "button",
            undefined,
            "0.5s 250px"
        );
        w.groupRight.buttonRightHalfSecond_250.onClick = function () {
            onRightHalfSecond_250();
        };
        w.groupRight.buttonRightOneSecond_250 = w.groupRight.add(
            "button",
            undefined,
            "1s 250px"
        );
        w.groupRight.buttonRightOneSecond_250.onClick = function () {
            onRightOneSecond_250();
        };
        w.groupUpPanel = w.add("panel", undefined, "Up");
        w.groupUp = w.groupUpPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupUp.buttonUpHalfSecond_100 = w.groupUp.add(
            "button",
            undefined,
            "0.5s 100px"
        );
        w.groupUp.buttonUpHalfSecond_100.onClick = function () {
            onUpHalfSecond_100();
        };
        w.groupUp.buttonUpOneSecond_100 = w.groupUp.add(
            "button",
            undefined,
            "1s 100px"
        );
        w.groupUp.buttonUpOneSecond_100.onClick = function () {
            onUpOneSecond_100();
        };
        w.groupUp.buttonUpHalfSecond_250 = w.groupUp.add(
            "button",
            undefined,
            "0.5s 250px"
        );
        w.groupUp.buttonUpHalfSecond_250.onClick = function () {
            onUpHalfSecond_250();
        };
        w.groupUp.buttonUpOneSecond_250 = w.groupUp.add(
            "button",
            undefined,
            "1s 250px"
        );
        w.groupUp.buttonUpOneSecond_250.onClick = function () {
            onUpOneSecond_250();
        };
        w.groupDownPanel = w.add("panel", undefined, "Down");
        w.groupDown = w.groupDownPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupDown.buttonDownHalfSecond_100 = w.groupDown.add(
            "button",
            undefined,
            "0.5s 100px"
        );
        w.groupDown.buttonDownHalfSecond_100.onClick = function () {
            onDownHalfSecond_100();
        };
        w.groupDown.buttonDownOneSecond_100 = w.groupDown.add(
            "button",
            undefined,
            "1s 100px"
        );
        w.groupDown.buttonDownOneSecond_100.onClick = function () {
            onDownOneSecond_100();
        };
        w.groupDown.buttonDownHalfSecond_250 = w.groupDown.add(
            "button",
            undefined,
            "0.5s 250px"
        );
        w.groupDown.buttonDownHalfSecond_250.onClick = function () {
            onDownHalfSecond_250();
        };
        w.groupDown.buttonDownOneSecond_250 = w.groupDown.add(
            "button",
            undefined,
            "1s 250px"
        );
        w.groupDown.buttonDownOneSecond_250.onClick = function () {
            onDownOneSecond_250();
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
