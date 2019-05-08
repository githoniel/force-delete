const fs = require('fs')
const path = require('path')

const { runCommandSync } = require('./utils')
const forceDelete = require('../src')

it('should force kill running exe', async () => {
    const adbFileToDelete = path.join(__dirname, 'adbs.exe')
    // create file to delete, an adb.exe
    if (!fs.existsSync(adbFileToDelete)) {
        fs.copyFileSync(path.join(__dirname, 'static/adbs.exe'), adbFileToDelete)
    }
    // run it
    runCommandSync(path.join(__dirname, 'adbs.exe'), ['start-server'])
    // try to kill it
    forceDelete(path.join(__dirname, 'adbs.exe'), {
        kill: true
    })

    expect(fs.existsSync(adbFileToDelete)).toBe(false)
})