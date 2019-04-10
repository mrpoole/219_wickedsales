import React, { Component } from 'react';
import axios from 'axios';
import ProductCarousel from './product_carousel';
import { formatMoney } from '../../helpers';
import MiscDetails from './misc_details';
import ProductAdd from './product_add';

class ProductDetails extends Component {
    state = {
        details: null
    }

    async componentDidMount() {
        const { params } = this.props.match;
        const { params } = this.props.match;
        const resp = await axios.get(`/api/getproductdetails.php?productID=${params.product_id}`);

        if (resp.data.success) {
            this.setState({
                details: resp.data.productInfo
            });
        } else {
            this.setState({
                details: false
            });
        }
    }

    render() {
        const { details } = this.state;

        if (details === null) {
            return <h1>Loading...</h1>
        } else if (!details) {
            return <h1 className="center">NO PRODUCT FOUND</h1>
        }

        const { description = "No description available", name, images, price, miscDetails } = details;

        return (
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <div className="row">
                    <ProductCarousel images={images} />
                    <div className="col s12 m4">
                        <div className="right-align product-price">{formatMoney(price)}</div>

                        <ProductAdd productId={params.product_id}/>

                        <p>{description}</p>
                        <MiscDetails details={miscDetails} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;