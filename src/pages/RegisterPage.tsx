import { Link } from "react-router-dom"
import { useContext, useState } from 'react';
import { AuthContex } from '../context/auth/AuthContex';
import Swal from 'sweetalert2';


export const RegisterPage = () => {

	const { registerUser } =useContext( AuthContex );

	const [ form, setForm ] = useState<any>({
		email:'',
		name:'',
		password:'',
		rememberMe:false,
	  });

	  const handleRegister = ( {target}:any ) =>{

		const { name,value } = target;

		setForm( (prev:any) =>({
			...prev,
			[ name ]:value
		})  )

	  }
	 
	  
const handleSubimtRegister = async(e:any)=>{
		  e.preventDefault();
          const { email,name, password } = form;

	const isRegister = await registerUser(email, name, password);

	 if( ( typeof isRegister === 'string') ){
	 	Swal.fire('Error', isRegister, 'error');
}
	 else{
		console.log('registrado')
	 }
	}	
const isFullFields = ():boolean =>{

	return ( form.name.length > 1 && form.email.length > 1 && form.password.length > 1 ) ? true : false;

}

  return (
    <form 
	onSubmit={ handleSubimtRegister }
	className="login100-form validate-form flex-sb flex-w"
	>
					<span className="login100-form-title mb-3">
						Chat - Registro
					</span>

					<div className="wrap-input100 validate-input mb-3">
						<input 
						className="input100" 
						type="text" name="name" 
						placeholder="Nombre" 
						value={ form.name}
						onChange={ handleRegister }
						/>
						<span className="focus-input100"></span>
					</div>
<br />
					
					<div className="wrap-input100 validate-input mb-3">
						<input 
						className="input100"
						 type="email" 
						 name="email" 
						 placeholder="Email"
						 value={ form.email}
						 onChange={ handleRegister } />
						<span className="focus-input100"></span>
					</div>
					
					<br />
					<div className="wrap-input100 validate-input mb-3">
						<input 
						className="input100" 
						type="password" 
						name="password" 
						placeholder="Password"
						value={ form.password}
						onChange={ handleRegister }
						/>
						<span className="focus-input100"></span>
					</div>
					<br />
					<div className="row mb-3">
						<div className="col text-right">
							<Link to="/auth/login" className="txt1">
								Ya tienes cuenta?
							</Link>
						</div>
					</div>
<br />
					<div className="container-login100-form-btn m-t-17">
						<button 
						className="login100-form-btn" 
						type="submit"
						disabled={ !isFullFields() }
						>
							Crear cuenta
						</button>
					</div>

				</form>
  )
}
