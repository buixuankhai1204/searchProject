var express = require('express');
var inquiryView = require('../Controllers/InquiryViewController');
var inquiryController = require('../Controllers/InquiryMasterController');
var router = express.Router();

/* GET users listing. */

router.route('/online').get(inquiryView.renderInquiryInfoSite)
router.route('/online/searchContents').post(inquiryController.getAllTasksByContents)
module.exports = router;
