import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Event: FC = () => {

    const [modal, setModal] = useState<boolean>(false)
    const {fetchGuests} = useActions()
    const guests = useTypedSelector((state) => state.eventReducer.guests)
    useEffect(() => {
        fetchGuests()
    },[])

    return (
        <div>
            <EventCalendar event={[]}/>
            <Row justify={"center"}>
                <Button onClick={() => {setModal(true)}}>Добавить событие</Button>
            </Row>
            <Modal
                title={'Добавить событие'}
                visible={modal}
                footer={null}
                onCancel={() => {setModal(false)}}
            >
                <EventForm guests={guests}/>
            </Modal>
        </div>
    );
};

export default Event;