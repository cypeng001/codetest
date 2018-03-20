var log4js = require('log4js');
log4js.configure({
  appenders: [{
    type: 'file',
    filename: 'default3.log'
  }]
})
var logger = log4js.getLogger('custom-appender');
logger.debug("Time:", new Date());