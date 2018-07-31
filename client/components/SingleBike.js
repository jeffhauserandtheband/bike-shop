import React, {Component} from 'react'
import { connect } from 'react-redux';
import {
    fetchOneBike,
    fetchReview,
    incrementCart,
    postReview
} from '../store'
import {
    Grid,
    Paper,
    Button,
    Typography,
    TextField,
    FormControlLabel,
    RadioGroup,
    FormLabel,
    FormControl,
    Radio,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const style = {
    Paper: {
        padding: 10,
        marginTop:10,
        marginBottom:10
    }
}

const styles = theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing.unit * 3,
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
  });

class SingleBike extends Component {
    constructor() {
        super();
        this.state = {
            comments: '',
            value:''
        }
    }

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

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
        this.setState({ value:evt.target.value })
    }



    render() {
        const {name, description, price, inventory} = this.props.singleBike
        const review = this.props.review
        const id = this.props.match.params.id
        const { classes } = this.props;
        let avgRating=0
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
            <div>
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
                    </Paper>
                </Grid>
            </Grid>

                <div>
                <form onSubmit={(evt) => {
                    evt.preventDefault()
                    this.setState({comments:'', value: ''})
                    this.props.handleSubmit(evt,id)
                }}>
                <Typography
                    gutterBottom
                    variant="subheading"
                    component="h3">
                    LEAVE A REVIEW:
                </Typography>
                <TextField
                name='comments'
                value={this.state.comments}
                onChange={this.handleChange}
                onSubmit={this.props.handleSubmit}
                multiline={true}
                rows={5}
                />

                <div className={classes.root}>
                    <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Rating</FormLabel>
                    <RadioGroup
                        row
                        aria-label="Gender"
                        name="rating"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4" />
                        <FormControlLabel value="5" control={<Radio />} label="5" />
                        <Button type='submit'> Submit </Button>
                    </RadioGroup>
                    </FormControl>
                </div>

                </form>
                </div>
            <Grid container spacing={24}>
                <Grid item md key={this.props.singleBike.id}>
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
            dispatch(incrementCart(cartId,bikeId))
        },
        handleSubmit: (evt, bikeId) => {
            const comments = evt.target.comments.value
            const rating = evt.target.rating.value
            dispatch(postReview({comments,rating,bikeId}, bikeId))
        }
    }
}

SingleBike.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SingleBike))
