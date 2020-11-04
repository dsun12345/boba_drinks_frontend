import React from 'react'

const Bobas = (props) => {

    return (
        <div>
            {props.bobas && props.bobas.map(boba =>
                <li key={boba.id}>{boba.name} - ${boba.amount} - {boba.description}</li>
                )}
        </div>
    )
}

export default Bobas