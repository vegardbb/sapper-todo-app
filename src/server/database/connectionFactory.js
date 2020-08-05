module.exports = processEnv => new Database(processEnv.FILE_NAME, { readonly: false, timeout: 15000, verbose: console.log })
