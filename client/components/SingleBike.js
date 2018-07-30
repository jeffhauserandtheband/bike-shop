import React, {Component} from 'react'
import { connect } from 'react-redux';
import {
    fetchOneBike, 
    fetchReview,
    incrementCart
} from '../store'
import { 
    Grid, 
    Paper, 
    Button,
    Typography 
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const style = {
    Paper: {
        padding: 10,
        marginTop:10,
        marginBottom:10
    }
}

class SingleBike extends Component {
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchOneBike(id);
        this.props.fetchReview(id)
    }

    handleClickAddToCart(bikeId) {
        let cartId=0;
        if (this.props.cart.cartId) {
          cartId=this.props.cart.cartId
        }
        this.props.incrementCart(cartId,bikeId)
    
      }

    render() {
        const {name, description, price, inventory} = this.props.singleBike
        const review = this.props.review
        const id = this.props.match.params.id
        if (this.props.singleBike.length === 0 || review === undefined) {
            return (
                <Grid container>
                    Loading..
                </Grid>
            )
        }


        return review.length ? (
            <Grid container>
                <Grid item sm={2} key={this.props.singleBike.id}>         
                    <Paper style={style.Paper}>
                                    
                    <img src={this.props.singleBike.bikeimages[0] && this.props.singleBike.bikeimages[0].imageUrl}/>
                    <label> Bike Name: </label>
                    {name}
                    <label> Description: </label>
                    {description}
                    <label> Price: </label>
                    {price}
                    <label> Inventory: </label>
                    {inventory}
                    <Button onClick={(e) => this.handleClickAddToCart(id)}size="small" color="primary">
                        Add to cart
                    </Button>

                    <Link to={`/bikes/${id}/reviewform`}>
                        <Button> Add Review </Button>
                    </Link>
                    </Paper>
                        {review.map(elem => {
                            return(
                                <Paper key={elem.id} style={style.Paper}>
                                    <label> Rating: </label>
                                        {elem.rating}
                                    <label> Comments: </label>
                                        {elem.comments}
                                </Paper>
                            )
                        })}             
                </Grid>
            </Grid>
        ) : (
            <div>
            <Grid container>
                <Grid item sm={2} key={this.props.singleBike.id}>         
                    <Paper style={style.Paper}>
                                    
                    <img src={this.props.singleBike.bikeimages[0] && this.props.singleBike.bikeimages[0].imageUrl}/>
                    {name}
                    <Button onClick={(e) => this.handleClickAddToCart(id)}size="small" color="primary">
                        Add to cart
                    </Button>

                    <Link to={`/bikes/${id}/reviewform`}>
                        <Button> Add Review </Button>
                    </Link>
                    </Paper>
                </Grid>
            </Grid>

            <Paper>
                <Typography variant="display1" align="center">
                    No past reviews
                </Typography>
            </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
            singleBike: state.bikes.singleBike,
            review: state.review.greview,
            cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOneBike: (id) => {
            dispatch(fetchOneBike(id)) 
        },
        fetchReview: (id) => {
            dispatch(fetchReview(id))
        },
        incrementCart: (cartId,bikeId) => {
            dispatch(incrementCart(cartId,bikeId))}

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBike)