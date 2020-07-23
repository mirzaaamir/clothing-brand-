import React from 'react';

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
 import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
constructor(props){
    super(props);
    this.state = {
        email:'',
        password:''
    }
}
handleSubmit = event=> {
event.preventDefault();
this.setState({email: '', password: ''})
}

handleChange = event =>{
    const {name,value} = event.target;
    this.setState({[name]:value})
}

render() {
    return (
        <div className="sign-in">
             <h1> I already have an account</h1>
         <span> Sign In with your Email and Password</span>
         <form onSubmit={this.handleSubmit}>
             <FormInput
              name="email"
               type="email"
                value={this.state.email} 
                required 
                label="Email"
                handleChange={this.handleChange}/>
             
             <FormInput
              name="password" 
              type="password" 
              value={this.state.password} 
              required 
              label="Password"
              handleChange={this.handleChange}/>
             <div className="buttons">
             <CustomButton type="submit">Submit </CustomButton>
             <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
             </div>
             
         </form>
        </div>
        
    );
}
}

export default SignIn;