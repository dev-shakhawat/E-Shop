
// icons
import { RxMinus } from "react-icons/rx";
import { HiPlus } from "react-icons/hi2";
import Delete from '../../../assets/icons/Delete';
import Share from '../../../assets/icons/Share'; 
import axios from "axios"; 
import getUserData from "../../../helpers/getUserData";
import { userSet } from "../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";


export default function CartItem({cart , getCarts}) { 

    const dispatch = useDispatch(); 
    
    

    async function updateUserCarts(){
          const information = await getUserData() 
          dispatch(userSet(information.data)) 
    }
    const handleQuantityUpdate = async (type) => {  
        try{
             await axios.put(`${import.meta.env.VITE_BASE_URL}/cart/updatecartQuantity` , {cartId : cart._id , quantity : type === 'minus' ? cart.quantity - 1 : cart.quantity + 1 , price : cart.price.currentPrice} , {withCredentials: true}) 

             getCarts() 
             updateUserCarts()

        }catch(err){
            console.log(err);
        }
    }

    const handleDeleteCart = async () => {
        try{
            await axios.delete(`${import.meta.env.VITE_BASE_URL}/cart/deleteCart/ ` , { data: { cartId: cart._id },   withCredentials: true   })
            getCarts()
            updateUserCarts()
        }catch(err){
            console.log(err);
        }
    }

 
    
  return (
    <div className=' p-1 flex group border    border-tertary rounded-[10px] md:rounded-[15px] lg:rounded-[25px] relative overflow-hidden '>

        {/* cart delete/share */}
        <div className=" flex flex-col xl:gap-7 lg:gap-5 md:gap-3 gap-2 absolute top-1/2 -translate-y-[50%]  -right-30  group-hover:lg:right-3 
        group-hover:md:right-2 group-hover:right-1 duration-300 ">
            <div
                onClick={handleDeleteCart}
                className="duration-300   xl:w-[50px] md:w-[40px]  w-8    xl:h-[50px] md:h-[40px]  h-8    bg-white hover:bg-brand group-hover:text-brand group-[.group]:hover:text-white grid place-items-center rounded-full border border-brand cursor-pointer  ">
                <Delete className={`lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]  `} />
            </div>
            <div
                className="duration-300  xl:w-[50px] md:w-[40px] w-8     xl:h-[50px] md:h-[40px] h-8   bg-white hover:bg-brand group-hover:text-brand group-[.group]:hover:text-white grid place-items-center rounded-full border border-brand cursor-pointer  ">
                <Share className={` lg:w-[20px] lg:h-[20px] w-[20px] h-[20px]   `}/>
            </div>
        </div>

        <div className="flex  flex-3 md:flex-1 items-center ">
            {/* product image */}
            <div className=" w-[120px] md:w-[200px] h-35 rounded-[20px] overflow-hidden ">
                <img src={cart?.productID?.thumbnail} alt="thumbnail" className=' w-full h-full object-cover   '/>  
            </div>

            {/* product details */}
            <div className="flex justify-between w-full ml-5  ">
                <div className="">
                    <p className=" font-montserrat font-normal text-sm leading-5 text-primary  ">{cart?.productID?.category}</p>
                    <h3 className=" font-poppins font-semibold 2xl:text-xl xl:text-[18px] lg:text-base   text-sm leading-4 xl:leading-[30px] text-primary 2xl:mt-4 lg:mt-3 md:mt-2 mt-0   group-hover:text-brand group-hover:underline duration-300  ">{cart?.productID?.title}</h3>

                    {/* product price */}
                    <p className="  font-montserrat font-semibold 2xl:text-xl xl:text-[18px] lg:text-base md:text-sm text-xs my-auto md:leading-[30px] text-primary md:hidden ">BDT {cart?.price?.currentPrice}</p>
 

                </div>
            </div> 

        </div>

        <div className=" flex-2 md:flex-1 grid md:grid-cols-3 grid-cols-2   ">
            {/* product price */}
            <p className=" md:inline-block hidden font-montserrat font-semibold 2xl:text-xl xl:text-[18px] lg:text-base md:text-sm text-xs my-auto leading-[30px] text-primary  ">BDT: {cart?.price?.currentPrice}</p>

            {/* quantity button */}
            <div className=" flex items-center    ">
        
                    {/* minus btn */}
                    <button onClick={() => handleQuantityUpdate("minus")} type='button' className='w-[40px] h-[40px] grid place-items-center cursor-pointer  ' ><RxMinus /></button>

                    {/* quantity */}
                    <p className="md:min-w-[40px] min-w-[30px]  md:min-h-[40px] min-h-[30px]  grid place-items-center bg-[#F4F4F4] rounded-full font-montserrat font-bold 2xl:text-base lg:text-base sm:text-sm text-xs leading-[24px] text-primary ">{cart?.quantity}</p>

                    {/* plus btn */}
                    <button onClick={() => handleQuantityUpdate("plus")} type='button' className='w-[40px] h-[40px] grid place-items-center cursor-pointer  ' ><HiPlus  /></button>
            </div>

            {/* total price */}
            <p className="ml-2 md:ml-0 font-montserrat font-semibold 2xl:text-xl xl:text-[18px] lg:text-base md:text-sm text-xs my-auto leading-[30px] text-primary  gap-2 flex items-center "> <span className='hidden md:inline-block'>BDT:</span>
                {cart?.totalPrice}
            </p>

        </div>


    </div>
  )
}
