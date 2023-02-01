import React from 'react'
//import a handler file for the necessary handlers

function Body() {
    return (
        // notes will display a certain number of characters and have an delete button that prompts 'are you sure'
        <div className='row'>
            <div className='col'>
                here will be the individual notes
            </div>
            <div className='col'>
                <button> delete </button>
            </div>
        </div>
        )
}

export default Body