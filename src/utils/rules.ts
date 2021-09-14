import moment, {Moment} from "moment";

export const rules = {
    required: (message: string = 'Обязательное поле!') => ({
        required: true,
        message: message
    }),
    isDataAfter: (message: string) => () => ({
        validator(_: any, value: Moment) {
            if (value){
                if (value.isSameOrAfter(moment())) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error(message));
            } else {
                return Promise.resolve();
            }
        }
    })
}