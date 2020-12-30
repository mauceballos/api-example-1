module.exports = {
    maxInstances: 1,
    browserName: 'firefox',
    'moz:firefoxOptions': {
        args: [
            '--safe-mode',
            '--headless',
            '--verbose',
            'incognito',
        ]
    }
};