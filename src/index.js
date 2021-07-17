const core = require('@actions/core');
const fs = require('fs')

const {CONTENT, FILENAME, GITHUB_WORKSPACE} = require('./inputs')

module.exports = () => {
    try {
        const path = `${GITHUB_WORKSPACE}`;
        if (!path) throw new Error("Can't get Github Workspace")
        console.log(`${path}/${FILENAME}`);
        fs.writeFileSync(`${path}/${FILENAME}`, CONTENT);
        core.setOutput(".env GENERATED SUCCESSFULLY")
    } catch (error) {
        core.setFailed(error.message);
    }
}