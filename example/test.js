const fs = require('fs')
const path = require('path')
const { spawnSync } = require('child_process')

const forceDelete = require('../src')

function runCommandSync(cmd, args, options) {
    return spawnSync(
        cmd,
        args,
        Object.assign(
            {
                cwd: process.cwd(),
                stdio: 'inherit',
                shell: true,
            },
            options
        )
    )
}

fs.copyFileSync(path.join(__dirname, 'static/adbs.exe'), path.join(__dirname, 'adbs.exe'))

console.log(runCommandSync(path.join(__dirname, 'adbs.exe'), ['start-server']))

forceDelete(path.join(__dirname, 'adbs.exe'), {
    kill: true
})