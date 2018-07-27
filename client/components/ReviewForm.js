import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postReview} from '../store'
import{ TextField } from '@material-ui/core'

class ReviewForm extends Component {
    constructor() {
        super();
        this.state = {
            comments: '',
            rating: ''
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return(
            <div>
                    <form onSubmit={this.props.handleSubmit}>
                    <label> Leave a Review: </label>
                    <TextField 
                    name='comments' 
                    value={this.state.comments} 
                    onChange={this.handleChange} 
                    onSubmit={this.props.handleSubmit} 
                    multiline={true}
                    rows={5}
                    />

                    <label> Rating: </label>
                    <input name='rating' value={this.state.rating} onChange={this.handleChange} />
                    <button type='submit'> Submit </button>
                    </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (evt) => {
            evt.preventDefault()
            const comments = evt.target.comments.value
            const rating = evt.target.rating.value
            dispatch(postReview({comments,rating}))
        }
    }
}

export default connect(null, mapDispatchToProps)(ReviewForm)