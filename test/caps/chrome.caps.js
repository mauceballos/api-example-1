module.exports = {
    maxInstances: 1,
    browserName: "chrome",
    loggingPrefs: {
        browser: 'SEVERE' // "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
    },
    chromeOptions: {
        args: [
            '--disable-infobars',
            '--disable-notifications',
            '--headless',
            '--no-sandbox',
            '--verbose',
            '--log-path=./api-acceptance/logs/chromedriver.log',
            '--enable-logging',
            'v=1',
            'incognito',
        ],
    }
};