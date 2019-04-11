import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class ProductAdd extends Component {
    constructor(props){
        super(props);

        this.state = {
            qty: 1
        }

        this.addToCart = this.addToCart.bind(this);
        this.decrementQty = this.decrementQty.bind(this);
        this.incrementQty = this.incrementQty.bind(this);
    }

    addToCart(){
        const {qty} = this.state;

        axios.get(`/api/addcartitem.php?product_id=${this.props.productId}&quantity=${qty}`).then(resp => {
            this.props.history.push('/cart');
        });
    }

    decrementQty(){
        if(this.state.qty > 1){
            this.setState({
                qty: this.state.qty - 1
            });
        }
    }

    incrementQty(){
        this.setState({
            qty: this.state.qty + 1
        });
    }

    render(){
        return (
            <div className="right-align add-to-cart">
                <span className="qty-container">
                    <button onClick={this.decrementQty} className="btn btn-small btn-floating purple lighten-1">
                        <i className="material-icons">remove</i>
                    </button>
                    <span className="product-qty">{this.state.qty}</span>
                    <button onClick={this.incrementQty} className="btn btn-small btn-floating purple lighten-1">
                        <i className="material-icons">add</i>
                    </button>
                </span>

                <button onClick={this.addToCart} className="btn purple darken-2">
                    <i className="material-icons">add_shopping_cart</i>
                </button>
            </div>
        );
    }
}

export default withRouter(ProductAdd);