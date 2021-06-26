import React from "react";
import ProductItem from "./product-item";
import { connect } from "react-redux";
import { getProducts, setScrollValue } from "../../store/actions/product-actions";
import styles from './product.module.scss';

let scrollVal = 0;

class ProductList extends React.Component {
    componentDidMount() {
        if (this.props.list.length === 0) {
            this.props.getProducts(0);
        }
        const container = document.querySelector('#product-container');
        if (container) {
            container.scrollTo(0, this.props.scrollVal);
        }
    }
    componentWillUnmount() {
        const container = document.querySelector('#product-container');
        if (container) {
            // scrollVal = container.scrollTop;
            this.props.setScrollValue(container.scrollTop);
        }
    }
    handleScroll = (ev) => {
        const scrollReachedBottom = ev.target.scrollHeight - ev.target.clientHeight - ev.target.scrollTop < 100;
        if (!this.props.loading && this.props.list.length < this.props.totalCount && scrollReachedBottom) {
            this.props.getProducts(this.props.list.length);
        }
    }
    render() {
        return (
            <>
                <div id="product-container" className={styles.productListContainer} onScroll={this.handleScroll}>
                    {this.props.list.map((product, index) => {
                        return (
                            <ProductItem key={index} product={product}></ProductItem>
                        )
                    })}
                </div>
                {
                    this.props.loading && <div className="loader">Loading...</div>
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    list: state.products.list,
    totalCount: state.products.totalCount,
    loading: state.products.loading,
    scrollVal: state.products.scrollVal
})

const mapDispatchToProps = {
    getProducts: getProducts,
    setScrollValue: setScrollValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);