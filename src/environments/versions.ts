declare var require: any

const bootstrap: string = require('../../package.json')
    .dependencies['bootstrap']
    .replace('^', '')
    .split('.')
    .slice(0, 2)
    .join('.'); // extracts only the minor version "4.0.1" -> "4.0"

export const versions: { [key: string]: string } = { bootstrap };