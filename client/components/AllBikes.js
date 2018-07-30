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
import {SearchBar} from './index'

const style = {
    Paper: {
        padding: 10,
        marginTop:10,
        marginBottom:10
    }
}
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
    console.log('component did mount props, ', this.props)
    console.log('component did mount state, ', this.state)
  }

  handleClickAddToCart(bikeId) {
    let cartId=0;
    if (this.props.cart.cartId) {
      cartId=this.props.cart.cartId
    }
    this.props.incrementCart(cartId,bikeId)

  }

  render() {
    const {classes} = this.props

    console.log('inside render - props', this.props.filteredBikes);

    if (this.props.bikes.length === 0) {
      return <Grid container>Loading..</Grid>
    }

    return (
      <div className={classes.root}>
        <SearchFilter />
        <Grid container>
          {this.props.filteredBikes.map(elem => {
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
                    <Button onClick={(e) => this.handleClickAddToCart(elem.id)}size="small" color="primary">
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
