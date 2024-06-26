import axios from "axios";
import { useState,useEffect,useContext,createContext } from "react";

const AuthContext = createContext();

  const AuthProvider =({children}) =>{
    const [auth, setAuth] = useState({
        user:null,
        token:'',
    });

    ///default axios set token in header 
    axios.defaults.headers.common['Authorization'] = auth?.token;

    
    useEffect(()=>{
        const data = localStorage.getItem("auth");
        if(data){
            const parserData = JSON.parse(data);
               setAuth({
                ...auth,
                user:parserData.user,
                token:parserData.token,
               })
        }
        //eslint-disable-next-line
    },[]);
    return (
          <AuthContext.Provider value={[auth, setAuth]}>
            {children}
          </AuthContext.Provider>
    )
  };


///custom hook

const useAuth = () => useContext(AuthContext);



export{useAuth, AuthProvider};







