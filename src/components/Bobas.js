import React from 'react'
import {connect} from 'react-redux'
import {deleteBoba} from '../actions/deleteBoba'

const Bobas = (props) => {

const handleDelete = (boba) => {
    props.deleteBoba(boba.id, boba.account_id)
}

    return (
        <div>
            {props.bobas && props.bobas.map(boba =>
                <li key={boba.id}>{boba.name} - ${boba.amount} - {boba.description} <button onClick={() => handleDelete(boba)}>Delete</button></li>
                )}
        </div>
    )
}

export default connect(null, {deleteBoba})(Bobas)