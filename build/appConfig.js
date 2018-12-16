// your account sid
var accountSid = 'ACdef20f8d0044b094b6e8d17a2ebd0944';

// your runtime domain
var serviceBaseUrl = 'http://localhost:8080';

// set to /plugins.json for local dev
// set to /plugins.local.build.json for testing your build
// set to "" for the default live plugin loader
var pluginServiceUrl = '/plugins.json';

var appConfig = {
  serviceBaseUrl: serviceBaseUrl + '/',
  pluginService: {
    enabled: true,
    url: pluginServiceUrl,
  },
  sso: {
    accountSid: accountSid,
    tokenizerUrl: serviceBaseUrl + '/tokenizer',
  },
  ytica: false,
  logLevel: 'debug',
  showSupervisorDesktopView: true,
};
