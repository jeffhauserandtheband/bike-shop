import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Switch
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

const Users = ({users, classes, deleteUser, toggleUser}) => (
  <div className={classes.center}>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>User Type</TableCell>
            <TableCell>Delete User</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => {
            return (
              <TableRow key={user.id}>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  User
                  <Switch
                    checked={user.userType === 'admin'}
                    onClick={event => toggleUser(event, user.userType, user.id)}
                  />Admin
                </TableCell>

                <TableCell>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => deleteUser(user.id)}
                  >
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

export default withStyles(styles)(Users)

Users.propTypes = {
  classes: PropTypes.object.isRequired
}
