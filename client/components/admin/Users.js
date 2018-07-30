import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core'

const styles = theme => ({
  root: {
    width: 800,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  }
})

class Users extends Component {
  state = {}
  render() {
    const {users, classes, deleteUser} = this.props
    return (
      <div className={classes.center}>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>User Type</TableCell>
                <TableCell>Last Seen</TableCell>
                <TableCell>Delete User</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => {
                return (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      {user.email}
                    </TableCell>
                    <TableCell>{user.userType}</TableCell>
                    <TableCell>Last seen</TableCell>
                    <TableCell>
                      <Button onClick={() => deleteUser(user.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Users)

Users.propTypes = {
  classes: PropTypes.object.isRequired
}
