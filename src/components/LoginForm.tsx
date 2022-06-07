import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";


const LoginForm: FC = () => {

    const {login} = useActions()
    const {error, isLoading} = useTypedSelector((state) => state.authReducer)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submit = () => {
        login(username, password)
    }

    return (
        <Form
            onFinish={submit}
        >
            {error &&
            <div style={{color: 'red'}}>
                {error}
            </div>
            }

            <Form.Item
                key={'1'}
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Введите имя пользователя!')]}
            >
                <Input value={username} onChange={(e) => setUsername(e.target.value)}/>
            </Form.Item>
            <Form.Item key={'2'}
                       label="Пароль"
                       name="password"
                       rules={[rules.required('Введите пароль!')]}
            >
                <Input value={password} type={'password'} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item key={'3'}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
                <Button type="primary" disabled>
                    Регистрация
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;