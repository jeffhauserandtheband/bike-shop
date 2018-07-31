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
        this.props.fetchReview(id);
        
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
        let avgRating=0
        console.log('avg',avgRating)
        if (!this.props.singleBike.id || review === undefined) {
            return (
                <Grid container>
                    Loading..
                </Grid>
            )
        }

        
        if (review.length>0) {
        
        review.map(elem => {
            avgRating += elem.rating
        })
        avgRating = avgRating / review.length
        }


        return (
            <Grid container spacing={24}>
                <Grid item md key={this.props.singleBike.id}>         
                    <Paper style={style.Paper}>          
                    <img src={this.props.singleBike.bikeimages[0] && this.props.singleBike.bikeimages[0].imageUrl}/>

                    <Typography 
                        gutterBottom
                        variant="subheading"
                        component="h3"> 
                        Bike Name: {name}
                    </Typography>

                    <Typography 
                        gutterBottom
                        variant="subheading"
                        component="h3"> 
                        Description: {description}
                    </Typography>

                    <Typography 
                        gutterBottom
                        variant="subheading"
                        component="h3"> 
                        Price: {price}
                    </Typography>

                    <Typography 
                        gutterBottom
                        variant="subheading"
                        component="h3"> 
                        Inventory: {inventory}
                    </Typography>

                    <Typography 
                        gutterBottom
                        variant="subheading"
                        component="h3"> 
                        Average Rating: {avgRating.toFixed(1)}
                    </Typography>

                    <Button onClick={() => this.handleClickAddToCart(id)}size="small" color="primary">
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
                    {review.length === 0 && (
                        <Paper>
                            <Typography variant="display1" align="center">
                                No past reviews
                            </Typography>
                        </Paper> 
                    )}
                                    
                </Grid>
            </Grid>
            
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