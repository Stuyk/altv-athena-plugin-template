import * as alt from 'alt-server';
import { PluginSystem } from '../../../server/systems/plugins';
import { EXAMPLE_CONFIG } from '../shared/config';

PluginSystem.registerPlugin(EXAMPLE_CONFIG.PLUGIN_NAME, () => {
    alt.log(`~lg~${EXAMPLE_CONFIG.PLUGIN_NAME} was Loaded`);
});
