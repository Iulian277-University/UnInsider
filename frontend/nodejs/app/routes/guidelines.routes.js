module.exports = app => {
    const guidelines = require('../controllers/guidelines.controller');
  
    var router = require('express').Router();
  
    app.use('/guidelines', router);

    // Language detection
    router.post('/language', guidelines.languageDetection);
};
  