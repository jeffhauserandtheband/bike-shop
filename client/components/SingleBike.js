import React, {Component} from 'react'
import { connect } from 'react-redux';
import {fetchOneBike} from '../store'
import { Grid, Paper } from '@material-ui/core'
// import { Link } from 'react-router-dom'

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
    }

    render() {
        const {name} = this.props.singleBike

        if (this.props.singleBike.length === 0) {
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

                    </Paper>            
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
            singleBike: state.bikes.singleBike
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOneBike: (id) => {
            dispatch(fetchOneBike(id)) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBike)