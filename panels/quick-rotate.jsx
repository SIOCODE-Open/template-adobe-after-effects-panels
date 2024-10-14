(function quickRotate(thisObj) {
    function onInHalfSecond_45degCw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - In Half Second 45deg Cw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - In Half Second 45deg Cw");

        // Effect 'Rotatein'
        // 0.5s 45deg clockwise rotate in
        function fxRotatein() {
            const props = {
                t: 0.5,
                r: -45,
            };
            // Rotate In effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the rotation set to current rotation + r
            // The second keyframe at the inPoint + t, with the rotation set to current rotation

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    currentRotation + props.r
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.inPoint + props.t,
                    currentRotation
                );
            }
        }
        // End of effect 'Rotatein'
        // Call effect
        fxRotatein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onInOneSecond_45degCw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - In One Second 45deg Cw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - In One Second 45deg Cw");

        // Effect 'Rotatein'
        // 1s 45deg clockwise rotate in
        function fxRotatein() {
            const props = {
                t: 1.0,
                r: -45,
            };
            // Rotate In effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the rotation set to current rotation + r
            // The second keyframe at the inPoint + t, with the rotation set to current rotation

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    currentRotation + props.r
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.inPoint + props.t,
                    currentRotation
                );
            }
        }
        // End of effect 'Rotatein'
        // Call effect
        fxRotatein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onInHalfSecond_90degCw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - In Half Second 90deg Cw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - In Half Second 90deg Cw");

        // Effect 'Rotatein'
        // 0.5s 90deg clockwise rotate in
        function fxRotatein() {
            const props = {
                t: 0.5,
                r: -90,
            };
            // Rotate In effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the rotation set to current rotation + r
            // The second keyframe at the inPoint + t, with the rotation set to current rotation

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    currentRotation + props.r
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.inPoint + props.t,
                    currentRotation
                );
            }
        }
        // End of effect 'Rotatein'
        // Call effect
        fxRotatein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onInOneSecond_90degCw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - In One Second 90deg Cw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - In One Second 90deg Cw");

        // Effect 'Rotatein'
        // 1s 90deg clockwise rotate in
        function fxRotatein() {
            const props = {
                t: 1.0,
                r: -90,
            };
            // Rotate In effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the rotation set to current rotation + r
            // The second keyframe at the inPoint + t, with the rotation set to current rotation

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    currentRotation + props.r
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.inPoint + props.t,
                    currentRotation
                );
            }
        }
        // End of effect 'Rotatein'
        // Call effect
        fxRotatein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onInHalfSecond_45degCcw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - In Half Second 45deg Ccw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - In Half Second 45deg Ccw");

        // Effect 'Rotatein'
        // 0.5s 45deg counterclockwise rotate in
        function fxRotatein() {
            const props = {
                t: 0.5,
                r: 45,
            };
            // Rotate In effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the rotation set to current rotation + r
            // The second keyframe at the inPoint + t, with the rotation set to current rotation

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    currentRotation + props.r
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.inPoint + props.t,
                    currentRotation
                );
            }
        }
        // End of effect 'Rotatein'
        // Call effect
        fxRotatein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onInOneSecond_45degCcw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - In One Second 45deg Ccw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - In One Second 45deg Ccw");

        // Effect 'Rotatein'
        // 1s 45deg counterclockwise rotate in
        function fxRotatein() {
            const props = {
                t: 1.0,
                r: 45,
            };
            // Rotate In effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the rotation set to current rotation + r
            // The second keyframe at the inPoint + t, with the rotation set to current rotation

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    currentRotation + props.r
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.inPoint + props.t,
                    currentRotation
                );
            }
        }
        // End of effect 'Rotatein'
        // Call effect
        fxRotatein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onInHalfSecond_90degCcw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - In Half Second 90deg Ccw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - In Half Second 90deg Ccw");

        // Effect 'Rotatein'
        // 0.5s 90deg counterclockwise rotate in
        function fxRotatein() {
            const props = {
                t: 0.5,
                r: 90,
            };
            // Rotate In effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the rotation set to current rotation + r
            // The second keyframe at the inPoint + t, with the rotation set to current rotation

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    currentRotation + props.r
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.inPoint + props.t,
                    currentRotation
                );
            }
        }
        // End of effect 'Rotatein'
        // Call effect
        fxRotatein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onInOneSecond_90degCcw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - In One Second 90deg Ccw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - In One Second 90deg Ccw");

        // Effect 'Rotatein'
        // 1s 90deg counterclockwise rotate in
        function fxRotatein() {
            const props = {
                t: 1.0,
                r: 90,
            };
            // Rotate In effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the inPoint, with the rotation set to current rotation + r
            // The second keyframe at the inPoint + t, with the rotation set to current rotation

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    currentRotation + props.r
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.inPoint + props.t,
                    currentRotation
                );
            }
        }
        // End of effect 'Rotatein'
        // Call effect
        fxRotatein();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onOutHalfSecond_45degCw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - Out Half Second 45deg Cw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - Out Half Second 45deg Cw");

        // Effect 'Rotateout'
        // 0.5s 45deg clockwise rotate out
        function fxRotateout() {
            const props = {
                t: 0.5,
                r: -45,
            };
            // Rotate Out effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the rotation set to current rotation
            // The second keyframe at the outPoint, with the rotation set to current rotation + r

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    layer.outPoint - props.t,
                    currentRotation
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.outPoint,
                    currentRotation + props.r
                );
            }
        }
        // End of effect 'Rotateout'
        // Call effect
        fxRotateout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onOutOneSecond_45degCw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - Out One Second 45deg Cw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - Out One Second 45deg Cw");

        // Effect 'Rotateout'
        // 1s 45deg clockwise rotate out
        function fxRotateout() {
            const props = {
                t: 1.0,
                r: -45,
            };
            // Rotate Out effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the rotation set to current rotation
            // The second keyframe at the outPoint, with the rotation set to current rotation + r

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    layer.outPoint - props.t,
                    currentRotation
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.outPoint,
                    currentRotation + props.r
                );
            }
        }
        // End of effect 'Rotateout'
        // Call effect
        fxRotateout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onOutHalfSecond_90degCw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - Out Half Second 90deg Cw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - Out Half Second 90deg Cw");

        // Effect 'Rotateout'
        // 0.5s 90deg clockwise rotate out
        function fxRotateout() {
            const props = {
                t: 0.5,
                r: -90,
            };
            // Rotate Out effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the rotation set to current rotation
            // The second keyframe at the outPoint, with the rotation set to current rotation + r

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    layer.outPoint - props.t,
                    currentRotation
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.outPoint,
                    currentRotation + props.r
                );
            }
        }
        // End of effect 'Rotateout'
        // Call effect
        fxRotateout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onOutOneSecond_90degCw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - Out One Second 90deg Cw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - Out One Second 90deg Cw");

        // Effect 'Rotateout'
        // 1s 90deg clockwise rotate out
        function fxRotateout() {
            const props = {
                t: 1.0,
                r: -90,
            };
            // Rotate Out effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the rotation set to current rotation
            // The second keyframe at the outPoint, with the rotation set to current rotation + r

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    layer.outPoint - props.t,
                    currentRotation
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.outPoint,
                    currentRotation + props.r
                );
            }
        }
        // End of effect 'Rotateout'
        // Call effect
        fxRotateout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onOutHalfSecond_45degCcw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - Out Half Second 45deg Ccw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - Out Half Second 45deg Ccw");

        // Effect 'Rotateout'
        // 0.5s 45deg counterclockwise rotate out
        function fxRotateout() {
            const props = {
                t: 0.5,
                r: 45,
            };
            // Rotate Out effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the rotation set to current rotation
            // The second keyframe at the outPoint, with the rotation set to current rotation + r

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    layer.outPoint - props.t,
                    currentRotation
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.outPoint,
                    currentRotation + props.r
                );
            }
        }
        // End of effect 'Rotateout'
        // Call effect
        fxRotateout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onOutOneSecond_45degCcw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - Out One Second 45deg Ccw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - Out One Second 45deg Ccw");

        // Effect 'Rotateout'
        // 1s 45deg counterclockwise rotate out
        function fxRotateout() {
            const props = {
                t: 1.0,
                r: 45,
            };
            // Rotate Out effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the rotation set to current rotation
            // The second keyframe at the outPoint, with the rotation set to current rotation + r

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    layer.outPoint - props.t,
                    currentRotation
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.outPoint,
                    currentRotation + props.r
                );
            }
        }
        // End of effect 'Rotateout'
        // Call effect
        fxRotateout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onOutHalfSecond_90degCcw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - Out Half Second 90deg Ccw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - Out Half Second 90deg Ccw");

        // Effect 'Rotateout'
        // 0.5s 90deg counterclockwise rotate out
        function fxRotateout() {
            const props = {
                t: 0.5,
                r: 90,
            };
            // Rotate Out effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the rotation set to current rotation
            // The second keyframe at the outPoint, with the rotation set to current rotation + r

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    layer.outPoint - props.t,
                    currentRotation
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.outPoint,
                    currentRotation + props.r
                );
            }
        }
        // End of effect 'Rotateout'
        // Call effect
        fxRotateout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function onOutOneSecond_90degCcw() {
        // Helpers local to the effect
        function _alert(args) {
            alert("Quick Rotate - Out One Second 90deg Ccw: " + args);
        }

        // Get composition
        var comp = app.project.activeItem;

        if (!comp || !(comp instanceof CompItem)) {
            _alert("Error | please select a composition first.");
            return;
        }

        // Run effect in undo group
        app.beginUndoGroup("Quick Rotate - Out One Second 90deg Ccw");

        // Effect 'Rotateout'
        // 1s 90deg counterclockwise rotate out
        function fxRotateout() {
            const props = {
                t: 1.0,
                r: 90,
            };
            // Rotate Out effect
            // Props:
            // - t: duration in seconds (float)
            // - r: rotation in degrees (float)
            // Creates two keyframes in all selected layers.
            // The first keyframe at the outPoint - t, with the rotation set to current rotation
            // The second keyframe at the outPoint, with the rotation set to current rotation + r

            // Check props
            if (!props.t) {
                _alert("Error | t is not defined in props, you must define t.");
                return;
            }

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
                    layer.outPoint - props.t,
                    currentRotation
                );
                var key2 = layer.transform.rotation.setValueAtTime(
                    layer.outPoint,
                    currentRotation + props.r
                );
            }
        }
        // End of effect 'Rotateout'
        // Call effect
        fxRotateout();

        _alert("Completed.");

        app.endUndoGroup();
    }
    function buildUi(thisObj) {
        var w =
            thisObj instanceof Panel
                ? thisObj
                : new Window("palette", "Quick Rotate");
        w.groupRotateinsCwPanel = w.add("panel", undefined, "Rotate In CW");
        w.groupRotateinsCw = w.groupRotateinsCwPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupRotateinsCw.buttonInHalfSecond_45degCw = w.groupRotateinsCw.add(
            "button",
            undefined,
            "0.5s 45deg"
        );
        w.groupRotateinsCw.buttonInHalfSecond_45degCw.onClick = function () {
            onInHalfSecond_45degCw();
        };
        w.groupRotateinsCw.buttonInOneSecond_45degCw = w.groupRotateinsCw.add(
            "button",
            undefined,
            "1s 45deg"
        );
        w.groupRotateinsCw.buttonInOneSecond_45degCw.onClick = function () {
            onInOneSecond_45degCw();
        };
        w.groupRotateinsCw.buttonInHalfSecond_90degCw = w.groupRotateinsCw.add(
            "button",
            undefined,
            "0.5s 90deg"
        );
        w.groupRotateinsCw.buttonInHalfSecond_90degCw.onClick = function () {
            onInHalfSecond_90degCw();
        };
        w.groupRotateinsCw.buttonInOneSecond_90degCw = w.groupRotateinsCw.add(
            "button",
            undefined,
            "1s 90deg"
        );
        w.groupRotateinsCw.buttonInOneSecond_90degCw.onClick = function () {
            onInOneSecond_90degCw();
        };
        w.groupRotateinsCcwPanel = w.add("panel", undefined, "Rotate In CCW");
        w.groupRotateinsCcw = w.groupRotateinsCcwPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupRotateinsCcw.buttonInHalfSecond_45degCcw =
            w.groupRotateinsCcw.add("button", undefined, "0.5s 45deg");
        w.groupRotateinsCcw.buttonInHalfSecond_45degCcw.onClick = function () {
            onInHalfSecond_45degCcw();
        };
        w.groupRotateinsCcw.buttonInOneSecond_45degCcw =
            w.groupRotateinsCcw.add("button", undefined, "1s 45deg");
        w.groupRotateinsCcw.buttonInOneSecond_45degCcw.onClick = function () {
            onInOneSecond_45degCcw();
        };
        w.groupRotateinsCcw.buttonInHalfSecond_90degCcw =
            w.groupRotateinsCcw.add("button", undefined, "0.5s 90deg");
        w.groupRotateinsCcw.buttonInHalfSecond_90degCcw.onClick = function () {
            onInHalfSecond_90degCcw();
        };
        w.groupRotateinsCcw.buttonInOneSecond_90degCcw =
            w.groupRotateinsCcw.add("button", undefined, "1s 90deg");
        w.groupRotateinsCcw.buttonInOneSecond_90degCcw.onClick = function () {
            onInOneSecond_90degCcw();
        };
        w.groupRotateoutsCwPanel = w.add("panel", undefined, "Rotate Out CW");
        w.groupRotateoutsCw = w.groupRotateoutsCwPanel.add("group", undefined, {
            orientation: "row",
        });
        w.groupRotateoutsCw.buttonOutHalfSecond_45degCw =
            w.groupRotateoutsCw.add("button", undefined, "0.5s 45deg");
        w.groupRotateoutsCw.buttonOutHalfSecond_45degCw.onClick = function () {
            onOutHalfSecond_45degCw();
        };
        w.groupRotateoutsCw.buttonOutOneSecond_45degCw =
            w.groupRotateoutsCw.add("button", undefined, "1s 45deg");
        w.groupRotateoutsCw.buttonOutOneSecond_45degCw.onClick = function () {
            onOutOneSecond_45degCw();
        };
        w.groupRotateoutsCw.buttonOutHalfSecond_90degCw =
            w.groupRotateoutsCw.add("button", undefined, "0.5s 90deg");
        w.groupRotateoutsCw.buttonOutHalfSecond_90degCw.onClick = function () {
            onOutHalfSecond_90degCw();
        };
        w.groupRotateoutsCw.buttonOutOneSecond_90degCw =
            w.groupRotateoutsCw.add("button", undefined, "1s 90deg");
        w.groupRotateoutsCw.buttonOutOneSecond_90degCw.onClick = function () {
            onOutOneSecond_90degCw();
        };
        w.groupRotateoutsCcwPanel = w.add("panel", undefined, "Rotate Out CCW");
        w.groupRotateoutsCcw = w.groupRotateoutsCcwPanel.add(
            "group",
            undefined,
            {
                orientation: "row",
            }
        );
        w.groupRotateoutsCcw.buttonOutHalfSecond_45degCcw =
            w.groupRotateoutsCcw.add("button", undefined, "0.5s 45deg");
        w.groupRotateoutsCcw.buttonOutHalfSecond_45degCcw.onClick =
            function () {
                onOutHalfSecond_45degCcw();
            };
        w.groupRotateoutsCcw.buttonOutOneSecond_45degCcw =
            w.groupRotateoutsCcw.add("button", undefined, "1s 45deg");
        w.groupRotateoutsCcw.buttonOutOneSecond_45degCcw.onClick = function () {
            onOutOneSecond_45degCcw();
        };
        w.groupRotateoutsCcw.buttonOutHalfSecond_90degCcw =
            w.groupRotateoutsCcw.add("button", undefined, "0.5s 90deg");
        w.groupRotateoutsCcw.buttonOutHalfSecond_90degCcw.onClick =
            function () {
                onOutHalfSecond_90degCcw();
            };
        w.groupRotateoutsCcw.buttonOutOneSecond_90degCcw =
            w.groupRotateoutsCcw.add("button", undefined, "1s 90deg");
        w.groupRotateoutsCcw.buttonOutOneSecond_90degCcw.onClick = function () {
            onOutOneSecond_90degCcw();
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
