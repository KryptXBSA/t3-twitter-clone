import moment from "moment";

export function formatDate(date: Date) {
    const now = moment();
    const dateMoment = moment(date);
    if (dateMoment.isSame(now, "day")) {
        return dateMoment.fromNow();
    } else {
        return dateMoment.format("D MMM");
    }
}
