const inquiryInit = require('../Config/InitData/InquiryDataInit');
const path = require('path');
module.exports = class InquiryViewController {
    static async renderInquiryInfoSite(req,res, next) {
        const listTasks = await inquiryInit.getAllListTasksInit();
        res.render('online', { listTasks: listTasks });    }
}