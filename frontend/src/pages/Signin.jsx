// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { useAuth } from "../context/ContextProvider";
// import Particles from '../Styles/Particles';
// import '../css/signin.css';
// import AnimatedContent from '../Styles/AnimatedContent'
// import StarBorder from "../Styles/StarBorder.jsx"
// import ShinyText from "../Styles/ShinyText.jsx";
// import GradientText from '../Styles/GradientText'
// function Signin() {
//     const [email, setemail] = useState("");
//     const [password, setpassword] = useState("");
//     const navigate = useNavigate();
//     const { signin } = useAuth();

//     async function handlesubmit(e) {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:5000/api/auth/signin", { email, password });
//             if (response.data.success) {
//                 signin(response.data.user);
//                 localStorage.setItem("token", response.data.token);
//                 navigate('/');
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
        
//         <>
//         <ShinyText text="SIGN IN" disabled={false} speed={5} className='custom-class-signin' />

        

//             <AnimatedContent
//                 distance={130}
//                  direction="vertical"
//                 reverse={true}
//                 config={{ tension: 30, friction: 20 }}
//                 initialOpacity={0.9}
//                 animateOpacity
//                 scale={1.1}
//                  threshold={0.2}
//                 >
//     <div>
                
//             <form className="signinForm" onSubmit={handlesubmit}>

//             <GradientText
//                     colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
//                     animationSpeed={3}
//                      showBorder={false}
//                      className="custom-class-Welcomeback"
//                         >
//                     Welcome Back!
//                 </GradientText>

               
//                 <div className="signinemailbox">
//                     <label className="signinlabelemail" htmlFor="email">E-mail: </label>
//                     <input className="signininputemail" type="email" required placeholder="Enter your email" onChange={(e) => setemail(e.target.value)} />
//                 </div>
//                 <div className="signinpassbox">
//                     <label className="signinlabelpassword" htmlFor="password">Password: </label>
//                     <input className="signininputpassword" type="password" required placeholder="Enter your Password" onChange={(e) => setpassword(e.target.value)} />
//                 </div>
//                 <div>
//                     <StarBorder

//                          as="button"
//                          className="custom-class-signinbox"
//                          color="cyan"
//                          speed="1s"
//                     >
//                         <p className="signinbuttonbox" type='submit'>Signin</p>
//                     </StarBorder>
  
                    
//                     <p className="signindonthaveaccount">New User? Click here! <Link to='/signup'>Signup</Link></p>
//                 </div>
//             </form>
//         </div>
//                 </AnimatedContent>

//             <Particles particleColors={['#ffffff', '#ffffff']} particleCount={250} particleSpread={10} speed={0.08} particleBaseSize={100} moveParticlesOnHover={true} alphaParticles={false} disableRotation={false} />
            
            
//         </>
//     );
// }

// export default Signin;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../context/ContextProvider";
import Particles from '../Styles/Particles';
import '../css/signin.css';
import AnimatedContent from '../Styles/AnimatedContent'
import StarBorder from "../Styles/StarBorder.jsx"
import ShinyText from "../Styles/ShinyText.jsx";
import GradientText from '../Styles/GradientText'
function Signin() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const { signin } = useAuth();

    async function handlesubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/signin", { email, password });
            if (response.data.success) {
                signin(response.data.user);
                localStorage.setItem("token", response.data.token);
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        
        <>
        <ShinyText text="SIGN IN" disabled={false} speed={5} className='custom-class-signin' />

        

            <AnimatedContent
                distance={100}
                 direction="vertical"
                reverse={false}
                config={{ tension: 30, friction: 20 }}
                initialOpacity={0.9}
                animateOpacity
                scale={1.1}
                 threshold={0.9}
                >
    <div>
                
            <form className="signinForm" onSubmit={handlesubmit}>

            <GradientText
                    colors={["#FF6EC7", "#FFD700", "#7CFC00", "#00FFFF", "#FF6EC7"]}
                    animationSpeed={3}
                     showBorder={false}
                     className="custom-class-Welcomeback"
                        >
                    Welcome Back!
                </GradientText>

               
                <div className="signinemailbox">
                    <label className="signinlabelemail" htmlFor="email">E-mail: </label>
                    <input className="signininputemail" type="email" required placeholder="Enter your email" onChange={(e) => setemail(e.target.value)} />
                </div>
                <div className="signinpassbox">
                    <label className="signinlabelpassword" htmlFor="password">Password: </label>
                    <input className="signininputpassword" type="password" required placeholder="Enter your Password" onChange={(e) => setpassword(e.target.value)} />
                </div>
                <div>
                    <StarBorder

                         as="button"
                         className="custom-class-signinbox"
                         color="cyan"
                         speed="1s"
                    >
                        <p className="signinbuttonbox" type='submit'>Signin</p>
                    </StarBorder>
  
                    
                    <p className="signindonthaveaccount">New User? Click here! <Link to='/signup'>Signup</Link></p>
                </div>
            </form>
        </div>
                </AnimatedContent>

            <Particles particleColors={['#ffffff', '#ffffff']} particleCount={250} particleSpread={10} speed={0.08} particleBaseSize={100} moveParticlesOnHover={true} alphaParticles={false} disableRotation={false} />
            
            
        </>
    );
}

export default Signin;


