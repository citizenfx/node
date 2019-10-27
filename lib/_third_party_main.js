const { addBuiltinLibsToObject } = require('internal/modules/cjs/helpers');
addBuiltinLibsToObject(global);

const Module = require('module');

const m = new Module('dummy.js');
m.filename = Citizen.getResourcePath() + '/dummy.js';
m.paths = Module._nodeModulePaths(Citizen.getResourcePath() + '/');

const script = 'module.exports = {require};';
const result = m._compile(script, 'dummy-wrapper');

global.require = m.exports.require;