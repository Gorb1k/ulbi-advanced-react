import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface EventFormProps {
    guests: IUser[]
    submit: (event:IEvent) => void
}

const EventForm: FC<EventFormProps> = (props) => {

    const [event, setEvent] = useState<IEvent>({
        date: '',
        guest: '',
        description: '',
        author: ''
    })
    const {user} = useTypedSelector((state) => state.authReducer)

    const selectDate = (date:Moment | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date.toDate())})
        }
    }
    const submitForm = () => {
        props.submit({...event, author: user.username})
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                key={'1'}
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    value={event.description}
                    onChange={(e) => setEvent({...event, description: e.target.value})}
                />
            </Form.Item>
            <Form.Item
                key={'2'}
                label="Дата"
                name="date"
                rules={[rules.required(), rules.isDataAfter('Дата уже прошла!')]}
            >
                <DatePicker
                    onChange={(date) => selectDate(date)}
                />
            </Form.Item>
            <Form.Item
                key={'3'}
                label="Гости"
                name="guest"
                rules={[rules.required()]}
            >
                <Select onChange={(guest:string) => setEvent({...event, guest})}>
                    {props.guests.map((guest) =>
                        <Select.Option  key={guest.username} value={guest.username}>
                            {guest.username}
                        </Select.Option>)}
                </Select>
            </Form.Item>
            <Row justify='end'>
                <Form.Item>
                    <Button type={'primary'} htmlType={'submit'}>
                        Создать
                    </Button>
                </Form.Item>
            </Row>

        </Form>
    );
};

export default EventForm;