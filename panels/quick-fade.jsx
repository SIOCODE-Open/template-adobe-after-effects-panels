(function quickFade(thisObj) {
    function onHalfSecondFadein() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Fade - Half Second Fadein: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Fade - Half Second Fadein");

        // Effect 'Fadein'
        // 0.5s fade in
        function fxFadein() {
            const props = {
                t: 0.5,
            };
            // Fade In effect
            // Props:
            // - t: duration in seconds (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the opacity set to 0.
            // The second keyframe at the inPoint + t, with the opacity set to 100.

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
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

                // Create keyframes
                var key1 = layer.transform.opacity.setValueAtTime(
                    layer.inPoint,
                    0
                );
                var key2 = layer.transform.opacity.setValueAtTime(
                    layer.inPoint + props.t,
                    100
                );
            }
        }
        // End of effect 'Fadein'
        // Call effect
        fxFadein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onOneSecondFadein() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Fade - One Second Fadein: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Fade - One Second Fadein");

        // Effect 'Fadein'
        // 1s fade in
        function fxFadein() {
            const props = {
                t: 1.0,
            };
            // Fade In effect
            // Props:
            // - t: duration in seconds (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the opacity set to 0.
            // The second keyframe at the inPoint + t, with the opacity set to 100.

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
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

                // Create keyframes
                var key1 = layer.transform.opacity.setValueAtTime(
                    layer.inPoint,
                    0
                );
                var key2 = layer.transform.opacity.setValueAtTime(
                    layer.inPoint + props.t,
                    100
                );
            }
        }
        // End of effect 'Fadein'
        // Call effect
        fxFadein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onTwoSecondFadein() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Fade - Two Second Fadein: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Fade - Two Second Fadein");

        // Effect 'Fadein'
        // 2s fade in
        function fxFadein() {
            const props = {
                t: 2.0,
            };
            // Fade In effect
            // Props:
            // - t: duration in seconds (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the opacity set to 0.
            // The second keyframe at the inPoint + t, with the opacity set to 100.

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
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

                // Create keyframes
                var key1 = layer.transform.opacity.setValueAtTime(
                    layer.inPoint,
                    0
                );
                var key2 = layer.transform.opacity.setValueAtTime(
                    layer.inPoint + props.t,
                    100
                );
            }
        }
        // End of effect 'Fadein'
        // Call effect
        fxFadein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onHalfSecondFadeout() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Fade - Half Second Fadeout: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Fade - Half Second Fadeout");

        // Effect 'Fadeout'
        // 0.5s fade out
        function fxFadeout() {
            const props = {
                t: 0.5,
            };
            // Fade Out effect
            // Props:
            // - t: duration in seconds (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the opacity set to 100.
            // The second keyframe at the outPoint, with the opacity set to 0.

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
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

                // Create keyframes
                var key1 = layer.transform.opacity.setValueAtTime(
                    layer.outPoint - props.t,
                    100
                );
                var key2 = layer.transform.opacity.setValueAtTime(
                    layer.outPoint,
                    0
                );
            }
        }
        // End of effect 'Fadeout'
        // Call effect
        fxFadeout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onOneSecondFadeout() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Fade - One Second Fadeout: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Fade - One Second Fadeout");

        // Effect 'Fadeout'
        // 1s fade out
        function fxFadeout() {
            const props = {
                t: 1.0,
            };
            // Fade Out effect
            // Props:
            // - t: duration in seconds (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the opacity set to 100.
            // The second keyframe at the outPoint, with the opacity set to 0.

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
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

                // Create keyframes
                var key1 = layer.transform.opacity.setValueAtTime(
                    layer.outPoint - props.t,
                    100
                );
                var key2 = layer.transform.opacity.setValueAtTime(
                    layer.outPoint,
                    0
                );
            }
        }
        // End of effect 'Fadeout'
        // Call effect
        fxFadeout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onTwoSecondFadeout() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Fade - Two Second Fadeout: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Fade - Two Second Fadeout");

        // Effect 'Fadeout'
        // 2s fade out
        function fxFadeout() {
            const props = {
                t: 2.0,
            };
            // Fade Out effect
            // Props:
            // - t: duration in seconds (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the opacity set to 100.
            // The second keyframe at the outPoint, with the opacity set to 0.

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
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

                // Create keyframes
                var key1 = layer.transform.opacity.setValueAtTime(
                    layer.outPoint - props.t,
                    100
                );
                var key2 = layer.transform.opacity.setValueAtTime(
                    layer.outPoint,
                    0
                );
            }
        }
        // End of effect 'Fadeout'
        // Call effect
        fxFadeout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function buildUi(thisObj) {
        var w =
            thisObj instanceof Panel
                ? thisObj
                : new Window("palette", "Quick Fade");
        w.groupFadeinsPanel = w.add("panel", undefined, "Fade In Effects");
        w.groupFadeins = w.groupFadeinsPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupFadeins.buttonHalfSecondFadein = w.groupFadeins.add(
            "button",
            undefined,
            "0.5s"
        );
        w.groupFadeins.buttonHalfSecondFadein.onClick = function () {
            onHalfSecondFadein();
        };
        w.groupFadeins.buttonOneSecondFadein = w.groupFadeins.add(
            "button",
            undefined,
            "1s"
        );
        w.groupFadeins.buttonOneSecondFadein.onClick = function () {
            onOneSecondFadein();
        };
        w.groupFadeins.buttonTwoSecondFadein = w.groupFadeins.add(
            "button",
            undefined,
            "2s"
        );
        w.groupFadeins.buttonTwoSecondFadein.onClick = function () {
            onTwoSecondFadein();
        };
        w.groupFadeoutsPanel = w.add("panel", undefined, "Fade Out Effects");
        w.groupFadeouts = w.groupFadeoutsPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupFadeouts.buttonHalfSecondFadeout = w.groupFadeouts.add(
            "button",
            undefined,
            "0.5s"
        );
        w.groupFadeouts.buttonHalfSecondFadeout.onClick = function () {
            onHalfSecondFadeout();
        };
        w.groupFadeouts.buttonOneSecondFadeout = w.groupFadeouts.add(
            "button",
            undefined,
            "1s"
        );
        w.groupFadeouts.buttonOneSecondFadeout.onClick = function () {
            onOneSecondFadeout();
        };
        w.groupFadeouts.buttonTwoSecondFadeout = w.groupFadeouts.add(
            "button",
            undefined,
            "2s"
        );
        w.groupFadeouts.buttonTwoSecondFadeout.onClick = function () {
            onTwoSecondFadeout();
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
