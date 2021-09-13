import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";

interface EventFormProps {
    guests: IUser[]
}

const EventForm: FC<EventFormProps> = (props) => {

    const [event, setEvent] = useState<IEvent>({
        date: '',
        guest: '',
        description: '',
        author: ''
    })

    return (
        <Form>
            <Form.Item
                key={'1'}
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                key={'2'}
                label="Дата"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker/>
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