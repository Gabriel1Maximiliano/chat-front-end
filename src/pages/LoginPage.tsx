import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../auth/AuthContex';
import Swal from 'sweetalert2';

export const LoginPage = () => {

  const { loginUSer } = useContext( AuthContex )
 

  const [ form, setForm ] = useState<any>({
    email:'',
    password:'',
    rememberMe:false,
  });

  useEffect(() => {

    const rememberEmail = localStorage.getItem( 'email' );
    
    if( rememberEmail ){
      setForm({
        ...form,
        rememberMe: true,
        email:rememberEmail
      })
    }

  }, [])
  


  const onChange = ( { target  }: any):void =>{

  setForm( (prev:any) => (
    {
      ...prev,
      [ name ] : value
    }
  

   ) )
    const { name, value } = target;
    
  }

  const handleSubmit = async( e:any ) =>{
 e.preventDefault();
 const { email, password } = form;

 ( form.rememberMe ) 
        ? localStorage.setItem('email', email)
        : localStorage.removeItem( 'email' )

 //TODO llamar al backend
  const isLogin = await loginUSer( email, password )
  

  if( ( typeof isLogin === 'string') ){
    Swal.fire('Error', isLogin, 'error');
}
  else{
   console.log('registrado')
  }
  }

  const isFullFields = ():boolean=>{

    return ( form.email.length > 0 && form.password.length > 0 ) ? true : false;
  }

  const toggleCheck =() =>{
    console.log('me dispare')
    setForm({
      ...form,
      rememberMe: !form.rememberMe
    })
  }
  

  return (
    <form 
    className="login100-form validate-form flex-sb flex-w"
    onSubmit={ handleSubmit }
    >
      <span className="login100-form-title">Chat - Ingreso</span>

      <div className="wrap-input100 validate-input mb-3 mt-2">
        <input
          className="input100 mt-3"
          type="email"
          name="email"
          placeholder="Email"
          value={ form.email }
          onChange = { onChange }
        />
        <span className="focus-input100"></span>
      </div>
      <br />

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          placeholder="Password"
          value={ form.password }
          onChange = { onChange }
        />
        <span className="focus-input100"></span>
      </div>
      <br />
      <div 
      className="row mb-3">
        <div className="col"
        onClick={ ()=>toggleCheck() }
        >
          <input
            className="input-checkbox100"
            id="ckb1"
            type="checkbox"
            name="rememberMe"
            checked={ form.rememberMe }
            readOnly
          />
          <label className="label-checkbox100 mt-3 ">Recordarme</label>
        </div>
        <br />
        <div className="col text-right">
          <Link to="/auth/register" className="txt1">
            Nueva cuenta?
          </Link>
        </div>
      </div>
      <br />
      <div className="container-login100-form-btn m-t-17">
        <button 
        className="login100-form-btn"
        type="submit"
        disabled={ !isFullFields() }
        >Ingresar</button>
      </div>
    </form>
  );
};
