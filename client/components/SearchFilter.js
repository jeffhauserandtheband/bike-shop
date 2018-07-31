import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {withStyles} from '@material-ui/core/styles'

import { fetchCategories } from '../store/filter'
import { filter } from '../store'

const styles = theme => ({
  root: {
    // height: '85vh'
  },
  title: {
    fontSize: '20px',
    color: 'lightgrey'
  }
})


class SearchFilter extends React.Component {
  state = {
    categories: [],
    expanded: false,
  }

  async componentDidMount() {
    await this.props.fetchCategories()
    await this.setState({
      categories: this.props.categories.categories
    })
  }

  handleCheck = event => {
    this.props.filter(event.target.name)
  }

  render() {
    const {classes} = this.props

      let categories = this.state.categories

        return (
          <div className={classes.root}>
            <h1 className={classes.title}>Filter Your Search</h1>
                { // add categories
                  categories.map(category => {
                    return (
                      <div key={category.id}>

                              <div key={category.id}>
                                <form onChange={this.handleCheck}>
                                  {
                                    // add category values
                                    category.categoryvalues.map(val => {
                                      return (
                                        <div key={val.id}>
                                          <input type="checkbox" name={val.id} value={val.name} />
                                          <label htmlFor={val.name}>{val.name}</label>
                                        </div>
                                      )
                                    })
                                  }
                                </form>
                              </div>
                      </div>
                    )}
                )}
          </div>
        )
  }
}

SearchFilter.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  categories: state.categories,
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  filter: categoryVal => dispatch(filter(categoryVal))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchFilter))
