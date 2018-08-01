import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postCategoryKey} from '../../store'

class CategoryForm extends Component {
    constructor() {
        super();
        this.state = {
            name:''
        }
    }

    handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value
        })
      }

    render() {
        return(
            <form onSubmit={this.props.handleSubmit}>
                <label>Add Category Key: </label>
                <input 
                name='name' 
                type='text' 
                value={this.state.name}
                onChange={this.handleChange}
                />
                <button type='submit'> Submit </button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (evt) => {
            evt.preventDefault()
            const name = evt.target.name.value
            dispatch(postCategoryKey({name}))
        }
    }
}

export default connect(null,mapDispatchToProps)(CategoryForm)