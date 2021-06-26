import React from "react";
import { NavLink } from "react-router-dom";
import styles from './header.module.scss';
import cartIcon from '../../assets/images/shopping-cart-solid.svg'
import { connect } from "react-redux";


class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <NavLink to="/"><div className={styles.title}>Frieght Tiger</div></NavLink>
                <div className="ml-auto">
                    <NavLink to="/cart">
                        <img src={cartIcon} alt="cart"></img>
                        <span className={styles.cartCount + (this.props.list.length > 0 ? '' : ' invisible')}>{this.props.list.length}</span>
                    </NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.cart.list
})

export default connect(mapStateToProps, {})(Header);