/**
 * User type definition
 * @typedef {object} VueAddonState
 * @property {boolean} active if true, VueAddon will rendered
 * @property {string} id id of the VueAddon component
 * @property {module:ol/interaction/Pointer} selectPointerMove contains interaction listener to map
 * @property {object[]} projections list of available projections
 * @property {object} mapProjection projection of the map
 * @property {number[]} positionMapProjection position of the projection in the map
 * @property {boolean} updatePosition if true, position is updated in tool
 * @property {string} currentProjectionName name of the current projection
 * @property {object} currentProjection the current projection
 * @property {string} currentSelection currently selected projection value
 * @property {string} coordinatesEastingField label of the easting field
 * @property {string} coordinatesNorthingField label of the northing field
 * @property {string} name displayed as title (config-param)
 * @property {string} icon icon next to title (config-param)
 * @property {boolean} renderToWindow if true, tool is rendered in a window, else in sidebar (config-param)
 * @property {boolean} resizableWindow if true, window is resizable (config-param)
 * @property {boolean} isVisibleInMenu if true, tool is selectable in menu (config-param)
 * @property {boolean} deactivateGFI flag if tool should deactivate gfi (config-param)
 */
const state = {
    active: false,
    id: "WindSimulation",
    // defaults for config.json parameters
    name: "Simple Vue Addon",
    icon: "bi-bullseye",
    renderToWindow: false,
    resizableWindow: false,
    isVisibleInMenu: true,
    initialWidth: 500,
    deactivateGFI: true,
    url: "https://api.city-scope.hcu-hamburg.de/cut-mock/",
    urlWindSuffix: "trigger_calculation_wind",
    urlNoiseSuffix: "trigger_calculation_noise"
};

export default state;
