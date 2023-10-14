const inquiryInfoModel = require('../Models/inquiryInfoModel')

module.exports = class InquiryInfoService {
    static async getAllTasks(page, perPage) {
        const listTask = await inquiryInfoModel.getAllTask(page, perPage);
        if(listTask === []) {
            return [[], false]
        } else {
            return [listTask, true]
        }
    }

    static async getListTaskByContents(contents) {
        if(contents === "") {
            return [[], false];
        }
        const listTaskByContents = await inquiryInfoModel.getListTaskByContents(contents);
        console.log(listTaskByContents);
        if(listTaskByContents === []) {
            return [[], false]
        } else {
            return [listTaskByContents, true]
        }
    }
}