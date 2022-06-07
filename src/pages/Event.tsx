import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Layout, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";

const Event: FC = () => {

    const [modal, setModal] = useState<boolean>(false)
    const {fetchGuests, createEvent, fetchEvents} = useActions()
    const {guests, events} = useTypedSelector((state) => state.eventReducer)
    const {user} = useTypedSelector((state) => state.authReducer)
    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    }, [])

    const onSubmit = (event:IEvent) => {
        createEvent(event)
        setModal(false)
    }

    return (
        <Layout>
            <EventCalendar events={events}/>
            <Row justify={"center"}>
                <Button onClick={() => {
                    setModal(true)
                }}>Добавить событие</Button>
            </Row>
            <Modal
                title={'Добавить событие'}
                visible={modal}
                footer={null}
                onCancel={() => {
                    setModal(false)
                }}
            >
                <EventForm
                    guests={guests}
                    submit={onSubmit}
                />
            </Modal>
        </Layout>
    );
};

export default Event;