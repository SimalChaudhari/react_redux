import React from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import routes from './routes';

export default () => {
    return(<>
        <Switch>
            {routes && routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}
                />
                );
            }
            return null;
            })}
            <Redirect from="/admin" exact to="/admin/login" />
        </Switch>
    </>);
}