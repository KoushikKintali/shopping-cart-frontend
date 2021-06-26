import React from "react"
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../store/actions/cart-actions";
import styles from './product.module.scss';
import cartIcon from '../../assets/images/shopping-cart-solid.svg'

class ProductItem extends React.Component {

    isCartItem() {
        return this.props.list.findIndex((product) => product.productId === this.props.product.productId) !== -1;
    }

    render() {
        const props = this.props;
        return (
            <div className={styles.productItem}>
                <div className={styles.productCard + " card"}>
                    <img className={styles.productImage} src={props.product.searchImage} alt='shirt'></img>
                    <div className={styles.productInfo}>
                        <div className={styles.productBrandName}>
                            {props.product.brand}
                        </div>
                        <div className={styles.productName} title={props.product.productName}>
                            {props.product.productName}
                        </div>
                        {props.product.sizes && <div className={styles.productSizeInfo}>
                            Sizes:
                            {props.product.sizes.split(',').map((size, index) => {
                                return (
                                    <div className={styles.sizeIcon} key={index}>{size}</div>
                                )
                            })}
                        </div>}
                        <div className={styles.productCardFooter}>
                            <div className='d-flex align-items-baseline'>
                                <div>&#x20B9;</div>
                                <div><h2 className='m-0'> {props.product.mrp} </h2></div>
                            </div>
                            {this.isCartItem()
                                ?
                                <div role='button' className={styles.removeFromCart} onClick={() => props.removeFromCart(props.product.productId)} ><span className='ml-auto'>Remove from Cart</span><img src={cartIcon} alt="Remove from Cart"></img></div>
                                :
                                <div role='button' onClick={() => props.addToCart(props.product)} className={styles.addToCart} ><span className='ml-auto'>Add to Cart</span><img src={cartIcon} alt="Add to Cart"></img></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.cart.list
})

const mapDispatchToProps = {
    addToCart: addToCart,
    removeFromCart: removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);

// Object
// additionalInfo: "Nepped Round Neck T-shirt"
// brand: "Roadster"
// category: "Tshirts"
// colorVariantAvailable: false
// discount: 0
// discountDisplayLabel: ""
// discountLabel: "Flat_Search_Percent"
// discountType: "1024"
// effectiveDiscountAmountAfterTax: 0
// effectiveDiscountPercentageAfterTax: 0
// eorsPicksTag: ""
// futureDiscountStartDate: ""
// futureDiscountedPrice: 0
// gender: "Men"
// images: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// inventoryInfo: (4) [{…}, {…}, {…}, {…}]
// isFastFashion: true
// isPLA: false
// isPersonalised: false
// landingPageUrl: "Tshirts/Roadster/Roadster-Men-Black-Nepped-Round-Neck-T-shirt/2310365/buy"
// listViews: 0
// loyaltyPointsEnabled: false
// mrp: 699
// personalizedCoupon: ""
// personalizedCouponValue: 0
// price: 699
// primaryColour: "Black"
// product: "Roadster Men Black Nepped Round Neck T-shirt"
// productId: 2310365
// productMeta: ""
// productName: "Roadster Men Black Nepped Round Neck T-shirt"
// productVideos: []
// productimagetag: ""
// rating: 4.020438
// ratingCount: 685
// relatedStylesCount: 0
// relatedStylesType: ""
// searchImage: "http://assets.myntassets.com/assets/images/2310365/2018/2/1/11517487630366-Roadster-Men-Black-Solid-Round-Neck-T-shirt-5871517487630224-1.jpg"
// season: "Summer"
// sizes: "S,L,XL"
// systemAttributes: [{…}]
// tdBxGyText: "Or Buy 2 @MRP, get 1 Free*"
// year: "2019"