import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";
import "../css/Navbar.css"; // Import the CSS file
import RotatingText from "../Styles/RotatingText";
import SplitText from "../Styles/Split";
import ShinyText from "../Styles/ShinyText.jsx";

function Navbar({ setQuery }) {
    const { user, handleSignout } = useAuth();

    return (
        <nav className="navbar">
            <div className="navbar-brand">
            <ShinyText text="SIGN IN" disabled={false} speed={5} className='custom-class-Notes' />
                <RotatingText texts={["Create", "Update", "Delete!"]} />
            </div>
            <input
                type="text"
                placeholder="Search notes..."
                className="navbar-search"
                onChange={(e) => setQuery(e.target.value)}
            />
            <div className="navbar-links">
                {!user ? (
                    <>
                        <Link to="/signin" className="navbar-link1">
                            Signin
                        </Link>
                        <Link to="/signup" className="navbar-link2">
                            Signup
                        </Link>
                    </>
                ) : (
                    <>
                     
                     <SplitText
                        text={`Welcome! ${user.name}`}
                         className="textk"
                          delay={150}
                          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                         animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                         easing="easeOutCubic"
                         threshold={0.2}
                         rootMargin="-50px"
                    />

                        <button onClick={handleSignout} className="navbar-signout">
                            Signout
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
