import React, {Component} from 'react'
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
import {fetchBikes, incrementCart} from '../store'
import {Link} from 'react-router-dom'

import {SearchFilter, SearchFilterStyled} from './index'

const styles = theme => ({
  root: {
   
    display: 'flex',
    paddingTop: 10,
    flexDirection: 'row'
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

class AllBikes extends Component {
  constructor() {
    super()
    this.handleClickAddToCart = this.handleClickAddToCart.bind(this)
  }

  state = {
    filteredBikes: []
  }

  async componentDidMount() {
    this.props.fetchBikes()
    await this.setState({
      filteredBikes: this.props.filteredBikes
    })
    console.log('component did mount props, ', this.props)
    console.log('component did mount state, ', this.state)
  }

  handleClickAddToCart(bikeId) {
    let cartId = 0
    if (this.props.cart.cartId) {
      cartId = this.props.cart.cartId
    }
    this.props.incrementCart(cartId, bikeId)
  }

  render() {
    const {classes, bikes} = this.props

    console.log('inside render - props', this.props.filteredBikes)

    if (this.props.bikes.length === 0) {
      return <Grid container>Loading..</Grid>
    }

    return (
      <div className={classes.root}>
        <SearchFilter />
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
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={e => this.handleClickAddToCart(elem.id)}
                  >
                    ADD TO CART
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

//onClick={(e) => this.handleClickAddToCart(elem.id)}
AllBikes.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBikes: () => {
      dispatch(fetchBikes())
    },
    incrementCart: (cartId, bikeId) => {
      dispatch(incrementCart(cartId, bikeId))
    }
  }
}

const mapStateToProps = state => {
  return {
    bikes: state.bikes.bikes,
    filteredBikes: state.bikes.filteredBikes,
    cart: state.cart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(AllBikes)
)
