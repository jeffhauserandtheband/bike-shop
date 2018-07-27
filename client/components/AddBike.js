import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import postBike from '../store/bikes'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
})


class AddBike extends React.Component {
  state = {
    name: '',
  }

  handleChange = name => event => {
    // form control
    // this.setState({
    //   [event.target.name]: event.target.value
    // })
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const { classes } = this.props;
    console.log('I am rendering dammmit!');
    return (
      <div>
        <h1>Add a bike</h1>
        <form className={classes.container} noValidate autoComplete="off">
        {/* <form  noValidate autoComplete="off"> */}
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  postBike: bikeData => dispatch(postBike(bikeData))
})

AddBike.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default connect(null, mapDispatchToProps)( withStyles(styles)(AddBike) )
