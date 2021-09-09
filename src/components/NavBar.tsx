import React, {FC} from 'react';
import {Menu, Row, Layout} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from '../router'



const NavBar:FC = () => {
    const router = useHistory()
    return (
        <Layout.Header>
            <Row justify="end">
                <Menu theme='dark' mode='horizontal' selectable={false}>
                    <Menu.Item onClick={() => router.push(RouteNames.LOGIN)}
                        key={1}>
                        Login
                    </Menu.Item>
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default NavBar;