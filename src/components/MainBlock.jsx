import React from 'react'
import Header from './Header'

function MainBlock() {
    return (
        <div className="container border border-1 mt-5 rounded" style={{backgroundColor: "#fafafa", minHeight: "600px"}}>
            <Header></Header>
        </div>
    )
}

export default MainBlock
