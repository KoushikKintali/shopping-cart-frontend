import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions/cart-actions";
import CancelIcon from "../assets/images/cancel.svg";
import BackIcon from "../assets/images/angle-left.svg";
import styles from "./cart.module.scss";
import { NavLink } from "react-router-dom";

class Cart extends React.Component {
    render() {
        return (
            <div className={styles.cart}>
                {this.props.list.length > 0 ? this.props.list.map(product => (
                    <div className={styles.productCard + " card d-flex"} key={product.productId}>
                        <img className={styles.productImage} src={product.searchImage} alt='shirt'></img>
                        <div className={styles.productInfo}>
                            <div className="d-flex">
                                <div className={styles.productBrandName}>
                                    {product.brand}
                                </div>
                                <div className={styles.removeCartItem} >
                                    <img
                                        src={CancelIcon}
                                        alt={"Remove from Cart"}
                                        role="button"
                                        onClick={() => {
                                            this.props.removeFromCart(product.productId);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={styles.productName} title={product.productName}>
                                {product.productName}
                            </div>
                            <div className={styles.productPrice}>
                                <div>&#x20B9;</div>
                                <div><h2 className='m-0'> {product.mrp} </h2></div>
                            </div>
                        </div>
                    </div>
                )) : <div className={styles.emptyCart}>
                    Your cart is empty
                </div>}
                <div className={styles.backButton}>
                    <NavLink to="/"><img className="card" src={BackIcon} alt="Back to list view" /></NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.cart.list
})

const mapDispatchToProps = {
    removeFromCart: removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);