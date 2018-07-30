import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import {CardContent, Typography, Grid} from '@material-ui/core'

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },

})
const BikeCard = ({bike, classes}) => (
 <div>
  <CardContent key={bike.id} >
    <div className={classes.container}>
      <div>
        <Link to={`/bikes/${bike.id}`}>
          <img className={classes.pic} src="bike.jpeg" />
        </Link>
      </div>
      <div className={classes.action}>
        <div>
          <Typography gutterBottom variant="subheading" component="h3">
            <Link to={`/bikes/${bike.id}`}>{bike.name.substring()}</Link>
          </Typography>
        </div>
        <div className={classes.action}>
          <Typography gutterBottom variant="subheading" component="h3">
            {`Price $${bike.price}`}
          </Typography>
        </div>
        <div className={classes.action}>
          <Typography gutterBottom variant="subheading" component="h3">
            Rating
          </Typography>
        </div>
      </div>
    </div>
  </CardContent>
  </div>

)
//{elem.bikeimages[0] && elem.bikeimages[0].imageUrl}
export default withStyles(styles)(BikeCard)

/**
 * PROP TYPES
 */
BikeCard.propTypes = {
  classes: PropTypes.object.isRequired
}
