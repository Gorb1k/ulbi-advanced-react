import React, {FC} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, pubicRoutes, RouteNames} from "../router";

const AppRouter: FC = () => {

    const auth = true

    return (
        auth
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