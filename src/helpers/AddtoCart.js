
export const handelAddToCart = (product, dispatch) => {
    let cart = [];
  
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
  
      const isAlreadyInCart = cart.some(item => item.id === product.id);
  
      if (isAlreadyInCart) {
        dispatch({
          type: 'notification/notify',
          payload: {
            success: false,
            message: 'Product already added to cart',
          },
        });
      } else {
        cart.push({...product , totalPrice: product.price * product.minimumOrderQuantity , totalquantity: product.minimumOrderQuantity});
        localStorage.setItem('cart', JSON.stringify(cart));
        dispatch({
          type: 'notification/notify',
          payload: {
            success: true,
            message: 'Product added to cart successfully',
          },
        });
        dispatch({
          type: 'product/addToCart',
          payload: cart,
        });
        setTimeout(() => {
          dispatch({
            type: 'product/checkoutPrice',
          });
        } , 100)
      }
    } else {
      cart.push({...product , totalPrice: product.price * product.minimumOrderQuantity , totalquantity: product.minimumOrderQuantity});
      localStorage.setItem('cart', JSON.stringify(cart));
      dispatch({
        type: 'notification/notify',
        payload: {
          success: true,
          message: 'Product added to cart successfully',
        },
      });
      dispatch({
        type: 'product/addToCart',
        payload: cart,
      });
      setTimeout(() => {
        dispatch({
          type: 'product/checkoutPrice',
        });
      } , 100)
    }
  
    setTimeout(() => {
      dispatch({
        type: 'notification/notify',
        payload: null,
      });
    }, 2000);
  };
  