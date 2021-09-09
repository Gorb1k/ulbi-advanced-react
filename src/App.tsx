import React, {FC} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";

const App:FC = () => {
    return (
        <Layout>
            <NavBar/>
            <Content>
                <AppRouter/>
            </Content>
        </Layout>
    );
}

export default App;
