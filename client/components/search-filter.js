import React from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../store/filter'

class SearchFilter extends React.Component {


  state = {
    categories: []
  }

  async componentDidMount() {
    // console.log('we are in the search component', this.props);
    await this.props.fetchCategories()

    console.log(this.props.categories)

    await this.setState({
      categories: this.props.categories.categories
    })
  }

  render() {
    // console.log('these are the props', this.props);

      let categories = this.state.categories

      console.log('outside if block state', categories)

        return (
          <div>
            <h1>This is a filter bar</h1>
            {
              // add categories
              categories.map(category => {
                console.log('hey Im in the map');
                return (
                  <div key={category.id}>
                    <h3>{category.name}</h3>

                    <form>
                      {
                        // add category values
                        category.categoryvalues.map(val => {
                          return (
                            <div key={val.id}>
                              <input type="checkbox" id={val.id} value={val.name}/>
                              <label htmlFor={val.name}>val.name</label>
                            </div>
                          )
                        })
                      }

                    </form>
                  </div>
                )
              })
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter)
