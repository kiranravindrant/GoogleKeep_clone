import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signin from '../components/signin'
import Signup from '../components/signup'
import Keep from '../components/keep'

function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Signin} />
                    <Route path = "/signup" component = {Signup} />
                    <Route path = "/keep" component = {Keep} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Router;
