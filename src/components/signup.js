import React, { useCallback} from 'react'
import '../assets/css/style.css'
import app from '../config/fire'
import { withRouter } from 'react-router'
const SignUp = ({history}) => {
    const handleSignup=useCallback(async event=>{
        event.preventDefault()
        const {email,password,username}=event.target.elements;
        try{
            await app.auth().createUserWithEmailAndPassword(email.value,password.value);
            history.push('/')
        }catch(error){
            alert(error)
        }
    },[history])


    return (
            <div className="row h-100 justify-content-center align-items-center" style={{width:"100%"}}>
                <div className="col-10 col-md-5 col-lg-6 "style={{width:"35%"}}>
                    <form className="form-example" onSubmit={handleSignup}>
                        <div className="form-group">
                            <label for="username">Username:</label>
                            <input type="text" class="form-control username" id="username" placeholder="Username..." name="username" />
                        </div>
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control email" id="email" placeholder="Email..." name="email" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password:</label>
                            <input type="password" class="form-control password" id="password" placeholder="Password..." name="password" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-customized">SignUp</button>
                    </form>
                </div>
                <div style={{width:"65%"}} className="col-md-7"></div>
            </div>  
    )
}

export default withRouter(SignUp);