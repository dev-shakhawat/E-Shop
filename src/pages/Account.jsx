import React from "react";
import ProfileNav from "../components/customeUI/profile/ProfileNav";
import TrackingBilling from "../components/customeUI/profile/TrackingBilling";
import { useSelector } from "react-redux";
import AccountDetails from "../components/customeUI/profile/AccountDetails";
import Container from "../components/common/Container";
import AddProduct from "../components/customeUI/manageProduct/addProduct/AddProduct";
import ProductManage from "../components/customeUI/manageProduct/ProductManage";

function Account() {
  const userInfo = useSelector((state) => state.user.user);
  const activetab = useSelector((state) => state.user.profileActiveTab);

  return (
    <div className="pt-16 pb-20 ">
      <Container>
        <div className="flex    ">
          {/* profile image and navs */}
          <div className="w-fit p-10 border border-tertary rounded-[25px] ">
            {/* profile pic */}
            <div className=" w-[250px] h-[250px] rounded-full bg-[#D9D9D9]  ">
              <img
                src="#"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* name */}
            <h2 className=" font-poppins font-semibold text-[26px] leading-[30px] text-primary mt-10 text-center  ">
              {userInfo?.username}
            </h2>
            <p className=" font-montserrat font-normal text-sm leading-5 text-primary mt-2 text-center   ">
              {userInfo?.email}
            </p>

            {/* devider */}
            <hr className="text-tertary my-10 " />

            {/* navs */}
            <ProfileNav />
          </div>

          <div className="flex-1 ml-12 ">
            {/* track order and see biilling address */}
            <TrackingBilling />

            {/* tabs */}
            {activetab == "orders" && <div className="mt-10">Orders</div>}
            {activetab == "Wallet" && <div className="mt-10">Wallet</div>}
            {activetab == "cart" && <div className="mt-10">Cart</div>}
            {activetab == "address" && <div className="mt-10">Address</div>}
            {activetab == "addProduct" && <ProductManage />}
            {activetab == "accountDetails" && <AccountDetails />}
            {activetab == "logout" && <div className="mt-10">Log Out</div>}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Account;
