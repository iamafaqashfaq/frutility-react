import React,{useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { userLogin } from '../Requests/UserRequestPayload';
import { USERLOGIN } from './../../../store/action/UserAction';
import { useDispatch } from 'react-redux';

const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        UserName: '',
        Password: ''
    })
    const [validate, setValidation] = useState({
        UserName: ['alert','alert-danger','d-none'],
        Password: ['alert','alert-danger','d-none']
    })
    const handleInputChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        if(value !== ''){
            setValidation({...validate, [name]: ['alert','alert-danger','d-none']})
        }
        setUser({...user, [name]: value})
    }
    const handleInputBlur = (e) => {
        const value = e.target.value 
        const name = e.target.name 
        if(value === ''){
            setValidation({...validate, [name]: ['alert','alert-danger','d-block']})
        }
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(user.UserName !== '' && user.Password !== ''){
            const response = userLogin(user)
            response.then(res => {
                if(res.data !== false){
                    localStorage.setItem('userUserName', res.data.userName)
                    localStorage.setItem('userToken',res.data.entoken)
                    dispatch(USERLOGIN())
                    history.push('/')
                }
                else{
                    window.alert('Invalid credentials')
                }
            })
        }
        else{
            window.alert('Fields cannot be empty')
        }
    }
    return (
        <div className="m-5 animate__animated animate__backInLeft">
            <div className="container m-auto w-50">
                <h4 className="bg-dark rounded-pill 
                p-3 m-auto align-content-center 
                text-center text-white w-50">Login</h4>
                <div className="mt-3">
                    <form className="w-50 m-auto">
                        <div className="form-group">
                            <label htmlFor="Username">Username</label>
                            <input type="text" placeholder="Enter Username"
                                className="form-control" 
                                name="UserName"
                                onChange={(e)=>handleInputChange(e)}
                                onBlur={(e)=>handleInputBlur(e)}/>
                            <span className={validate.UserName.join(' ')}>Field Empty</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password">Password</label>
                            <input type="password" placeholder="Enter Password"
                                className="form-control"
                                name="Password"
                                onChange={(e)=>handleInputChange(e)}
                                onBlur={(e)=>handleInputBlur(e)} />
                            <span className={validate.Password.join(' ')}>Field Empty</span>
                        </div>
                        <div className="form-group mt-3">
                            <button className="btn btn-block btn-outline-dark" type="submit"
                            onClick={(e)=>handleFormSubmit(e)}>Login</button>
                        </div>
                    </form>
                </div>
                <NavLink to="/signup" className="text-center d-block">Not a member? SignIn now!</NavLink>
            </div>
        </div>
    )
}

export default Login;
