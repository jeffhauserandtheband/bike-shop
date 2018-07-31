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
import {fetchBikes,incrementCart,fetchCategories} from '../store'
import {Link} from 'react-router-dom'

import {SearchFilter} from './index'

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    paddingTop: 10,
    margin: '30px auto 0 auto',
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
    margin: '0 auto'
    // overflowY: 'scroll',
    // overflowX: 'visible',
  },
  filterWrapper: {
    // position: 'fixed',
    // maxHeight: '85vh'
  },
  brandName: {
    color: 'grey',
    fontSize: '12px',
  }
})

class AllBikes extends Component {
  constructor() {
    super()
    this.handleClickAddToCart = this.handleClickAddToCart.bind(this)
  }

  state = {
    filteredBikes: [],
    brands: [],
  }

  async componentDidMount() {
    await this.props.fetchBikes()
    await this.props.fetchCategories()
    // get the brand names -- this implementation is very poor, but all there is time for currently
    let tempBrands = []
    this.props.categories.categories.forEach(category => {
      if (category.name === 'brand') {
        category.categoryvalues.forEach(val => {
          tempBrands.push(val.name)
        })
        return
      }
    })
    await this.setState({
      filteredBikes: this.props.filteredBikes,
      brands: tempBrands,
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

          <SearchFilter / >
          <div className={classes.allProductsWrapper}>
          <Grid container spacing={24}>
          {filteredBikes.map(elem => {
            // get image url or use default image imageUrl
            let imageUrl = ''
            if (elem.bikeimages.length > 0) imageUrl = elem.bikeimages[0].imageUrl
            else imageUrl = 'bike.jpeg'
            // get the brand for each bike -- needs to eventualy come from the api call
            let brandName = ''
            elem.categoryvalues.forEach(category => {
              if (this.state.brands.includes(category.name)) {
                brandName = category.name
                return
              }
            })
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
                          component="h4"
                          className={classes.brandName}
                        >
                          {brandName}
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
                        {/* Rating not currently availble */}
                        {/* <Typography
                          gutterBottom
                          variant="subheading"
                          component="h3"
                        >
                          Rating
                        </Typography> */}
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
      dispatch(fetchBikes())
    },
    incrementCart: (cartId,bikeId) => {
      dispatch(incrementCart(cartId,bikeId))
    },
    fetchCategories: () => dispatch(fetchCategories())
  }
}

const mapStateToProps = state => {
  return {
    bikes: state.bikes.bikes,
    filteredBikes: state.bikes.filteredBikes,
    cart: state.cart,
    categories: state.categories,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(AllBikes)
)
