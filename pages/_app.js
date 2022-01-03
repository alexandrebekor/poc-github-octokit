import React from 'react'
import Template from '../components/Template'

const App = ({ Component, pageProps }) => {
    return (
        <Template>
            <Component {...pageProps} />
        </Template>
    )
}

export default App