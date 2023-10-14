const inquiryModel = require('../../Models/inquiryInfoModel');
let listTasks = [];

async function setAlllistTasksInit() {
    listTasks = await inquiryModel.getAllTask(1,10);
    for (let i = 0; i < listTasks.length; i++) {
        listTasks[i].contents = listTasks[i].contents.slice(0,200);
    }
}

function getAllListTasksInit() {
    return listTasks;
}

module.exports = {
    setAlllistTasksInit,
    getAllListTasksInit
}