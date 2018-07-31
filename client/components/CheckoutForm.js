import React, {Component} from 'react'
import {connect} from 'react-redux'
import {saveOrder} from '../store'
import PropTypes from 'prop-types'
import{ TextField } from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
const styles = theme => ({
    root: {
      width: 890,
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {
      paddingBottom: 10
    },
    picCell: {
      width: 90,
      height: 90
    },
    flexContainer: {
      flexDirection: 'row'
    },
    header: {
      width: 150
    },
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    darkColor: {
      color: theme.palette.primary.dark
    }
  })

class CheckoutForm extends Component {
    constructor() {
        super();
        this.state = {
            shippingEmail:'',
            shippingName:'',
            shippingAddress:'',
            shippingCity:'',
            shippingState:'',
            shippingZip:''
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        const cartId = this.props.match.params.id
        const {classes} = this.props
        return(
            <div className={classes.container}>
                    <h2> Shipping Information: </h2>
                    <form onSubmit={(evt) => {
                        evt.preventDefault()
                        this.props.handleSubmit(evt,cartId)
                    }}>
                    <TextField
                    label="Email address"
                    name='shippingEmail'
                    value={this.state.shippingEmail}
                    onChange={this.handleChange}
                    onSubmit={this.props.handleSubmit}
                    required={true}
                    rows={1}
                    />
                    <br />
                    <TextField
                    label="Name"
                    name='shippingName'
                    value={this.state.shippingName}
                    onChange={this.handleChange}
                    onSubmit={this.props.handleSubmit}
                    rows={1}
                    />
                    <br />
                    <TextField
                    label="Address"
                    name='shippingAddress'
                    value={this.state.shippingAddress}
                    onChange={this.handleChange}
                    onSubmit={this.props.handleSubmit}
                    rows={1}
                    />
                    <br />
                    <TextField
                    label="City"
                    name='shippingCity'
                    value={this.state.shippingCity}
                    onChange={this.handleChange}
                    onSubmit={this.props.handleSubmit}
                    rows={1}
                    />
                    <br />
                    <TextField
                    label="State"
                    name='shippingState'
                    value={this.state.shippingState}
                    onChange={this.handleChange}
                    onSubmit={this.props.handleSubmit}
                    rows={1}
                    />
                    <br />
                    <TextField
                    label="Zip"
                    name='shippingZip'
                    value={this.state.shippingZip}
                    onChange={this.handleChange}
                    onSubmit={this.props.handleSubmit}
                    rows={1}
                    />
                    <br />
                    <button type='submit'>Place Order</button>
                    </form>
            </div>
        )
    }
}

CheckoutForm.propTypes = {
    classes: PropTypes.object.isRequired
  }

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (evt, cartId) => {
            const shippingEmail = evt.target.shippingEmail.value
            const shippingName = evt.target.shippingName.value
            const shippingAddress = evt.target.shippingAddress.value
            const shippingCity = evt.target.shippingCity.value
            const shippingState = evt.target.shippingState.value
            const shippingZip = evt.target.shippingZip.value
            dispatch(saveOrder(cartId, {shippingEmail,shippingName,shippingAddress,shippingCity,shippingState,shippingZip}))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CheckoutForm))
