/**
* @module altspace/components
*/

'use strict';

import {registerComponentClass, registerSystemClass, flatten} from './AFrameComponent';
import AltspaceCursorCollider from './AltspaceCursorCollider';
import AltspaceTrackedControls from './AltspaceTrackedControls';
import AltspaceComponent from './AltspaceComponent';
import SyncColor from './SyncColor';
import SyncComponent from './SyncComponent';
import SyncSystem from './SyncSystem';
import SyncTransform from './sync-transform';
import SyncNSound from './sync-n-sound';
//import NativeComponents from './native-components';
import Wire from './wire';

// TODO: finish porting aframe components to es6
if (window.AFRAME)
{
    /**
    * @mixin sync-system
    * @memberof module:altspace/components
    * @extends module:altspace/components.SyncSystem
    */
    registerSystemClass('sync-system', SyncSystem);

    /**
    * @mixin altspace-cursor-collider
    * @memberof module:altspace/components
    * @extends module:altspace/components.AltspaceCursorCollider
    */
    registerComponentClass('altspace-cursor-collider', AltspaceCursorCollider);

    /**
    * @mixin altspace-tracked-controls
    * @memberof module:altspace/components
    * @extends module:altspace/components.AltspaceTrackedControls
    */
    registerComponentClass('altspace-tracked-controls', AltspaceTrackedControls);

    /**
    * @mixin altspace
    * @memberof module:altspace/components
    * @extends module:altspace/components.AltspaceComponent
    */
    registerComponentClass('altspace', AltspaceComponent);

    /**
    * @mixin sync-color
    * @memberof module:altspace/components
    * @extends module:altspace/components.SyncColor
    */
    registerComponentClass('sync-color', SyncColor);

    /**
    * @mixin sync
    * @memberof module:altspace/components
    * @extends module:altspace/components.SyncComponent
    */
    registerComponentClass('sync', SyncComponent);

}

export {AltspaceComponent, AltspaceCursorCollider, AltspaceTrackedControls, SyncSystem, SyncComponent, SyncColor, flatten };
