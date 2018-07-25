import React, {Component} from 'react'
import {Grid, Paper} from '@material-ui/core'
import { connect } from 'react-redux';
import {fetchBikes} from '../store'

const carArray= [{"id":1,"first_name":"Ram 2500"},
{"id":2,"first_name":"HHR"},
{"id":3,"first_name":"Element"},
{"id":4,"first_name":"LaCrosse"},
{"id":5,"first_name":"Grand Caravan"},
{"id":6,"first_name":"Veracruz"},
{"id":7,"first_name":"Taurus"},
{"id":8,"first_name":"Touareg"},
{"id":9,"first_name":"Bronco"},
{"id":10,"first_name":"F-Series"}]

const style = {
    Paper: {
        padding: 10,
        marginTop:10,
        marginBottom:10
    }
}

 class AllBikes extends Component {
    componentDidMount() {
        this.props.fetchBikes()
    }

    render() {
        
        if (this.props.bikes.length === 0) {
            return (
                <Grid container>
                    There are no bikes yet 
                </Grid>
            )
        }
        console.log('poo',this.props.bikes[0].bikeimages[0].imageUrl)
        return(
            <Grid container>
            {this.props.bikes.map(elem => {
                    return (
                            <Grid item sm={2} key={elem.id}>
                                <Paper style={style.Paper}>
                                    
                                    <img src={elem.bikeimages[0] && elem.bikeimages[0].imageUrl}/>
                                    {elem.name}
                                </Paper>
                            </Grid>
                    )
                }
            )}
            </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {fetchBikes: () => {
        dispatch(fetchBikes())
    }}
}

const mapStateToProps = (state) => {
    return {
        bikes: state.bikes.bikes
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBikes)