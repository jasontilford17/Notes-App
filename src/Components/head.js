import React from 'react'


function Head() {
    return (
        //should have a notes header and a counter for the number of notes you have
        <div className='row'>

            <div className='col-9'>

                <h1>Notes</h1>
                
            </div>

            <div className='col-1'>

                count:

            </div>

            <div className='col-1'>

                <button>+</button>

            </div>

        </div>

        )
}

export default Head