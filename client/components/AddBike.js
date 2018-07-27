import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import postBike from '../store/bikes'
import styles from './styles/addBike'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class AddBike extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    // form control
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postBike: bikeData => dispatch(postBike(bikeData))
})


export default connect(null, mapDispatchToProps)(AddBike)
