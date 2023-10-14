const inquiryModel = require('../../Models/inquiryInfoModel');
let listTasks = [];

async function setAlllistTasksInit() {
    listTasks = await inquiryModel.getAllTask(1,10);
}

function getAllListTasksInit() {
    return listTasks;
}

module.exports = {
    setAlllistTasksInit,
    getAllListTasksInit
}