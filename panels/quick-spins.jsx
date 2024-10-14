(function quickSpins(thisObj) {
    function onCwSpin_360() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Spins - Cw Spin 360: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Spins - Cw Spin 360");

        // Effect 'Spin'
        // Spin 360° clockwise
        function fxSpin() {
            const props = {
                r: 360,
            };
            // Spin effect
            // Props:
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the rotation set to current rotation
            // The second keyframe at the outPoint, with the rotation set to current rotation + r

            // Check props
            if (!props.r) {
                _alert("Error | r is not defined in props, you must define r.");
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

                var currentRotation = layer.transform.rotation.value;

                // Create keyframes
                var key1 = layer.transform.rotation.setValueAtTime(
                    layer.inPoint,
                    currentRotation
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.outPoint,
                    currentRotation + props.r
                );
            }
        }
        // End of effect 'Spin'
        // Call effect
        fxSpin();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onCwSpin_720() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Spins - Cw Spin 720: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Spins - Cw Spin 720");

        // Effect 'Spin'
        // Spin 720° clockwise
        function fxSpin() {
            const props = {
                r: 720,
            };
            // Spin effect
            // Props:
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the rotation set to current rotation
            // The second keyframe at the outPoint, with the rotation set to current rotation + r

            // Check props
            if (!props.r) {
                _alert("Error | r is not defined in props, you must define r.");
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

                var currentRotation = layer.transform.rotation.value;

                // Create keyframes
                var key1 = layer.transform.rotation.setValueAtTime(
                    layer.inPoint,
                    currentRotation
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.outPoint,
                    currentRotation + props.r
                );
            }
        }
        // End of effect 'Spin'
        // Call effect
        fxSpin();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onCwSpin_1080() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Spins - Cw Spin 1080: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Spins - Cw Spin 1080");

        // Effect 'Spin'
        // Spin 1080° clockwise
        function fxSpin() {
            const props = {
                r: 1080,
            };
            // Spin effect
            // Props:
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the rotation set to current rotation
            // The second keyframe at the outPoint, with the rotation set to current rotation + r

            // Check props
            if (!props.r) {
                _alert("Error | r is not defined in props, you must define r.");
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

                var currentRotation = layer.transform.rotation.value;

                // Create keyframes
                var key1 = layer.transform.rotation.setValueAtTime(
                    layer.inPoint,
                    currentRotation
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.outPoint,
                    currentRotation + props.r
                );
            }
        }
        // End of effect 'Spin'
        // Call effect
        fxSpin();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onCcwSpin_360() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Spins - Ccw Spin 360: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Spins - Ccw Spin 360");

        // Effect 'Spin'
        // Spin 360° counterclockwise
        function fxSpin() {
            const props = {
                r: -360,
            };
            // Spin effect
            // Props:
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the rotation set to current rotation
            // The second keyframe at the outPoint, with the rotation set to current rotation + r

            // Check props
            if (!props.r) {
                _alert("Error | r is not defined in props, you must define r.");
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

                var currentRotation = layer.transform.rotation.value;

                // Create keyframes
                var key1 = layer.transform.rotation.setValueAtTime(
                    layer.inPoint,
                    currentRotation
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.outPoint,
                    currentRotation + props.r
                );
            }
        }
        // End of effect 'Spin'
        // Call effect
        fxSpin();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onCcwSpin_720() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Spins - Ccw Spin 720: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Spins - Ccw Spin 720");

        // Effect 'Spin'
        // Spin 720° counterclockwise
        function fxSpin() {
            const props = {
                r: -720,
            };
            // Spin effect
            // Props:
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the rotation set to current rotation
            // The second keyframe at the outPoint, with the rotation set to current rotation + r

            // Check props
            if (!props.r) {
                _alert("Error | r is not defined in props, you must define r.");
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

                var currentRotation = layer.transform.rotation.value;

                // Create keyframes
                var key1 = layer.transform.rotation.setValueAtTime(
                    layer.inPoint,
                    currentRotation
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.outPoint,
                    currentRotation + props.r
                );
            }
        }
        // End of effect 'Spin'
        // Call effect
        fxSpin();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onCcwSpin_1080() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Spins - Ccw Spin 1080: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Spins - Ccw Spin 1080");

        // Effect 'Spin'
        // Spin 1080° counterclockwise
        function fxSpin() {
            const props = {
                r: -1080,
            };
            // Spin effect
            // Props:
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the rotation set to current rotation
            // The second keyframe at the outPoint, with the rotation set to current rotation + r

            // Check props
            if (!props.r) {
                _alert("Error | r is not defined in props, you must define r.");
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

                var currentRotation = layer.transform.rotation.value;

                // Create keyframes
                var key1 = layer.transform.rotation.setValueAtTime(
                    layer.inPoint,
                    currentRotation
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.outPoint,
                    currentRotation + props.r
                );
            }
        }
        // End of effect 'Spin'
        // Call effect
        fxSpin();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function buildUi(thisObj) {
        var w =
            thisObj instanceof Panel
                ? thisObj
                : new Window("palette", "Quick Spins");
        w.groupCwPanel = w.add("panel", undefined, "Clockwise");
        w.groupCw = w.groupCwPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupCw.buttonCwSpin_360 = w.groupCw.add("button", undefined, "360°");
        w.groupCw.buttonCwSpin_360.onClick = function () {
            onCwSpin_360();
        };
        w.groupCw.buttonCwSpin_720 = w.groupCw.add("button", undefined, "720°");
        w.groupCw.buttonCwSpin_720.onClick = function () {
            onCwSpin_720();
        };
        w.groupCw.buttonCwSpin_1080 = w.groupCw.add(
            "button",
            undefined,
            "1080°"
        );
        w.groupCw.buttonCwSpin_1080.onClick = function () {
            onCwSpin_1080();
        };
        w.groupCcwPanel = w.add("panel", undefined, "Counterclockwise");
        w.groupCcw = w.groupCcwPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupCcw.buttonCcwSpin_360 = w.groupCcw.add(
            "button",
            undefined,
            "360°"
        );
        w.groupCcw.buttonCcwSpin_360.onClick = function () {
            onCcwSpin_360();
        };
        w.groupCcw.buttonCcwSpin_720 = w.groupCcw.add(
            "button",
            undefined,
            "720°"
        );
        w.groupCcw.buttonCcwSpin_720.onClick = function () {
            onCcwSpin_720();
        };
        w.groupCcw.buttonCcwSpin_1080 = w.groupCcw.add(
            "button",
            undefined,
            "1080°"
        );
        w.groupCcw.buttonCcwSpin_1080.onClick = function () {
            onCcwSpin_1080();
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
