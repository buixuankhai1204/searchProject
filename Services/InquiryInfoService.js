const inquiryInfoModel = require('../Models/inquiryInfoModel')

module.exports = class InquiryInfoService {
    static async getAllTasks(page, perPage) {
        const listTask = await inquiryInfoModel.getAllTask(page, perPage);
        if(listTask === []) {
            return [[], false]
        } else {
            for (let i = 0; i < listTask.length; i++) {
                listTask[i].contents = listTask[i].contents.slice(0,200);
            }
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
            for (let i = 0; i < listTaskByContents.length; i++) {
                listTaskByContents[i].contents = listTaskByContents[i].contents.slice(0,200);
            }
            return [listTaskByContents, true]
        }
    }
}