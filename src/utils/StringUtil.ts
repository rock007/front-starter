
/**
 * StringUtil
 */
class StringUtil {

    public static formatDateTime(datetime: string = '2016-07-13 08:45:00'): string {

        let returnDateStr = datetime;

        try {
            var current_date = new Date().getTime();
            var _date = datetime.split(" ")[0];
            var _time = datetime.split(" ")[1];
            var date = new Date();
            var _dateArray = _date.split("-");
            var _timeArray = _time.split(":");

            date.setFullYear(parseInt(_dateArray[0]));
            date.setMonth(parseInt(_dateArray[1]) - 1);
            date.setDate(parseInt(_dateArray[2]));
            date.setHours(parseInt(_timeArray[0]));
            date.setMinutes(parseInt(_timeArray[1]));
            date.setSeconds(parseInt(_timeArray[2]));

            var mul = current_date - date.getTime();
            var time = mul / 1000;

            if (time < 60) {
                return "刚刚"
            } else if (time < 3600) {
                return Math.floor(time / 60) + " 分钟前"
            } else if (time < 86400) {
                return Math.floor(time / 3600) + " 小时前"
            } else if (time < 604800) {
                return Math.floor(time / 86400) + " 天前"
            } else if (time < 2592000) {
                return Math.floor(time / 604800) + " 周前"
            } else if (time < 31536000) {
                return Math.floor(time / 2592000) + " 个月前"
            } else {
                return Math.floor(time / 31536000) + " 年前"
            }


        } catch (err) {

            return returnDateStr;
        }
    }
}