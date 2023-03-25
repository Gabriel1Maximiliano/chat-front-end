import { useContext } from 'react';
import { AuthContex } from '../context/auth/AuthContex';


export const SearchBox = () => {

    const { auth,logoutUser } =useContext( AuthContex );

 const handleLogout = ()=>{

    logoutUser();

 }
    const { name } = auth;
  return (
    <>
    
    <div className="headind_srch">
        <div className="recent_heading mt-2">
            <h4>{ name }</h4>
        </div>
        <div className="srch_bar">
            <div className="stylish-input-group">
                <button 
                className="btn text-danger"

                onClick={ handleLogout }
                
                >
                    Salir
                </button>
            </div>
        </div>
    </div>
   
    </>
  )
}
