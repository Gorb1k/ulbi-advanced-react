import React, {FC} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, pubicRoutes} from "../router";

const AppRouter: FC = () => {

    const auth = true

    return (
        auth
            ?
            <Switch>
                {privateRoutes.map((route) => {
                   return <Route path={route.path} render={() => route.component} exact={route.exact}/>
                })}
            </Switch>
            :
            <Switch>
                {pubicRoutes.map((route) => {
                    return <Route {...route}/>
                })}
            </Switch>

    );
};

export default AppRouter;