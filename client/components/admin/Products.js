import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button
} from '@material-ui/core'
import BikeCard from '../BikeCard'

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    paddingTop: 10
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  pic: {
    width: 300,
    height: 200
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
})
//Buttons need links to add/edit page
const Products = ({bikes, classes}) => (
  <Fragment>
    <Button component={Link} to='/admin/bikes/add' variant="contained" color="secondary">
      Add Product
    </Button>
    
    <div className={classes.root}>
      <Grid container spacing={24}>
        {bikes.map(elem => (
          <Grid key={elem.id} item md>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.container}>
                  <div>
                    <Link to={`/bikes/${elem.id}`}>
                      <img className={classes.pic} src="bike.jpeg" />
                    </Link>
                  </div>
                  <div className={classes.action}>
                    <div>
                      <Typography
                        gutterBottom
                        variant="subheading"
                        component="h3"
                      >
                        <Link to={`/bikes/${elem.id}`}>
                          {elem.name.substring()}
                        </Link>
                      </Typography>
                    </div>
                    <div className={classes.action}>
                      <Typography
                        gutterBottom
                        variant="subheading"
                        component="h3"
                      >
                        {`Price $${elem.price}`}
                      </Typography>
                    </div>
                    <div className={classes.action}>
                      <Typography
                        gutterBottom
                        variant="subheading"
                        component="h3"
                      >
                        Rating
                      </Typography>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardActions className={classes.action}>
                <Button component={Link} to={`/admin/bikes/update/${elem.id}`} size="small" color="secondary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  </Fragment>
)

/**
 * CONTAINER
 */



export default withStyles(styles)(Products)

/**
 * PROP TYPES
 */
Products.propTypes = {
  classes: PropTypes.object.isRequired
}
