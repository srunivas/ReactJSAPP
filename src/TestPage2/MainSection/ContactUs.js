import './ContactUs.css';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import ContactUsImage from '../../MainSectionImages/image 42.png';
import Image1 from '../../MainSectionImages/image 12.png';
import Image2 from '../../MainSectionImages/image 14.png';
import Image3 from '../../MainSectionImages/image 16.png';
import Image4 from '../../MainSectionImages/image 20.png';
import Image5 from '../../MainSectionImages/image 21.png';
import Image6 from '../../MainSectionImages/image 22.png';

import { AiOutlineArrowRight } from 'react-icons/ai';
function ContactUs()
{
    var listOfItems = ["Contact Us","Watch Demo","Chat With Us"];



    var listOfCountryItemsDetails = [
        {"Location":"Chennai", "image": Image1, "Address":"No.1/1, Srinivasa Pillai Street, West Mambalam , Chennai,600001."},
        { "Location": "Bangalore", "image": Image2, "Address": "No.1/1, Srinivasa Pillai Street, West Mambalam , Chennai,600001." },
        { "Location": "Andhra Pradesh", "image": Image3, "Address": "No.1/1, Srinivasa Pillai Street, West Mambalam , Chennai,600001." },
        { "Location": "Pune", "image": Image4, "Address": "No.1/1, Srinivasa Pillai Street, West Mambalam , Chennai,600001." },
        { "Location": "Mumbai", "image": Image5, "Address": "No.1/1, Srinivasa Pillai Street, West Mambalam , Chennai,600001." },
        { "Location": "Telangana", "image": Image6, "Address": "No.1/1, Srinivasa Pillai Street, West Mambalam , Chennai,600001." }
    ]

    return (
       <>
            <div className="ContactUs">
                <img src={ContactUsImage} alt="contactUsImage">
                </img>

                <h1>Contact Us</h1>
                <h3>If you are having any questions about ZUQO, please contact us. We look forward to hearing from you. </h3>
            </div>
            
<div className='Chat'>
                <h2><BsFillChatLeftTextFill/></h2>
            </div>
            

            <div className='MainSectionItems'>
            {
                listOfItems.map((e)=>{
                    return <div className='listOfBox'>
                        <h2>{e}</h2>
                        <h4>Fill out these easy form and a sales representative will reach out via email or phone</h4>
                        <div className='specialistIcon'>
                            <p>Contact a specialist</p>
                            <AiOutlineArrowRight />
                        </div>
                    </div>
                })
            }
            </div>

            <div className='OurOfficeCountry'>
                   <p className='h7'>Our Offices over country</p>
                  <div className='CountryList'>
                    {listOfCountryItemsDetails.map((e)=>{
                        return <div className='BoxItem'>
                            <img src={e.image} alt="CountryImage"></img>
                            <div className='Address'>
                                <h4>{e.Location}</h4>
                                <p>No.1/1, Srinivasa Pillai Street, West Mambalam , Chennai,600001.</p>
                                <div className='GetDirections'>
                                    <h6>Get directions</h6>
                                    <h5><AiOutlineArrowRight/></h5>
                                </div>
                            </div>
                        </div>
                    })}
                  </div>
            </div>
       </>
    )

}

export default ContactUs;
