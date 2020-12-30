caps = require('./test/caps/firefox.caps');
const
    { ArtifactArchiver } = require('@serenity-js/core'),
    { ConsoleReporter } = require('@serenity-js/console-reporter'),
    { Photographer, TakePhotosOfFailures, TakePhotosOfInteractions } = require('@serenity-js/protractor'),
    { SerenityBDDReporter } = require('@serenity-js/serenity-bdd'),
    isCI = require('is-ci');

exports.config = {

    SELENIUM_PROMISE_MANAGER: false,
    allScriptsTimeout: 110000,
    directConnect: true,
    disableChecks: true,
    ignoreUncaughtExceptions: true,
    framework: 'custom',
    frameworkPath: require.resolve('@serenity-js/protractor/adapter'),
    chromeOnly: true,
    specs: ['test/spec/**.js'],
    exclude: [],
    serenity: {
        runner: 'mocha',
        crew: [
            ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
            ConsoleReporter.forDarkTerminals(),
            Photographer.whoWill(TakePhotosOfFailures),
            new SerenityBDDReporter(),
        ]
    },
    mochaOpts: {
        format: 'pretty',
        timeout: 5000
    },
    maxSessions: 1,
    verboseMultiSessions: true,
    capabilities: caps,
    logLevel: 'INFO',
    onPrepare: async function () {
        global.globalTestCases = [];
        global.globalTestsFailed = [];
        global.globalTestsPass = [];
        global.globalTotalTest = "";
        global.globalTestSuss = "";
        global.globalTestFail = "";
    },
};
