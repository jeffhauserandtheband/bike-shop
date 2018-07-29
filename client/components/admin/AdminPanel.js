import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Users from './Users'
import Orders from './Orders'
import Categories from './Categories'
import Products from './Products'
import {fetchUsers} from '../../store'

import {Typography, AppBar, Tabs, Tab, Paper} from '@material-ui/core'
function TabContainer(props) {
  return (
    <Typography component="div" style={{padding: 8 * 3}}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.primary
  }
})

class AdminPage extends Component {
  state = {
    value: 0
  }
  componentDidMount() {
    this.props.getAdminData()
  }

  handleChange = (event, value) => {
    this.setState({value})
  }

  render() {
    const {classes, users} = this.props
    console.log('admin paner', users)
    const {value} = this.state
    return (
      <Fragment>
        <AppBar position="static" className={classes.root}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Products" />
            <Tab label="Categories" />
            <Tab label="Users" />
            <Tab label="Orders" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <Products />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Categories />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <Users users={users} />
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <Orders />
          </TabContainer>
        )}
      </Fragment>
    )
  }
}

AdminPage.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapState = state => {
  return {
    users: state.admin.users
  }
}

const mapDispatch = dispatch => {
  return {
    getAdminData() {
      dispatch(fetchUsers())
    }
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(AdminPage))