import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';
import '../../assets/styles/components/coomponents/Checkout.scss';

const Checkout = (props) => {
  const { cart } = props;
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>There is no order</h2>}
        {cart.map((item, index) => (
          <div className="Checkout-item" key={index}>
            <div className="Checkout-element"> 
              <div className="Checkout-element_title"><h4>{item.product.title}</h4></div>
              <div className="Checkout-element_container"><span>$ {item.product.price}</span></div>
              <div className="Checkout-element_container"><span>x {item.amount}</span></div>
              <div className="Checkout-element_container"><span>$ {item.product.price * item.amount}</span></div>
              <i id="trash" className="fas fa-trash-alt" onClick={() => props.removeFromCart(item.idItemCart)} />
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>$ {`${cart.reduce(
            (accumulate, item) =>
            Math.ceil(accumulate + item.product.price * item.amount * 100), 0) / 100}`}</h4>
          <button>Buy order</button>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
