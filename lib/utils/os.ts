import fs from 'fs'

const REPORTS_FOLDER = './reports'

export default class OSUtils {
    static getReportFolder(): string {
        if (!fs.existsSync(REPORTS_FOLDER)) {
            fs.mkdirSync(REPORTS_FOLDER)
        }

        return REPORTS_FOLDER
    }
}
