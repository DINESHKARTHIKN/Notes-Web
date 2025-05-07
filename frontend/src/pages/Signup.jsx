import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Particles from '../Styles/Particles';
import ShinyText from "../Styles/ShinyText.jsx";
import AnimatedContent from '../Styles/AnimatedContent';
import GradientText from '../Styles/GradientText';
import StarBorder from "../Styles/StarBorder.jsx";
import '../css/signup.css';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
            if (response.data.success) {
                navigate('/signin');
            }
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <ShinyText text="SIGN UP" disabled={false} speed={5} className='custom-class-signup' />
            <AnimatedContent
                distance={130}
                direction="vertical"
                reverse={false}
                config={{ tension: 30, friction: 20 }}
                initialOpacity={0.9}
                animateOpacity
                scale={1.1}
                threshold={0.2}
            >
                <div>
                    <form className="signupForm" onSubmit={handleSubmit}>
                        <GradientText
                            colors={["#FF6EC7", "#FFD700", "#7CFC00", "#00FFFF", "#FF6EC7"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="custom-class-welcomeSignup"
                        >
                            Your Notes Begin Here!
                        </GradientText>

                        <div className="signupNameBox">
                            <label className="signupLabelName" htmlFor="name">Name:</label>
                            <input className="signupInputName" type="text" required placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="signupEmailBox">
                            <label className="signupLabelEmail" htmlFor="email">E-mail:</label>
                            <input className="signupInputEmail" type="email" required placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="signupPassBox">
                            <label className="signupLabelPassword" htmlFor="password">Password:</label>
                            <input className="signupInputPassword" type="password" required placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div>
                            <StarBorder as="button" className="custom-class-signupBox" color="magenta" speed="1s">
                                <p className="signupButtonBox" type='submit'>Signup</p>
                            </StarBorder>

                            <p className="signupAlreadyAccount">Already have an account? <Link to='/signin'>Signin</Link></p>
                        </div>
                    </form>
                </div>
            </AnimatedContent>

            <Particles particleColors={['#ffffff', '#ffffff']} particleCount={250} particleSpread={10} speed={0.08} particleBaseSize={100} moveParticlesOnHover={true} alphaParticles={false} disableRotation={false} />
        </>
    );
}

export default Signup; 
