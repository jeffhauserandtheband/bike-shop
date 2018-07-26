import React from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../store/filter'


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
})

class SearchFilter extends React.Component {


  state = {
    categories: [],
    expanded: false,
  }

  async componentDidMount() {
    // console.log('we are in the search component', this.props);
    await this.props.fetchCategories()

    console.log(this.props.categories)

    await this.setState({
      categories: this.props.categories.categories
    })
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  render() {

    const { classes } = this.props;

      let categories = this.state.categories

      console.log('outside if block state', categories)

        return (
          <div>
            {/* <h1>Filter Your Search</h1> */}
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="" className={classes.avatar}>
                    F
                  </Avatar>
                }
                action={
                  <IconButton>
                    {/* <MoreVertIcon /> */}
                  </IconButton>
                }
                title="Filter Your Search"
              />
                { // add categories
                  categories.map(category => {
                    return (
                      <div key={category.id}>


                          <CardActions className={classes.actions} disableActionSpacing>
                            <Typography>
                              {category.name}
                            </Typography>

                            <IconButton
                              className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                              })}
                              onClick={this.handleExpandClick}
                              aria-expanded={this.state.expanded}
                              aria-label="Show more"
                            >
                              <ExpandMoreIcon />
                            </IconButton>
                          </CardActions>
                          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                              <div key={category.id}>
                                <form>
                                  {
                                    // add category values
                                    category.categoryvalues.map(val => {
                                      return (
                                        <div key={val.id}>
                                          <input type="checkbox" id={val.id} value={val.name}/>
                                          <label htmlFor={val.name}>{val.name}</label>
                                        </div>
                                      )
                                    })
                                  }
                                </form>
                              </div>
                            </CardContent>
                          </Collapse>

                      </div>
                    )}
                )}
              </Card>
          </div>
        )
  }
}



const mapStateToProps = state => ({
  categories: state.categories,
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchFilter))
