import React from 'react'
import { Redirect, Route } from 'react-router'

export default function Protected({ component: Component, ...props }) {
    return(
        <Route
        {...props}
        render={(props) => (
            localStorage.getItem("login") ?
                <Component {...props} />
                :
                <Redirect to="/login" />
        )}
    />
    )
}
