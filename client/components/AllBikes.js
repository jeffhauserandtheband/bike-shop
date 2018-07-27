import React, {Component} from 'react'
import {Grid, Paper} from '@material-ui/core'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import {
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography
} from '@material-ui/core'
import {connect} from 'react-redux'
import {fetchBikes} from '../store'
import {Link} from 'react-router-dom'
import SearchFilter from './SearchFilter'
import { filterBikes } from '../store/bikes'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    width: 300,
    padding: theme.spacing.unit * 2
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    width: 250,
  }
})

class AllBikes extends Component {
  componentDidMount() {
    this.props.fetchBikes()
  }

  render() {
    const {classes} = this.props

    if (this.props.bikes.length === 0) {
      return <Grid container>Loading..</Grid>
    }

    return (
      <div className={classes.root}>
        <Grid container>
          {this.props.bikes.map(elem => {
            return (
              <Grid spacing={24} key={elem.id}>
                <Card className={classes.card}>
                  <CardMedia
                    component={Link}
                    to={`/bikes/${elem.id}`}
                    className={classes.media}
                    image={elem.bikeimages[0] && elem.bikeimages[0].imageUrl}
                    title={elem.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="subheading" component="h3">
                      <Link to={`/bikes/${elem.id}`}>{elem.name.substring()}</Link>
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}
AllBikes.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBikes: () => {
      dispatch(fetchBikes())
    }
  }
}

const mapStateToProps = state => {
  return {
    bikes: state.bikes.bikes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(AllBikes)
)
