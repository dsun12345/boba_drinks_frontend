import React from 'react'
import BobaInput from '../components/BobaInput'
import Bobas from '../components/Bobas'



class BobasContainer extends React.Component {
    render () {
        return (
            <div>
                <BobaInput account={this.props.account}/>
                <Bobas bobas={this.props.account && this.props.account.bobas} />
            </div>
        )
    }
}

export default BobasContainer