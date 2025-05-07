// import React, {createContext,useContext, useEffect, useState} from 'react';
// import axios from 'axios';

// const authContext = createContext();

// const ContextProvider = ({children})=>{
//     const [user, setUser] = useState(null);
//     const signin = (user)=>{
//         setUser(user)
//     }
//     const handleSignout=()=>{
//         localStorage.removeItem('token')
//         setUser(null)
//     }
//     useEffect(() => {
//         const verifyUser = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 if (!token) {
//                     console.log("No token found");
//                     setUser(null);
//                     return;
//                 }
    
//                 const res = await axios.get('http://localhost:5000/api/auth/verify', {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
    
//                 if (res.data.success) {
//                     setUser(res.data.user);
//                 } else {
//                     setUser(null);
//                 }
//             } catch (error) {
//                 console.log("Verification error:", error.response?.data || error.message);
//                 setUser(null);
//             }
//         };
//         verifyUser();
//     }, []);
    
//     return(
//         <authContext.Provider value={{user,signin,handleSignout }}>
//             {children}
//         </authContext.Provider>
//     );
// };
// export const useAuth = ()=>useContext(authContext)
// export default ContextProvider;
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const authContext = createContext();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [notes, setNotes] = useState([]); // Add notes state here

    const signin = (user) => {
        setUser(user);
    };

    const handleSignout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setNotes([]); // Clear notes on signout
    };

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.log("No token found");
                    setUser(null);
                    return;
                }

                const res = await axios.get('http://localhost:5000/api/auth/verify', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (res.data.success) {
                    setUser(res.data.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.log("Verification error:", error.response?.data || error.message);
                setUser(null);
            }
        };
        verifyUser();
    }, []);

    return (
        <authContext.Provider value={{ user, signin, handleSignout, notes, setNotes }}>
            {children}
        </authContext.Provider>
    );
};

export const useAuth = () => useContext(authContext);
export default ContextProvider;
