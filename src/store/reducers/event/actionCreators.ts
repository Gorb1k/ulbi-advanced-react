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

    },
    createEvent: (event:IEvent) => async (dispatch:AppDispatchType) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[];
            json.push(event)
            dispatch(EventAC.setEvents(json))
            localStorage.setItem('events', JSON.stringify(json))
        }catch (e) {
            console.log(e)
        }
    },
    fetchEvents: (username:string) => async (dispatch:AppDispatchType) => {
        const events = localStorage.getItem('events') || '[]'
        const json = JSON.parse(events) as IEvent[]
        const currentUserEvents = json.filter((event) => event.author === username || event.guest === username)
        dispatch(EventAC.setEvents(currentUserEvents))
    }
}