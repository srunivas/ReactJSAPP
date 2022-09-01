import Logo from '../NavBarImages/LOGO WHITE 1.png';
import '../NavBar.css';
import { AiOutlineDown } from 'react-icons/ai';
function NavBar()
{
    var listOfNavItems = ["Products","Solutions","Company","Resources","Pricing"]
    return (
        <>
        <div className="Header">
               <img  src={Logo} alt="logo"/>  

               <div className="ListItems">
                    {
                        listOfNavItems.map((e) => {
                            return <div className='Items'>
                                <button className='DropDownButton'>{e}</button>
                                <p style={{ fontSize: 12, marginTop: 7, marginLeft: 4, color:"#7B7B7B"}}>{<AiOutlineDown/>}</p>
                                <div className='DropDownContent'>
                                    <a href='https'>Link 1</a>
                                    <a href='https'>Link 2</a>
                                </div>
                            </div>
                        })
                    }
               </div>   
               
               <div className="listOfButtons">
                    <button className="Login">Login</button>
                    <button className="SignUp">Sign Up</button>
               </div>
                       
        </div>
        </>
    );
}
export default NavBar;