import React from 'react'
import {connect} from 'react-redux'
import {fetchCategories} from '../store/filter'
import SearchDropDown from './SearchDropDown'
import { filterBikes } from '../store/bikes'

import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import classnames from 'classnames'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'

import styles from './styles/SearchFilter'


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

  handleExpandClick = () => {
    this.setState(state => ({expanded: !state.expanded}))
  }

  render() {
    const {classes} = this.props
    const categories = this.state.categories

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="" className={classes.avatar}>
                F
              </Avatar>
            }
            title="Filter Your Search"
          />
          {// add categories
          categories.map(category => {
            return (
              <SearchDropDown key={category.id} category={category}/>
            )
          })}
          <Button variant="contained" className={classes.button}>
            Filter Search
          </Button>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  filterBikes: () => dispatch(filterBikes()),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(SearchFilter)
)
