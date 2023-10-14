const inquiryInfoService = require('../Services/InquiryInfoService');
module.exports = class InquiryMasterController {
    static async getAllTasks(req, res, next) {
        if (!req.body.page) {
            req.body.page = 1
        }
        if (!req.body.perPage) {
            req.body.perPage = 10
        }

        const [listTasks, status] = await inquiryInfoService.getAllTasks(req.body.page, req.body.perPage);
        if (status === false) {
            return res.status(200).json({
                status: "fail",
                message: "can not get all tasks!"
            })
        } else {
            return res.status(200).json({
                status: "success",
                data: listTasks,
                message: "get all tasks success!"
            })
        }
    }

    static async getAllTasksByContents(req, res, next) {

        const [listTasks, status] = await inquiryInfoService.getListTaskByContents(req.body.contents);
        if (status === false) {
            return res.status(200).json({
                status: "fail",
                message: "can not get all tasks have this contents!"
            })
        } else {
            return res.status(200).json({
                status: "success",
                data: listTasks,
                message: "get all tasks by contents success!"
            })
        }
    }
}