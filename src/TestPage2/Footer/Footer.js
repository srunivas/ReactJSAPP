import './Footer.css';
import Logo from './Blue 2.png';
import Image1 from './image 7.png';
import Image2 from './image 8.png';
import Image3 from './image 9.png';
import Image4 from './image 10.png';
import Image5 from './Polygon 2.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
function Footer()
{

    var listOfProfiles = [Image1,Image2,Image3,Image4,Image5];
    var listOfSupport = [
        ["HelpCenter","Talk to support", "Update"],
        ["Account information", "Support docs", "Security"],
        ["About", "System status", "Beta test"],
        ["Contact us", "Covid responde", "Pricing product"],
    ]

    return (
        <>
            <div className='Footer'>
            <div className='LeftSide'>
                  <div className='LeftTop'>
                    <h1>People are saying About ZUQO</h1>
                        <h2>Everything you need to accept to payment and grow your money of manage anywhere on planet</h2>
                        <h2>I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍</h2>
                        <h2>_Ashish dhawan</h2>
                        <div className="ProfileImage">
                        {
                            listOfProfiles.map((e,index)=>{
                                return index!==4?<img className='circle' src={e} alt="Profile"></img>:
                                <div className='IconCircle'>
                                        <img src={e} alt="Profile" style={{ width: 15, height: 15}}></img>
                                </div>
                            })
                        }
                        </div>

                    <div className='bottom'>
                            <img className="BottomImage" src={Logo} alt="Logo" style={{ width: 250, height: 75 }}></img>
                            <h6>Get started now try our product</h6>
                            <input className="LeftInput" placeholder="Enter your email here"></input>
                            <div className="send">
                                 <AiOutlineArrowRight className='Icon' />
                            </div>

                    </div>

                  </div>
            </div>
            <div className='RightSide'>
                   <div className='RightTop'>
                    <img src={Logo} alt="Logo" style={{width:250,height:80,marginTop:30}}></img>
                    <h2>Get Started</h2>
                    <div className='RegisterDetails'>
                         <h4>Email</h4>
                            <input placeholder="Enter your email" className="Register"></input>
                         <h4>Message</h4>
                            <input placeholder="what are you say ?" className="Register" style={{height:80,
                            paddingBottom:20}}></input>
                         <button className="button">Request Demo</button>
                         <text>Start Free Trial</text>
                    </div>
                   </div>
                   <div className='RightBottom'>
                    <div className='Support'>
                        <h1>Support</h1>
                        <h1>Help and Solution</h1>
                        <h1>Product</h1>
                    </div>
                    {
                        listOfSupport.map((e)=>{
                            return <div className='Support2'>
                                <h1>{e[0]}</h1>
                                <h1>{e[1]}</h1>
                                <h1>{e[2]}</h1>
                            </div>
                        })
                    }
                   </div>
                   <div className='TermsAndConditions'>
                          <h4>Terms and conditions</h4>
                       
                          <h4>Privacy Policy</h4>
                   </div>  
            </div>
            </div>
        </>
    )
}

export default Footer;