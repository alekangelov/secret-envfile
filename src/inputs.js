const core = require('@actions/core');
const inputNames = ['content', 'filename'];


const inputs = {
  GITHUB_WORKSPACE: process.env.GITHUB_WORKSPACE
};
// Get inputs from ENV or WITH workflow settings
inputNames.forEach((input) => {
  inputs[input.toUpperCase()] = core.getInput(input);
});

module.exports = inputs;