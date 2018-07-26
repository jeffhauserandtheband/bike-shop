import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TextField} from '@material-ui/core'
import {postReview} from '../store'

class ReviewForm extends Component {
    constructor() {
        super();
        this.state = {
            reviewInput: ''
        }
    }

    render() {
        return(
            <form onSubmit={this.props.handleSubmit}> 
                <label> Leave a Review: </label>
                <TextField fullWidth={true} defaultValue={this.state.reviewInput}/>
                <button type='submit'> Submit </button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (evt, revInput) => {
            evt.preventDefault()
            dispatch(postReview(revInput))
        }
    }
}

export default connect(null, mapDispatchToProps)(ReviewForm)