import {IUser} from "../../../models/IUser";
import {EventActionEnum, setEventsAction, setGuestsAction} from "./types";
import {IEvent} from "../../../models/IEvent";
import {AppDispatchType} from "../../index";
import UserService from "../../../api/UserService";


export const EventAC = {
    setGuests: (guests: IUser[]):setGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload: guests}),
    setEvents: (events: IEvent[]):setEventsAction => ({type: EventActionEnum.SET_EVENTS, payload: events}),
    fetchGuests: () => async (dispatch:AppDispatchType) => {
        try {
            const response = await UserService.getUsers()
            dispatch(EventAC.setGuests(response.data))
        }catch (e) {
            console.log(e)
        }

    }
}