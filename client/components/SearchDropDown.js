import React from 'react'
import {connect} from 'react-redux'

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

import styles from './styles/SearchFilter'


class SearchDropDown extends React.Component {
  state = {
    expanded: false,
  }

  handleExpandClick = () => {
    this.setState(state => ({expanded: !state.expanded}))
  }

  render() {
    const {classes} = this.props
    const category = this.props.category

    return (
      <div key={category.id}>
        <CardActions className={classes.actions} disableActionSpacing>
          <Typography>{category.name}</Typography>

          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse
          in={this.state.expanded}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <div key={category.id}>
              <form>
                {// add category values
                category.categoryvalues.map(val => {
                  return (
                    <div key={val.id}>
                      <input type="checkbox" id={val.id} value={val.name} />
                      <label htmlFor={val.name}>{val.name}</label>
                    </div>
                  )
                })}
              </form>
            </div>
          </CardContent>
        </Collapse>
      </div>
    )
  }
}

export default connect(null, null)( withStyles(styles)(SearchDropDown))
