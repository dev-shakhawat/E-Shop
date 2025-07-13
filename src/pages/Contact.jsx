import React from 'react';
import { Link } from 'react-router';


// components
import Container from '../components/common/Container';
import InputField from '../components/customeUI/checkout/information/form/InputField';
import TextAreaField from '../components/customeUI/checkout/information/form/TextAreaField';
import List from '../components/common/List';

// icons
import Call from '../assets/icons/Call.jsx';
import Mail from '../assets/icons/Mail.jsx';
import Location from '../assets/icons/Location.jsx';
import Breadcrumb from '../components/common/Breadcrumb.jsx';

function Contact() {

    const footContact = [
        {link: "tel:+1 (555) 123-4567", icon: <Call style={`absolute top-0 left-0  `}/>, text: "+1 (555) 123-4567"},
        {
            link: "mailto:information@eshop.com",
            icon: <Mail style={`absolute top-0 left-0  `}/>,
            text: "information@eshop.com"
        },
        {
            link: "https://maps.app.goo.gl/ZaayMQo7nqFCxx7q6",
            icon: <Location style={`absolute top-0 left-0  `}/>,
            text: "123 Main Street, Suite 105, Anytown USA"
        },
    ]
    return (
        <Container>
            
            {/* location bannner */}
            <div className="mt-8 rounded-[10px] overflow-hidden    ">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.631884818617!2d-118.23991969731155!3d34.07349723941036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6f954005675%3A0x9e94554f839c09df!2sDodger%20Stadium!5e1!3m2!1sen!2sbd!4v1751602062275!5m2!1sen!2sbd"   allowFullscreen={true}   referrerPolicy="no-referrer-when-downgrade" className='w-full min-h-[600px]   '></iframe>
            </div>


            {/* breadcrumb */}
            <Breadcrumb/>


            
            <div className="lg:flex gap-14  ">

                {/* form site */}
              <div className="flex-2">
                <h2 className="cmnHeadTwo text-primary   ">Contact Us</h2>
                <p className="commonPara text-primary   ">Have any questions for us? Don’t hesitate to contact us.</p>

                {/* contact forms */}
                <form className='2xl:mt-12 xl:mt-10 lg:mt-8 md:mt-6 mt-4  '>

                    <InputField title="Name"  type='text' placeholder={`Amelia Robert Watson`}   />

                    <div className="2xl:mt-8 xl:mt-7 lg:mt-6 md:mt-5 mt-4 grid lg:grid-cols-2 gap-4   ">
                      <InputField title="Phone Number"  type='text' placeholder={`+123 456 7890`} required={false}   />
                      <InputField title="Email Address"  type='text' placeholder={`amelia.watson@eshop.com`}   />
                    </div>

                    <TextAreaField className={`2xl:mt-8 xl:mt-6 lg:mt-5 mt-4  `} title="Message" placeholder={`Type your message here...`}  />

                    <button type="button" className='commonButton 2xl:mt-8 xl:mt-7 lg:mt-6 md:mt-5 sm:mt-4 mt-3  ' >Submit</button>

                </form>
                
              </div>

              
              {/* touch site */}
              <div className="flex-1 mt-5 md:mt-0 bg-[#F4F4F4] 2xl:p-10 xl:p-8 lg:p-6 md:p-5 p-4  h-fit 2xl:rounded-[25px] xl:rounded-[20px] lg:rounded-[15px] rounded-[10px]  ">
                <h3 className="font-poppins font-semibold 2xl:text-[24px] xl:text-xl lg:text-[18px] md:text-base text-sm leading-7.5 text-primary      ">Let’s Keep in Touch!</h3>
                <p className="mt-4 font-montserrat font-normal text-xl leading-7.5 text-[#303030] pb-10    ">We would love to hear from you. Contact us for any inquiries you might have for us.</p>

                <List arr={footContact}
                                  liststyle={`text-primary relative pl-8 cursor-pointer  font-montserrat text-[13px] lg:text-base lg:leading-[24px]  `}
                                  boxstyle={`flex flex-col gap-1.5 lg:gap-3   `}/>


                {/* openning hours */}
                <h5 className="mt-14 font-montserrat font-bold text-xl leading-7.5 text-primary pb-1 border-b-4 border-brand w-fit   ">Opening Hours</h5>
                <ul className='mt-6'>
                    <li className='flex  gap-3 items-center font-montserrat  text-base leading-6 text-[#303030] '   >
                        <p className=" font-bold ">MON to FRI:</p>
                        <p className="font-normal">08:00 AM - 04:00 PM</p>
                    </li>
                    <li className='flex  gap-3 items-center font-montserrat  text-base leading-6 text-[#303030] mt-2 '   >
                        <p className="font-bold  ">SAT to SUN:</p>
                        <p className="font-normal">09:00 AM - 03:00 PM</p>
                    </li>
                </ul>
              </div>

            </div>


            {/* shop now update */}
            <div className=" 2xl:mt-20 xl:mt-16 lg:mt-14 md:mt-12 mt-10 2xl:mb-25 xl:mb-20 lg:mb-16 md:mb-12 mb-5  2xl:py-30 xl:py-25 lg:py-20 md:py-15 py-10 2xl:px-25 xl:px-20 lg:px-15 md:px-10 px-5 bg-[#F4F4F4] 2xl:rounded-[25px] xl:rounded-[20px] lg:rounded-[15px] rounded-[10px]    ">

                <h2 className="commonPara text-primary max-w-[360px]    ">Get Up-to-Date Gadget Technology</h2>

                <p className="font-montserrat font-normal text-xl leading-7.5 text-[#303030]   mt-6 2xl:mb-12 xl:mb-10 lg:mb-8 md:mb-6 mb-4 max-w-[514px]    ">Browse our wide selection of electronics and find the perfect promo for you from newsletter.</p>

                <Link to="/allproduct" className="commonButton    " >Shop Now</Link>

            </div>


            
        </Container>
    );
}

export default Contact;