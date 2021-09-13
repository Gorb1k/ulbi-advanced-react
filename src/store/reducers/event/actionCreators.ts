import {IUser} from "../../../models/IUser";
import {EventActionEnum} from "./types";
import {IEvent} from "../../../models/IEvent";
import {AppDispatchType} from "../../index";
import axios from "axios";


export const EventAC = {
    setGuests: (guests: IUser[]) => ({type: EventActionEnum.SET_GUESTS, payload: guests}),
    setEvents: (events: IEvent[]) => ({type: EventActionEnum.SET_EVENTS, payload: events}),
    fetchGuests: () => async (dispatch:AppDispatchType) => {
        try {
            const response = await axios.get<IUser[]>('./users.json')
            EventAC.setGuests(response.data)
        }catch (e) {
            console.log(e)
        }

    }
}