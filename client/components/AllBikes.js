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
import {fetchBikes,incrementCart} from '../store'
import {Link} from 'react-router-dom'

import {SearchFilter} from './index'

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    paddingTop: 10,
    margin: '30px 0 0 0',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  pic: {
    width: 300,
    height: 200,
  },
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
    alignItems: 'center',
  },
  allProductsWrapper: {
    maxWidth: '80%',
    height: '85vh',
    overflowY: 'scroll',
    overflowX: 'visible',
  },
  filterWrapper: {
    position: 'fixed',
    maxHeight: '85vh'
  }
})

class AllBikes extends Component {
  constructor() {
    super()
    this.handleClickAddToCart = this.handleClickAddToCart.bind(this)
  }

  state = {
    filteredBikes: [],
  }

  async componentDidMount() {
    this.props.fetchBikes()
    await this.setState({
      filteredBikes: this.props.filteredBikes
    })
  }

  handleClickAddToCart(bikeId) {
    let cartId=0;
    if (this.props.cart.cartId) {
      cartId=this.props.cart.cartId
    }
    this.props.incrementCart(cartId,bikeId)

  }

  render() {
    const {classes, bikes, filteredBikes} = this.props

    if (!this.props.filteredBikes) {
      return <Grid container>Loading..</Grid>
    }

    // if (this.props.filteredBikes.length === 0) {
    //   return <Grid container></Grid>
    // }

    return (

        <div className={classes.root}>

          <SearchFilter className={classes.filterWrapper}/ >
          <div className={classes.allProductsWrapper}>
          <Grid container spacing={24}>
          {filteredBikes.map(elem => {
            // get image url or use default image imageUrl
            let imageUrl = ''
            if (elem.bikeimages.length > 0) imageUrl = elem.bikeimages[0].imageUrl
            else imageUrl = 'bike.jpeg'
            return (
            <Grid key={elem.id} item md>
              <Card className={classes.card}>
                <CardContent>
                  <div className={classes.container}>
                    <div>
                      <Link to={`/bikes/${elem.id}`}>
                        <img
                          className={classes.pic}
                          src={imageUrl} />
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
                  <Button size="small" variant="contained" color="primary" onClick={(e) => this.handleClickAddToCart(elem.id)}>
                    ADD TO CART
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )})}
        </Grid>
        </div>
      </div>
    )
  }
}

{/* //onClick={(e) => this.handleClickAddToCart(elem.id)} */}
AllBikes.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBikes: () => {
      dispatch(fetchBikes())},
    incrementCart: (cartId,bikeId) => {
      dispatch(incrementCart(cartId,bikeId))}
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
