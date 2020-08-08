import React,{useState} from 'react'
import { Modal } from 'react-bootstrap'
import { changePassword } from '../Requests/UserRequestPayload'
import { useToasts } from 'react-toast-notifications';

const ChangePassword = (props) => {
    const {addToast} = useToasts()
    const [password, setPassword] = useState({
        oldpassword: null,
        newpassword: null,
        confirmpassword: null
    })
    const [validate, setValidation] = useState(["alert","alert-danger","d-none"])
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name 
        if(name === "confirmpassword"){
            if(value !== password.newpassword){
                setValidation(["alert","alert-danger","d-block"])
                setPassword({...password,[name]:value})
            }
            else{
                setValidation(["alert","alert-danger","d-none"])
                setPassword({...password,[name]:value})
            }
        }
        else{
            setPassword({...password, [name]: value})
        }
    }
    const handleSubmit = () => {
        if(password.oldpassword !== null && password.newpassword !== null
            && password.confirmpassword !== null){
            const response = changePassword(password)
            response.then(res => {
                if(res.data){
                    addToast("Password Changed Successfully",{
                        appearance: 'success',
                        autoDismiss: true
                    })
                    props.hide()
                }
                else{
                    addToast("Could not change password",{
                        appearance: 'error',
                        autoDismiss: true
                    })
                    props.hide()
                }
            })
        }
    }
    return (
        <Modal show={props.show} onHide={() => props.hide()}>
            <Modal.Header>
                Change Password
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label htmlFor="OldPassword">Current Password</label>
                    <input type="password" className="form-control" name="oldpassword"
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="NewPassword">New Password</label>
                    <input type="password" className="form-control" name="newpassword"
                    onChange={(e)=>handleChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" name="confirmpassword"
                    onChange={(e)=>handleChange(e)}/>
                    <span className={validate.join(" ")}>Password mismatch!</span>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary font-weight-bolder mr-2" onClick={()=>props.hide()}>
                    Exit
                </button>
                <button className="btn btn-dark font-weight-bolder" onClick={()=>handleSubmit()}>
                    Change Password
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ChangePassword;
