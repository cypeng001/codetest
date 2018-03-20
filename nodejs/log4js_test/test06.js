var log4js = require('log4js');

log4js.configure({
  appenders: [
    {
      "type": "file",
      "filename": "./node-log-6.log",
      "fileSize": 1048576,
      "layout": {
        "type": "basic"
      }, 
      "backups": 5,
      "category":"node"
    },
    {
      "type": "console"
    },
    {
      "type": "file",
      "filename": "./con-log-6-1.log", 
      "pattern": "connector", 
      "fileSize": 1048576,
      "layout": {
          "type": "basic"
        }
      ,"backups": 5,
      "category":"con-log-1"
    },
    {
      "type": "file",
      "filename": "./con-log-6-2.log", 
      "pattern": "connector", 
      "fileSize": 1048576,
      "layout": {
          "type": "basic"
        }
      ,"backups": 5,
      "category":"con-log-2"
    }
  ]
})

var logger1 = log4js.getLogger('con-log-1');
var logger2 = log4js.getLogger('con-log-2');
logger1.info("Time:", new Date());
logger1.info("Time:", new Date());
logger2.info("Time:", new Date());
logger1.info("Time:", new Date());


console.log("hi");