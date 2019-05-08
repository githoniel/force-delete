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
/**
 * @param {string} deletePath the path to a file, a folder or a leading part of the path. E.g. K:, C:\Program Files, C:\Docume. /unlock or -u - unlocks the file_or_folder_path. It closes all handles to the files\folder that starts from file_or_folder_path and unloads .dlls which are residing in the files\folder that starts from file_or_folder_path.
 * @param {object} options
 * @param {object} options.kill terminates all the apps which are launched from path
 * @param {object} options.staticPath path to this package's `/static`, use this when using webpack in electron
 */
module.exports = function forceDelete(deletePath, {
    kill,
    staticPath
} = {}) {
    const args = ['-d', '-dp']
    if (kill) {
        args.push('-k')
    }
    args.push(`"${deletePath}"`)
    const result = runCommandSync(
        staticPath || path.join(__dirname, '../static/LockHunter.exe'),
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