import React from 'react'
import { Redirect } from 'react-router'

export default function Logout() {
    localStorage.clear()
    return <Redirect to="/login"/>
}
