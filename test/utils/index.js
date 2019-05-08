const { spawnSync } = require('child_process')

/**
 * Spawns a child process and runs the specified command
 * By default, runs in the CWD and inherits stdio
 * Options are the same as node's child_process.spawn
 * @param {string} cmd
 * @param {array<string>} args
 * @param {object} options
 */
function runCommandSync(cmd, args, options) {
    return spawnSync(
        cmd,
        args,
        Object.assign(
            {
                cwd: process.cwd(),
                // stdio: 'inherit',
                shell: true,
            },
            options
        )
    )
}

module.exports = {
    runCommandSync
}