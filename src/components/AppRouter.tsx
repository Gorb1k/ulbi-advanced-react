import React, {FC} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, pubicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter: FC = () => {

    const {isAuth} = useTypedSelector((state) => state.authReducer)

    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map((route) => {
                   return <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>
                })}
                <Redirect to={RouteNames.EVENT}/>
            </Switch>
            :
            <Switch>
                {pubicRoutes.map((route) => {
                    return <Route key={route.path} {...route}/>
                })}
                <Redirect to={RouteNames.LOGIN}/>
            </Switch>

    );
};

export default AppRouter;