import React, {FC} from 'react';
import {Menu, Row, Layout, Col} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from '../router'
import {useTypedSelector} from "../hooks/useTypedSelector";


const NavBar: FC = () => {
    const {isAuth} = useTypedSelector((state) => state.authReducer)
    const router = useHistory()
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ? <Col span={4}>
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item>
                                Igor
                            </Menu.Item>
                            <Menu.Item onClick={() => console.log('Exit')}
                                       key={1}>
                                Exit
                            </Menu.Item>
                        </Menu>
                    </Col>
                    : <Col span={2}>
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)}
                                       key={1}>
                                Login
                            </Menu.Item>
                        </Menu>
                    </Col>
                }
        </Row>
</Layout.Header>
)
    ;
};

export default NavBar;