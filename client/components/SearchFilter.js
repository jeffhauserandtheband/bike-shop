import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchCategories} from '../store/filter'
import {filter} from '../store'
import {withStyles} from '@material-ui/core/styles'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Button,
  Table,
  TableBody
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = theme => ({
 
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  container: {
   width: 200,
  },
  details: {
    height: 250,
    overflowX: 'auto'
  },
  checkbox: {
    display:'flex',
    alignItems: 'space-around'
  }
})

class SearchFilter extends React.Component {
  state = {
    categories: [],
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
    let categories = this.state.categories
    const {classes} = this.props
    return (
      <div className={classes.container}>
        <Typography variant="title" gutterBottom>
          Filter Your Search
        </Typography>
        {// add categories
        categories.map(category => {
          return (
            <div key={category.id}>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    {category.name}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                  <div key={category.id}>
                    <form onChange={this.handleCheck}>
                      {// add category values
                      category.categoryvalues.map(val => {
                        return (
                          <div key={val.id} className={classes.checkbox} >
                            <input
                              type="checkbox"
                              name={val.id}
                              value={val.name}
                            />
                            <label htmlFor={val.name}>{val.name}</label>
                          </div>
                        )
                      })}
                    </form>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => ({
  categories: state.categories
})

const mapDispatch = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  filter: categoryVal => dispatch(filter(categoryVal))
})

export default connect(mapState, mapDispatch)(withStyles(styles)(SearchFilter))
