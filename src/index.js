const spawnSync = require('child_process').spawnSync
const path = require('path')

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

module.exports = runCommandSync

module.exports = function forceDelete(deletePath, {
    kill,
}) {
    const args = ['-d', '-sm']
    if (kill) {
        args.push('-k')
    }
    args.push(`"${deletePath}"`)
    const result = runCommandSync(
        path.join(__dirname, '../static/LockHunter.exe'),
        args
    )
    switch (result.status) {
    case 0:
        return
    case 1:
        throw new Error('cannot delete or unlock a file')
    case 2:
        throw new Error('technical error occured while processing operation')
    default:
        throw new Error('unknown error')
    }
}