import React, {Component} from 'react'
import { connect } from 'react-redux';
import {fetchOneBike, fetchReview} from '../store'
import { Grid, Paper, Button } from '@material-ui/core'
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

    render() {
        const {name} = this.props.singleBike
        const review = this.props.review
        console.log(review)
        const id = this.props.match.params.id
        if (this.props.singleBike.length === 0 || review === undefined) {
            return (
                <Grid container>
                    Loading..
                </Grid>
            )
        }

        return(
            <Grid container>
                <Grid item sm={2} key={this.props.singleBike.id}>         
                    <Paper style={style.Paper}>
                                    
                    <img src={this.props.singleBike.bikeimages[0] && this.props.singleBike.bikeimages[0].imageUrl}/>
                    {name}
                    <Button>Add to cart</Button>

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
        )
    }
}

const mapStateToProps = (state) => {
    return {
            singleBike: state.bikes.singleBike,
            review: state.review.greview
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOneBike: (id) => {
            dispatch(fetchOneBike(id)) 
        },
        fetchReview: (id) => {
            dispatch(fetchReview(id))
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBike)