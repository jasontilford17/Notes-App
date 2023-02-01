import React from "react"
import ReacDom from "react-dom"
import Head from './Components/head.js'
import Body from './Components/body.js'

const App = () => {
    return (
        <>
            < div >

                <Head />

            </div >

            <div>

                <Body />

            </div>
        </>
    )

}

ReacDom.render(<App />, document.getElementById("root"))