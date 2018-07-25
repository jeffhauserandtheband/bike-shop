import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TextField} from '@material-ui/core'

class ReviewForm extends Component {
    constructor() {
        super();
        this.state = {
            reviewInput: ''
        }
    }

    render() {
        return(
            <form> 
                <label> Leave a Review: </label>
                <TextField fullWidth={true} defaultValue={this.state.reviewInput}/>
            </form>
        )
    }
}

const mapDispatchToProps = () => {
    return {
        
    }
}

export default connect(null, mapDispatchToProps)(ReviewForm)