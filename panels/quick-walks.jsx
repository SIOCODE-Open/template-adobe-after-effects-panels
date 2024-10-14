(function quickWalks(thisObj) {
    function onSlightWalk_1s() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Walks - Slight Walk 1s: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Walks - Slight Walk 1s");

        // Effect 'Walk'
        // 1s slight walk
        function fxWalk() {
            const props = {
                t: 1.0,
                n: 10,
                a: 30,
            };
            // Walk effect
            // Props:
            // - t: duration in seconds (float)
            // - n: number of oscillations (int)
            // - a: amplitude (float)
            // For each selected layer, it attempts to create a wiggling walk in animation.
            // Animates the position property of the layer.
            // There must be guiding layers, which should be null objects to specify the start and end point of the animation.
            // Guiding layers must be named "{name}.walk.start" and "{name}.walk.end".

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

            if (!props.n) {
                _alert("Error | n is not defined in props, you must define n.");
                return;
            }

            if (!props.a) {
                _alert("Error | a is not defined in props, you must define a.");
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // Loop through selected layers
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];

                // Get start and end layers
                var startLayer = comp.layer(layer.name + ".walk.start");
                var endLayer = comp.layer(layer.name + ".walk.end");

                if (!startLayer || !endLayer) {
                    // Skip layer if start or end layer is not found
                    continue;
                }

                // Get position properties of the start and end null objects
                var startPos = startLayer.transform.position.value;
                var endPos = endLayer.transform.position.value;

                // Get the start and end times for keyframes
                var startTime = layer.inPoint;
                var endTime = layer.inPoint + props.t;

                // Access the Transform > Position property of the main layer
                var positionProp = layer.transform.position;

                // Remove all existing keyframes from the position property
                while (positionProp.numKeys > 0) {
                    positionProp.removeKey(1); // Always remove the first key until none remain
                }

                // Calculate the vector from start to end position
                var deltaX = endPos[0] - startPos[0];
                var deltaY = endPos[1] - startPos[1];

                /* Original code
                // Add keyframes with oscillation
                for (var k = 0; k <= frequency; k++) {
                    var t = startTime + (duration / frequency) * k; // Time for the current keyframe
                    var progress = k / frequency; // Progress ratio from 0 to 1
            
                    // Calculate position along the line
                    var xPos = startPos[0] + deltaX * progress;
                    var yPos = startPos[1] + deltaY * progress;
            
                    // Add oscillation perpendicular to the line
                    var oscillation = (k % 2 === 0 ? 1 : -1) * amplitude; // Alternating between + and -
                    var angle = Math.atan2(deltaY, deltaX) + Math.PI / 2; // Perpendicular angle to the line
                    var offsetX = Math.cos(angle) * oscillation;
                    var offsetY = Math.sin(angle) * oscillation;
            
                    // Set the keyframe position
                    positionProp.setValueAtTime(t, [xPos + offsetX, yPos + offsetY]);
                }
                */

                // New code

                // Calculate the number of keyframes
                var numKeyframes = props.n * 2 + 1; // Number of keyframes is twice the number of oscillations plus one

                // Add keyframes with oscillation
                for (var k = 0; k < numKeyframes; k++) {
                    var t = startTime + (props.t / numKeyframes) * k; // Time for the current keyframe
                    var progress = k / numKeyframes; // Progress ratio from 0 to 1

                    // Calculate position along the line
                    var xPos = startPos[0] + deltaX * progress;
                    var yPos = startPos[1] + deltaY * progress;

                    // Add oscillation perpendicular to the line
                    var oscillation = (k % 2 === 0 ? 1 : -1) * props.a; // Alternating between + and -
                    var angle = Math.atan2(deltaY, deltaX) + Math.PI / 2; // Perpendicular angle to the line
                    var offsetX = Math.cos(angle) * oscillation;
                    var offsetY = Math.sin(angle) * oscillation;

                    // Set the keyframe position
                    positionProp.setValueAtTime(t, [
                        xPos + offsetX,
                        yPos + offsetY,
                    ]);
                }

                // Add the final keyframe at the end position
                positionProp.setValueAtTime(endTime, endPos);
            }
        }
        // End of effect 'Walk'
        // Call effect
        fxWalk();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onSlightWalk_2s() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Walks - Slight Walk 2s: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Walks - Slight Walk 2s");

        // Effect 'Walk'
        // 2s slight walk
        function fxWalk() {
            const props = {
                t: 2.0,
                n: 10,
                a: 30,
            };
            // Walk effect
            // Props:
            // - t: duration in seconds (float)
            // - n: number of oscillations (int)
            // - a: amplitude (float)
            // For each selected layer, it attempts to create a wiggling walk in animation.
            // Animates the position property of the layer.
            // There must be guiding layers, which should be null objects to specify the start and end point of the animation.
            // Guiding layers must be named "{name}.walk.start" and "{name}.walk.end".

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

            if (!props.n) {
                _alert("Error | n is not defined in props, you must define n.");
                return;
            }

            if (!props.a) {
                _alert("Error | a is not defined in props, you must define a.");
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // Loop through selected layers
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];

                // Get start and end layers
                var startLayer = comp.layer(layer.name + ".walk.start");
                var endLayer = comp.layer(layer.name + ".walk.end");

                if (!startLayer || !endLayer) {
                    // Skip layer if start or end layer is not found
                    continue;
                }

                // Get position properties of the start and end null objects
                var startPos = startLayer.transform.position.value;
                var endPos = endLayer.transform.position.value;

                // Get the start and end times for keyframes
                var startTime = layer.inPoint;
                var endTime = layer.inPoint + props.t;

                // Access the Transform > Position property of the main layer
                var positionProp = layer.transform.position;

                // Remove all existing keyframes from the position property
                while (positionProp.numKeys > 0) {
                    positionProp.removeKey(1); // Always remove the first key until none remain
                }

                // Calculate the vector from start to end position
                var deltaX = endPos[0] - startPos[0];
                var deltaY = endPos[1] - startPos[1];

                /* Original code
                // Add keyframes with oscillation
                for (var k = 0; k <= frequency; k++) {
                    var t = startTime + (duration / frequency) * k; // Time for the current keyframe
                    var progress = k / frequency; // Progress ratio from 0 to 1
            
                    // Calculate position along the line
                    var xPos = startPos[0] + deltaX * progress;
                    var yPos = startPos[1] + deltaY * progress;
            
                    // Add oscillation perpendicular to the line
                    var oscillation = (k % 2 === 0 ? 1 : -1) * amplitude; // Alternating between + and -
                    var angle = Math.atan2(deltaY, deltaX) + Math.PI / 2; // Perpendicular angle to the line
                    var offsetX = Math.cos(angle) * oscillation;
                    var offsetY = Math.sin(angle) * oscillation;
            
                    // Set the keyframe position
                    positionProp.setValueAtTime(t, [xPos + offsetX, yPos + offsetY]);
                }
                */

                // New code

                // Calculate the number of keyframes
                var numKeyframes = props.n * 2 + 1; // Number of keyframes is twice the number of oscillations plus one

                // Add keyframes with oscillation
                for (var k = 0; k < numKeyframes; k++) {
                    var t = startTime + (props.t / numKeyframes) * k; // Time for the current keyframe
                    var progress = k / numKeyframes; // Progress ratio from 0 to 1

                    // Calculate position along the line
                    var xPos = startPos[0] + deltaX * progress;
                    var yPos = startPos[1] + deltaY * progress;

                    // Add oscillation perpendicular to the line
                    var oscillation = (k % 2 === 0 ? 1 : -1) * props.a; // Alternating between + and -
                    var angle = Math.atan2(deltaY, deltaX) + Math.PI / 2; // Perpendicular angle to the line
                    var offsetX = Math.cos(angle) * oscillation;
                    var offsetY = Math.sin(angle) * oscillation;

                    // Set the keyframe position
                    positionProp.setValueAtTime(t, [
                        xPos + offsetX,
                        yPos + offsetY,
                    ]);
                }

                // Add the final keyframe at the end position
                positionProp.setValueAtTime(endTime, endPos);
            }
        }
        // End of effect 'Walk'
        // Call effect
        fxWalk();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onSlightWalk_4s() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Walks - Slight Walk 4s: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Walks - Slight Walk 4s");

        // Effect 'Walk'
        // 4s slight walk
        function fxWalk() {
            const props = {
                t: 4.0,
                n: 10,
                a: 30,
            };
            // Walk effect
            // Props:
            // - t: duration in seconds (float)
            // - n: number of oscillations (int)
            // - a: amplitude (float)
            // For each selected layer, it attempts to create a wiggling walk in animation.
            // Animates the position property of the layer.
            // There must be guiding layers, which should be null objects to specify the start and end point of the animation.
            // Guiding layers must be named "{name}.walk.start" and "{name}.walk.end".

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

            if (!props.n) {
                _alert("Error | n is not defined in props, you must define n.");
                return;
            }

            if (!props.a) {
                _alert("Error | a is not defined in props, you must define a.");
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // Loop through selected layers
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];

                // Get start and end layers
                var startLayer = comp.layer(layer.name + ".walk.start");
                var endLayer = comp.layer(layer.name + ".walk.end");

                if (!startLayer || !endLayer) {
                    // Skip layer if start or end layer is not found
                    continue;
                }

                // Get position properties of the start and end null objects
                var startPos = startLayer.transform.position.value;
                var endPos = endLayer.transform.position.value;

                // Get the start and end times for keyframes
                var startTime = layer.inPoint;
                var endTime = layer.inPoint + props.t;

                // Access the Transform > Position property of the main layer
                var positionProp = layer.transform.position;

                // Remove all existing keyframes from the position property
                while (positionProp.numKeys > 0) {
                    positionProp.removeKey(1); // Always remove the first key until none remain
                }

                // Calculate the vector from start to end position
                var deltaX = endPos[0] - startPos[0];
                var deltaY = endPos[1] - startPos[1];

                /* Original code
                // Add keyframes with oscillation
                for (var k = 0; k <= frequency; k++) {
                    var t = startTime + (duration / frequency) * k; // Time for the current keyframe
                    var progress = k / frequency; // Progress ratio from 0 to 1
            
                    // Calculate position along the line
                    var xPos = startPos[0] + deltaX * progress;
                    var yPos = startPos[1] + deltaY * progress;
            
                    // Add oscillation perpendicular to the line
                    var oscillation = (k % 2 === 0 ? 1 : -1) * amplitude; // Alternating between + and -
                    var angle = Math.atan2(deltaY, deltaX) + Math.PI / 2; // Perpendicular angle to the line
                    var offsetX = Math.cos(angle) * oscillation;
                    var offsetY = Math.sin(angle) * oscillation;
            
                    // Set the keyframe position
                    positionProp.setValueAtTime(t, [xPos + offsetX, yPos + offsetY]);
                }
                */

                // New code

                // Calculate the number of keyframes
                var numKeyframes = props.n * 2 + 1; // Number of keyframes is twice the number of oscillations plus one

                // Add keyframes with oscillation
                for (var k = 0; k < numKeyframes; k++) {
                    var t = startTime + (props.t / numKeyframes) * k; // Time for the current keyframe
                    var progress = k / numKeyframes; // Progress ratio from 0 to 1

                    // Calculate position along the line
                    var xPos = startPos[0] + deltaX * progress;
                    var yPos = startPos[1] + deltaY * progress;

                    // Add oscillation perpendicular to the line
                    var oscillation = (k % 2 === 0 ? 1 : -1) * props.a; // Alternating between + and -
                    var angle = Math.atan2(deltaY, deltaX) + Math.PI / 2; // Perpendicular angle to the line
                    var offsetX = Math.cos(angle) * oscillation;
                    var offsetY = Math.sin(angle) * oscillation;

                    // Set the keyframe position
                    positionProp.setValueAtTime(t, [
                        xPos + offsetX,
                        yPos + offsetY,
                    ]);
                }

                // Add the final keyframe at the end position
                positionProp.setValueAtTime(endTime, endPos);
            }
        }
        // End of effect 'Walk'
        // Call effect
        fxWalk();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onHeavyWalk_1s() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Walks - Heavy Walk 1s: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Walks - Heavy Walk 1s");

        // Effect 'Walk'
        // 1s heavy walk
        function fxWalk() {
            const props = {
                t: 1.0,
                n: 10,
                a: 60,
            };
            // Walk effect
            // Props:
            // - t: duration in seconds (float)
            // - n: number of oscillations (int)
            // - a: amplitude (float)
            // For each selected layer, it attempts to create a wiggling walk in animation.
            // Animates the position property of the layer.
            // There must be guiding layers, which should be null objects to specify the start and end point of the animation.
            // Guiding layers must be named "{name}.walk.start" and "{name}.walk.end".

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

            if (!props.n) {
                _alert("Error | n is not defined in props, you must define n.");
                return;
            }

            if (!props.a) {
                _alert("Error | a is not defined in props, you must define a.");
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // Loop through selected layers
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];

                // Get start and end layers
                var startLayer = comp.layer(layer.name + ".walk.start");
                var endLayer = comp.layer(layer.name + ".walk.end");

                if (!startLayer || !endLayer) {
                    // Skip layer if start or end layer is not found
                    continue;
                }

                // Get position properties of the start and end null objects
                var startPos = startLayer.transform.position.value;
                var endPos = endLayer.transform.position.value;

                // Get the start and end times for keyframes
                var startTime = layer.inPoint;
                var endTime = layer.inPoint + props.t;

                // Access the Transform > Position property of the main layer
                var positionProp = layer.transform.position;

                // Remove all existing keyframes from the position property
                while (positionProp.numKeys > 0) {
                    positionProp.removeKey(1); // Always remove the first key until none remain
                }

                // Calculate the vector from start to end position
                var deltaX = endPos[0] - startPos[0];
                var deltaY = endPos[1] - startPos[1];

                /* Original code
                // Add keyframes with oscillation
                for (var k = 0; k <= frequency; k++) {
                    var t = startTime + (duration / frequency) * k; // Time for the current keyframe
                    var progress = k / frequency; // Progress ratio from 0 to 1
            
                    // Calculate position along the line
                    var xPos = startPos[0] + deltaX * progress;
                    var yPos = startPos[1] + deltaY * progress;
            
                    // Add oscillation perpendicular to the line
                    var oscillation = (k % 2 === 0 ? 1 : -1) * amplitude; // Alternating between + and -
                    var angle = Math.atan2(deltaY, deltaX) + Math.PI / 2; // Perpendicular angle to the line
                    var offsetX = Math.cos(angle) * oscillation;
                    var offsetY = Math.sin(angle) * oscillation;
            
                    // Set the keyframe position
                    positionProp.setValueAtTime(t, [xPos + offsetX, yPos + offsetY]);
                }
                */

                // New code

                // Calculate the number of keyframes
                var numKeyframes = props.n * 2 + 1; // Number of keyframes is twice the number of oscillations plus one

                // Add keyframes with oscillation
                for (var k = 0; k < numKeyframes; k++) {
                    var t = startTime + (props.t / numKeyframes) * k; // Time for the current keyframe
                    var progress = k / numKeyframes; // Progress ratio from 0 to 1

                    // Calculate position along the line
                    var xPos = startPos[0] + deltaX * progress;
                    var yPos = startPos[1] + deltaY * progress;

                    // Add oscillation perpendicular to the line
                    var oscillation = (k % 2 === 0 ? 1 : -1) * props.a; // Alternating between + and -
                    var angle = Math.atan2(deltaY, deltaX) + Math.PI / 2; // Perpendicular angle to the line
                    var offsetX = Math.cos(angle) * oscillation;
                    var offsetY = Math.sin(angle) * oscillation;

                    // Set the keyframe position
                    positionProp.setValueAtTime(t, [
                        xPos + offsetX,
                        yPos + offsetY,
                    ]);
                }

                // Add the final keyframe at the end position
                positionProp.setValueAtTime(endTime, endPos);
            }
        }
        // End of effect 'Walk'
        // Call effect
        fxWalk();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onHeavyWalk_2s() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Walks - Heavy Walk 2s: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Walks - Heavy Walk 2s");

        // Effect 'Walk'
        // 2s heavy walk
        function fxWalk() {
            const props = {
                t: 2.0,
                n: 10,
                a: 60,
            };
            // Walk effect
            // Props:
            // - t: duration in seconds (float)
            // - n: number of oscillations (int)
            // - a: amplitude (float)
            // For each selected layer, it attempts to create a wiggling walk in animation.
            // Animates the position property of the layer.
            // There must be guiding layers, which should be null objects to specify the start and end point of the animation.
            // Guiding layers must be named "{name}.walk.start" and "{name}.walk.end".

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

            if (!props.n) {
                _alert("Error | n is not defined in props, you must define n.");
                return;
            }

            if (!props.a) {
                _alert("Error | a is not defined in props, you must define a.");
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // Loop through selected layers
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];

                // Get start and end layers
                var startLayer = comp.layer(layer.name + ".walk.start");
                var endLayer = comp.layer(layer.name + ".walk.end");

                if (!startLayer || !endLayer) {
                    // Skip layer if start or end layer is not found
                    continue;
                }

                // Get position properties of the start and end null objects
                var startPos = startLayer.transform.position.value;
                var endPos = endLayer.transform.position.value;

                // Get the start and end times for keyframes
                var startTime = layer.inPoint;
                var endTime = layer.inPoint + props.t;

                // Access the Transform > Position property of the main layer
                var positionProp = layer.transform.position;

                // Remove all existing keyframes from the position property
                while (positionProp.numKeys > 0) {
                    positionProp.removeKey(1); // Always remove the first key until none remain
                }

                // Calculate the vector from start to end position
                var deltaX = endPos[0] - startPos[0];
                var deltaY = endPos[1] - startPos[1];

                /* Original code
                // Add keyframes with oscillation
                for (var k = 0; k <= frequency; k++) {
                    var t = startTime + (duration / frequency) * k; // Time for the current keyframe
                    var progress = k / frequency; // Progress ratio from 0 to 1
            
                    // Calculate position along the line
                    var xPos = startPos[0] + deltaX * progress;
                    var yPos = startPos[1] + deltaY * progress;
            
                    // Add oscillation perpendicular to the line
                    var oscillation = (k % 2 === 0 ? 1 : -1) * amplitude; // Alternating between + and -
                    var angle = Math.atan2(deltaY, deltaX) + Math.PI / 2; // Perpendicular angle to the line
                    var offsetX = Math.cos(angle) * oscillation;
                    var offsetY = Math.sin(angle) * oscillation;
            
                    // Set the keyframe position
                    positionProp.setValueAtTime(t, [xPos + offsetX, yPos + offsetY]);
                }
                */

                // New code

                // Calculate the number of keyframes
                var numKeyframes = props.n * 2 + 1; // Number of keyframes is twice the number of oscillations plus one

                // Add keyframes with oscillation
                for (var k = 0; k < numKeyframes; k++) {
                    var t = startTime + (props.t / numKeyframes) * k; // Time for the current keyframe
                    var progress = k / numKeyframes; // Progress ratio from 0 to 1

                    // Calculate position along the line
                    var xPos = startPos[0] + deltaX * progress;
                    var yPos = startPos[1] + deltaY * progress;

                    // Add oscillation perpendicular to the line
                    var oscillation = (k % 2 === 0 ? 1 : -1) * props.a; // Alternating between + and -
                    var angle = Math.atan2(deltaY, deltaX) + Math.PI / 2; // Perpendicular angle to the line
                    var offsetX = Math.cos(angle) * oscillation;
                    var offsetY = Math.sin(angle) * oscillation;

                    // Set the keyframe position
                    positionProp.setValueAtTime(t, [
                        xPos + offsetX,
                        yPos + offsetY,
                    ]);
                }

                // Add the final keyframe at the end position
                positionProp.setValueAtTime(endTime, endPos);
            }
        }
        // End of effect 'Walk'
        // Call effect
        fxWalk();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onHeavyWalk_4s() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Walks - Heavy Walk 4s: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Walks - Heavy Walk 4s");

        // Effect 'Walk'
        // 4s heavy walk
        function fxWalk() {
            const props = {
                t: 4.0,
                n: 10,
                a: 60,
            };
            // Walk effect
            // Props:
            // - t: duration in seconds (float)
            // - n: number of oscillations (int)
            // - a: amplitude (float)
            // For each selected layer, it attempts to create a wiggling walk in animation.
            // Animates the position property of the layer.
            // There must be guiding layers, which should be null objects to specify the start and end point of the animation.
            // Guiding layers must be named "{name}.walk.start" and "{name}.walk.end".

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

            if (!props.n) {
                _alert("Error | n is not defined in props, you must define n.");
                return;
            }

            if (!props.a) {
                _alert("Error | a is not defined in props, you must define a.");
                return;
            }

            // Get selected layers
            var selectedLayers = comp.selectedLayers;

            if (!selectedLayers || selectedLayers.length === 0) {
                _alert("Error | please select at least one layer.");
                return;
            }

            // Loop through selected layers
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];

                // Get start and end layers
                var startLayer = comp.layer(layer.name + ".walk.start");
                var endLayer = comp.layer(layer.name + ".walk.end");

                if (!startLayer || !endLayer) {
                    // Skip layer if start or end layer is not found
                    continue;
                }

                // Get position properties of the start and end null objects
                var startPos = startLayer.transform.position.value;
                var endPos = endLayer.transform.position.value;

                // Get the start and end times for keyframes
                var startTime = layer.inPoint;
                var endTime = layer.inPoint + props.t;

                // Access the Transform > Position property of the main layer
                var positionProp = layer.transform.position;

                // Remove all existing keyframes from the position property
                while (positionProp.numKeys > 0) {
                    positionProp.removeKey(1); // Always remove the first key until none remain
                }

                // Calculate the vector from start to end position
                var deltaX = endPos[0] - startPos[0];
                var deltaY = endPos[1] - startPos[1];

                /* Original code
                // Add keyframes with oscillation
                for (var k = 0; k <= frequency; k++) {
                    var t = startTime + (duration / frequency) * k; // Time for the current keyframe
                    var progress = k / frequency; // Progress ratio from 0 to 1
            
                    // Calculate position along the line
                    var xPos = startPos[0] + deltaX * progress;
                    var yPos = startPos[1] + deltaY * progress;
            
                    // Add oscillation perpendicular to the line
                    var oscillation = (k % 2 === 0 ? 1 : -1) * amplitude; // Alternating between + and -
                    var angle = Math.atan2(deltaY, deltaX) + Math.PI / 2; // Perpendicular angle to the line
                    var offsetX = Math.cos(angle) * oscillation;
                    var offsetY = Math.sin(angle) * oscillation;
            
                    // Set the keyframe position
                    positionProp.setValueAtTime(t, [xPos + offsetX, yPos + offsetY]);
                }
                */

                // New code

                // Calculate the number of keyframes
                var numKeyframes = props.n * 2 + 1; // Number of keyframes is twice the number of oscillations plus one

                // Add keyframes with oscillation
                for (var k = 0; k < numKeyframes; k++) {
                    var t = startTime + (props.t / numKeyframes) * k; // Time for the current keyframe
                    var progress = k / numKeyframes; // Progress ratio from 0 to 1

                    // Calculate position along the line
                    var xPos = startPos[0] + deltaX * progress;
                    var yPos = startPos[1] + deltaY * progress;

                    // Add oscillation perpendicular to the line
                    var oscillation = (k % 2 === 0 ? 1 : -1) * props.a; // Alternating between + and -
                    var angle = Math.atan2(deltaY, deltaX) + Math.PI / 2; // Perpendicular angle to the line
                    var offsetX = Math.cos(angle) * oscillation;
                    var offsetY = Math.sin(angle) * oscillation;

                    // Set the keyframe position
                    positionProp.setValueAtTime(t, [
                        xPos + offsetX,
                        yPos + offsetY,
                    ]);
                }

                // Add the final keyframe at the end position
                positionProp.setValueAtTime(endTime, endPos);
            }
        }
        // End of effect 'Walk'
        // Call effect
        fxWalk();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function buildUi(thisObj) {
        var w =
            thisObj instanceof Panel
                ? thisObj
                : new Window("palette", "Quick Walks");
        w.groupSlightWalksPanel = w.add("panel", undefined, "Slight Walks");
        w.groupSlightWalks = w.groupSlightWalksPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupSlightWalks.buttonSlightWalk_1s = w.groupSlightWalks.add(
            "button",
            undefined,
            "1s"
        );
        w.groupSlightWalks.buttonSlightWalk_1s.onClick = function () {
            onSlightWalk_1s();
        };
        w.groupSlightWalks.buttonSlightWalk_2s = w.groupSlightWalks.add(
            "button",
            undefined,
            "2s"
        );
        w.groupSlightWalks.buttonSlightWalk_2s.onClick = function () {
            onSlightWalk_2s();
        };
        w.groupSlightWalks.buttonSlightWalk_4s = w.groupSlightWalks.add(
            "button",
            undefined,
            "4s"
        );
        w.groupSlightWalks.buttonSlightWalk_4s.onClick = function () {
            onSlightWalk_4s();
        };
        w.groupHeavyWalksPanel = w.add("panel", undefined, "Heavy Walks");
        w.groupHeavyWalks = w.groupHeavyWalksPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupHeavyWalks.buttonHeavyWalk_1s = w.groupHeavyWalks.add(
            "button",
            undefined,
            "1s"
        );
        w.groupHeavyWalks.buttonHeavyWalk_1s.onClick = function () {
            onHeavyWalk_1s();
        };
        w.groupHeavyWalks.buttonHeavyWalk_2s = w.groupHeavyWalks.add(
            "button",
            undefined,
            "2s"
        );
        w.groupHeavyWalks.buttonHeavyWalk_2s.onClick = function () {
            onHeavyWalk_2s();
        };
        w.groupHeavyWalks.buttonHeavyWalk_4s = w.groupHeavyWalks.add(
            "button",
            undefined,
            "4s"
        );
        w.groupHeavyWalks.buttonHeavyWalk_4s.onClick = function () {
            onHeavyWalk_4s();
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
