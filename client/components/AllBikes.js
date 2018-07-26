import React, {Component} from 'react'
import {Grid, Paper} from '@material-ui/core'
import { connect } from 'react-redux';
import {fetchBikes} from '../store'
import {Link} from 'react-router-dom'

import {SearchFilter} from './index'

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
                    Loading..
                </Grid>
            )
        }

        return(
          <div>
            <SearchFilter />
            <Grid container>
              {this.props.bikes.map(elem => {
                console.log('this is an elem', elem);
                return (
                  <Grid item sm={2} key={elem.id}>
                    <Link to={`/bikes/${elem.id}`}>
                      <Paper style={style.Paper}>

                        <img src={elem.bikeimages[0] && elem.bikeimages[0].imageUrl}/>
                        <h3>{elem.name}</h3>
                        {/* <h5>{elem.brand}</h5> */}

                      </Paper>
                    </Link>
                  </Grid>
                )
              })}
            </Grid>
          </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchBikes: () => dispatch(fetchBikes())
    }
}

const mapStateToProps = (state) => {
    return {
        bikes: state.bikes.bikes
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBikes)
