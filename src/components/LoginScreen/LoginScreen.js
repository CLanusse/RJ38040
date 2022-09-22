import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"
import { useForm } from "../../hooks/useForm"

const LoginScreen = () => {

    const {login, user} = useContext(LoginContext)
    const { values, handleInputChange } = useForm({
        email: '',
        pass: ''
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }

    return (
        <div style={{backgroundColor: 'bisque'}}>
            <form onSubmit={handleSubmit} className="container py-5">
                <input 
                    name="email"
                    type={'email'}
                    className='form-control my-2'
                    value={values.email}
                    onChange={handleInputChange}
                />
                <input 
                    name="pass"
                    type={'password'}
                    className='form-control my-2'
                    value={values.pass}
                    onChange={handleInputChange}
                />
                {user.error && <small>{user.error}</small>}
                {/* {user.error ? <small>{user.error}</small> : null} */}

                <button className="btn btn-primary" type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default LoginScreen