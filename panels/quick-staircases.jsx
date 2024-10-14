(function quickStaircases(thisObj) {
    function onFwStaircase_0_25() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Staircases - Fw Staircase 0 25: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Staircases - Fw Staircase 0 25");

        // Effect 'Staircase'
        // 0.25s staircase
        function fxStaircase() {
            const props = {
                sep: 0.25,
            };
            // Staircase Effect
            // Props:
            // - sep: separation of layer inPoints in seconds (float)
            // This script will create a "staircase" from the selected layers in the timeline.
            // First, it sorts the layers by index.
            // Then, it sets the outPoint of all layers to the first selected layer's outPoint.
            // Then, starting from the second layer, it sets the inPoint to the previous layer's inPoint + sep.

            // Check props
            if (!props.sep) {
                _alert(
                    "Error | sep is not defined in props, you must define sep."
                );
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // Sort layers by index
            selectedLayers.sort(function (a, b) {
                return b.index - a.index;
            });

            // Set outPoint of all layers to the first selected layer's outPoint
            var firstOutPoint = selectedLayers[0].outPoint;
            for (var i = 0; i < selectedLayers.length; i++) {
                selectedLayers[i].outPoint = firstOutPoint;
            }

            // Set inPoint of all layers starting from the second layer
            for (var i = 1; i < selectedLayers.length; i++) {
                selectedLayers[i].inPoint =
                    selectedLayers[i - 1].inPoint + props.sep;
            }
        }
        // End of effect 'Staircase'
        // Call effect
        fxStaircase();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onFwStaircase_0_5() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Staircases - Fw Staircase 0 5: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Staircases - Fw Staircase 0 5");

        // Effect 'Staircase'
        // 0.5s staircase
        function fxStaircase() {
            const props = {
                sep: 0.5,
            };
            // Staircase Effect
            // Props:
            // - sep: separation of layer inPoints in seconds (float)
            // This script will create a "staircase" from the selected layers in the timeline.
            // First, it sorts the layers by index.
            // Then, it sets the outPoint of all layers to the first selected layer's outPoint.
            // Then, starting from the second layer, it sets the inPoint to the previous layer's inPoint + sep.

            // Check props
            if (!props.sep) {
                _alert(
                    "Error | sep is not defined in props, you must define sep."
                );
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // Sort layers by index
            selectedLayers.sort(function (a, b) {
                return b.index - a.index;
            });

            // Set outPoint of all layers to the first selected layer's outPoint
            var firstOutPoint = selectedLayers[0].outPoint;
            for (var i = 0; i < selectedLayers.length; i++) {
                selectedLayers[i].outPoint = firstOutPoint;
            }

            // Set inPoint of all layers starting from the second layer
            for (var i = 1; i < selectedLayers.length; i++) {
                selectedLayers[i].inPoint =
                    selectedLayers[i - 1].inPoint + props.sep;
            }
        }
        // End of effect 'Staircase'
        // Call effect
        fxStaircase();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onFwStaircase_1() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Staircases - Fw Staircase 1: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Staircases - Fw Staircase 1");

        // Effect 'Staircase'
        // 1s staircase
        function fxStaircase() {
            const props = {
                sep: 1.0,
            };
            // Staircase Effect
            // Props:
            // - sep: separation of layer inPoints in seconds (float)
            // This script will create a "staircase" from the selected layers in the timeline.
            // First, it sorts the layers by index.
            // Then, it sets the outPoint of all layers to the first selected layer's outPoint.
            // Then, starting from the second layer, it sets the inPoint to the previous layer's inPoint + sep.

            // Check props
            if (!props.sep) {
                _alert(
                    "Error | sep is not defined in props, you must define sep."
                );
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // Sort layers by index
            selectedLayers.sort(function (a, b) {
                return b.index - a.index;
            });

            // Set outPoint of all layers to the first selected layer's outPoint
            var firstOutPoint = selectedLayers[0].outPoint;
            for (var i = 0; i < selectedLayers.length; i++) {
                selectedLayers[i].outPoint = firstOutPoint;
            }

            // Set inPoint of all layers starting from the second layer
            for (var i = 1; i < selectedLayers.length; i++) {
                selectedLayers[i].inPoint =
                    selectedLayers[i - 1].inPoint + props.sep;
            }
        }
        // End of effect 'Staircase'
        // Call effect
        fxStaircase();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onFwStaircase_4() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Staircases - Fw Staircase 4: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Staircases - Fw Staircase 4");

        // Effect 'Staircase'
        // 4s staircase
        function fxStaircase() {
            const props = {
                sep: 4.0,
            };
            // Staircase Effect
            // Props:
            // - sep: separation of layer inPoints in seconds (float)
            // This script will create a "staircase" from the selected layers in the timeline.
            // First, it sorts the layers by index.
            // Then, it sets the outPoint of all layers to the first selected layer's outPoint.
            // Then, starting from the second layer, it sets the inPoint to the previous layer's inPoint + sep.

            // Check props
            if (!props.sep) {
                _alert(
                    "Error | sep is not defined in props, you must define sep."
                );
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // Sort layers by index
            selectedLayers.sort(function (a, b) {
                return b.index - a.index;
            });

            // Set outPoint of all layers to the first selected layer's outPoint
            var firstOutPoint = selectedLayers[0].outPoint;
            for (var i = 0; i < selectedLayers.length; i++) {
                selectedLayers[i].outPoint = firstOutPoint;
            }

            // Set inPoint of all layers starting from the second layer
            for (var i = 1; i < selectedLayers.length; i++) {
                selectedLayers[i].inPoint =
                    selectedLayers[i - 1].inPoint + props.sep;
            }
        }
        // End of effect 'Staircase'
        // Call effect
        fxStaircase();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function buildUi(thisObj) {
        var w =
            thisObj instanceof Panel
                ? thisObj
                : new Window("palette", "Quick Staircases");
        w.groupForwardPanel = w.add("panel", undefined, "Forward staircases");
        w.groupForward = w.groupForwardPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupForward.buttonFwStaircase_0_25 = w.groupForward.add(
            "button",
            undefined,
            "0.25s"
        );
        w.groupForward.buttonFwStaircase_0_25.onClick = function () {
            onFwStaircase_0_25();
        };
        w.groupForward.buttonFwStaircase_0_5 = w.groupForward.add(
            "button",
            undefined,
            "0.5s"
        );
        w.groupForward.buttonFwStaircase_0_5.onClick = function () {
            onFwStaircase_0_5();
        };
        w.groupForward.buttonFwStaircase_1 = w.groupForward.add(
            "button",
            undefined,
            "1s"
        );
        w.groupForward.buttonFwStaircase_1.onClick = function () {
            onFwStaircase_1();
        };
        w.groupForward.buttonFwStaircase_4 = w.groupForward.add(
            "button",
            undefined,
            "4s"
        );
        w.groupForward.buttonFwStaircase_4.onClick = function () {
            onFwStaircase_4();
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
