import React, {FC, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Modal, Row} from "antd";
import EventForm from "../components/EventForm";

const Event: FC = () => {

    const [modal, setModal] = useState<boolean>(false)

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
                <EventForm/>
            </Modal>
        </div>
    );
};

export default Event;