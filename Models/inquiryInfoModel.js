const mysql = require('../Config/database');

module.exports = class inquiryInfoModel {
    static async getAllTask(page, perpage) {
        try {
            const rows= await mysql.performDynamicQuery(
                'SELECT * from `inquiry_info` LIMIT ? OFFSET ?',
                [perpage, (page * perpage) - perpage]
            );
            if (rows !== undefined) {
                return rows
            } else {
                return []
            }
        } catch (e) {
            return e.sqlMessage;
        }
    }

    static async getListTaskByContents(contents) {
        try {
            const rows = await mysql.performDynamicQuery(
                'SELECT * FROM `inquiry_info` WHERE `contents` LIKE ?',
                [`%${contents}%`]
            );
            if (rows !== undefined) {
                return rows
            } else {
                return []
            }
        } catch (e) {
            return e.sqlMessage;
        }
    }

}