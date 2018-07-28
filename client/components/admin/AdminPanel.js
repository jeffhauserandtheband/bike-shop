import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Users from './Users'
import Orders from './Orders'
import Categories from './Categories'
import Prodcuts from './Products'

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

  handleChange = (event, value) => {
    this.setState({value})
  }

  render() {
    const {classes} = this.props
    const {value} = this.state

    return (
      <Fragment>
        <AppBar position="static" className={classes.root}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab color="primary" label="Products" />
            <Tab label="Categories" />
            <Tab label="Users" />
            <Tab label="Orders" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <Prodcuts />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Categories />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <Users />
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

export default withStyles(styles)(AdminPage)
