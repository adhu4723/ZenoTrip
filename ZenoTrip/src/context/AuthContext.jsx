import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()



export const Authprovider = ({ children }) => {

    const [isAuth, setisAuth] = useState(false)
    const [loading, setloading] = useState(false)
    const [email,setemail]=useState('')
    const navigate=useNavigate()

    const login = async (formdata) => {
        console.log({ formdata });
        setloading(true)

        try {

            const res = await axios.post('https://authserver-production.up.railway.app/api/auth/login', formdata)
            console.log(res);

            setisAuth(true)

        } catch (error) {
            console.log(error);
            alert(error.response.data.message)

        } finally {
            setloading(false)
        }

    }


    const register = async (formdata) => {
        setloading(true)
        try {
            const res = await axios.post('https://authserver-production.up.railway.app/api/auth/signup', formdata)
            console.log('register', res.data);
            alert(res.data.message)
            setisAuth(true)



        } catch (error) {
            console.log(error);
            alert(error.response.data.message)

        } finally {
            setloading(false)
        }
    }

    const handleresetpass = async (email) => {
  setloading(true);
  setemail(email)
  try {
    const res = await axios.post('https://authserver-production.up.railway.app/api/auth/forgot-password', { email });
    console.log(res);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false, error: error.response?.data?.message || 'Something went wrong' };
  } finally {
    setloading(false);
  }
};



    const handlechangepass = async (newPassword, token) => {
  setloading(true);
  try {
    const response = await axios.post(`https://authserver-production.up.railway.app/api/auth/reset-password/${token}`, { newPassword });
    console.log('Password reset successful:', response.data);
    navigate('/')
    return { success: true };
  } catch (error) {
    console.error('Password reset error:', error);
    return { success: false, error: error.response?.data?.message || 'Something went wrong' };
  } finally {
    setloading(false);
  }
};


    const logout = () => {
        setisAuth(false)
    }

    console.log(isAuth);

    return (
        <AuthContext.Provider value={{ login, isAuth, handleresetpass, logout, loading, register, handlechangepass,email }}>{children}</AuthContext.Provider>
    )
}

