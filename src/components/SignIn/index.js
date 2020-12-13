import React, { Component } from 'react';
import './styles.scss';
import Button from './../forms/Button';
import { signInWithGoogle, auth } from './../../firebase/utils';

import FormInput from "./../forms/FormInput";
import Buttonm from "./../forms/Button";

const initialState = {
    email: '',
    password: '',
    errors: []
}


class SignIn extends Component {
    constructor (props) {
        super (props);
        this.state = {
            ...initialState
        };

    this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        const { name, value} = e.target;
        this.setState({
            [name]: value
        });
    } 

    handleSubmit = async e =>{
        e.preventDefault();
        const { email, password, errors } = this.state;

        try{

            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                ...initialState
            });

        } catch(err){
            console.log(err);
            const error = [err.message]
            this.setState({
                errors: error
            });
            return;
        }
    }

    render(){
        const { email, password, errors } = this.state;
        return(
            <div className = "signin">
                <div className = "wrap">
                    <h2>
                        Login
                    </h2> 

                    <div className = "errorWrap">
                        {errors.length > 0 &&(
                            <ul>
                                {errors.map((err, index) => {
                                    return (
                                        <li key = {index}>
                                            {err}
                                        </li>
                                    )
                                })}
                            </ul>
                        )}
                    </div>

                    <div classnmae = "formWrap">
                        <form onSubmit = { this.handleSubmit }>

                            <FormInput
                                type = "email"
                                name = "email"
                                value = {email}
                                placeholder = "Email"
                                handleChange = {this.handleChange}
                            ></FormInput>
                            <FormInput
                                type = "password"
                                name = "password"
                                value = {password}
                                placeholder = "Password"
                                handleChange = {this.handleChange}
                            ></FormInput>

                            <Button type = "submit">
                                Login
                            </Button>

                            <div className = "socialSignin">
                                <div className = "row">
                                    <Button onClick={signInWithGoogle}>
                                        Sign in with Google
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;