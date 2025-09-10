import axios from "axios";

 
export const handelAddToCart = async (productID ,  dispatch ) => { 

  try{

    await axios.post(`${import.meta.env.VITE_BASE_URL}/cart/addtocart` , {productId: productID} , {withCredentials: true})
    .then((res) => {

      dispatch({
        type: 'toast/notify',
        payload: {
          isShow: true,
          message: res.data.message,
          success: res.data.success,
        },
      });

      setTimeout(() => {
        dispatch({
          type: 'toast/notify',
          payload: {
            isShow: false,
            message: "",
            success: false,
          },
        });
      }, 1500);
 
      
    })
    .catch((error) => { 
      if(error.response.data){
        dispatch({
          type: 'toast/notify',
          payload: {
            isShow: true,
            message: error.response.data.message,
            success: error.response.data.success,
          },
        });

        setTimeout(() => {
          dispatch({
            type: 'toast/notify',
            payload: {
              isShow: false,
              message: "",
              success: false,
            },
          });
        }, 1500);
      }
      
    })


  }catch(error){
    console.log(error); 
  }
   
  };
  