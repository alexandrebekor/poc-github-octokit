import React from 'react'
import Template from '../components/Template'

const App = ({ Component, props }) => {
    return (
        <Template>
            <Component {...props} />
        </Template>
    )
}

module.exports = App