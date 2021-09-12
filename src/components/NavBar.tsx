import React, {FC} from 'react';
import {Menu, Row, Layout, Col} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from '../router'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AuthAC} from "../store/reducers/auth/actionCreators";


const NavBar: FC = () => {
    const {isAuth, user} = useTypedSelector((state) => state.authReducer)
    const router = useHistory()
    const dispatch = useDispatch()
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ? <Col span={4}>
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item key={1}>
                                {user.username}
                            </Menu.Item>
                            <Menu.Item  onClick={() => dispatch(AuthAC.logout())}
                                       key={2}>
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