import React from 'react'

const Memo = React.memo(() => {

    console.log("Me rendericé")

    return (
        <div>
            <h4>Soy un memo</h4>
        </div>
    )
})

export default Memo