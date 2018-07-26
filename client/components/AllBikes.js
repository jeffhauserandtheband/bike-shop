import React, {Component} from 'react'
import {Grid, Paper} from '@material-ui/core'
import {connect} from 'react-redux'
import {fetchBikes} from '../store'
import {Link} from 'react-router-dom'
import SearchFilter from './SearchFilter'

const style = {
  Paper: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  }
}

class AllBikes extends Component {

  state = {

  }

  async componentDidMount() {
    await this.props.fetchBikes()
  }

  render() {
    if (this.props.bikes.length === 0) {
      return <Grid container>Loading..</Grid>
    }

    return (
      <Grid container>
        <SearchFilter />
        {this.props.bikes.map(elem => {
          console.log('here is a single bike', elem);
          return (
            <Grid item sm={2} key={elem.id}>
              <Link to={`/bikes/${elem.id}`}>
                <Paper style={style.Paper}>
                  <img
                    src={elem.bikeimages[0] && elem.bikeimages[0].imageUrl}
                  />
                  {elem.name}
                </Paper>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBikes: () => {
      dispatch(fetchBikes())
    },
    // fetch a filtered list of bikes?
  }
}

const mapStateToProps = state => {
  return {
    bikes: state.bikes.bikes,
    // add filtered bikes array here
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBikes)
