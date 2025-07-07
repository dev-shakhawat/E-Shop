export function calculateTimeLeft() {
        const saleEndtime = new Date("july 30 , 2025 12:00 AM GMT+6").getTime();
        const currentDate = new Date().getTime();
        const diffrent = saleEndtime - currentDate;

        if (diffrent < 0) {
            return {day: 0, hour: 0, munite: 0, second: 0}
        }

        return {
            day: Math.floor(diffrent / (1000 * 60 * 60 * 24)),
            hour: Math.floor((diffrent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            munite: Math.floor((diffrent % (1000 * 60 * 60)) / (1000 * 60)),
            second: Math.floor((diffrent % (1000 * 60)) / 1000)
        }
    }