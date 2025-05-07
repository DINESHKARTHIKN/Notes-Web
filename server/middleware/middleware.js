// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';

// const middleware = async (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;

//         if (!authHeader || !authHeader.startsWith('Bearer ')) {
//             return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
//         }

//         const token = authHeader.split(' ')[1];
//         const decoded = jwt.verify(token, "secretkeyofnotesapp");

//         const user = await User.findById(decoded.id);
//         if (!user) {
//             return res.status(401).json({ success: false, message: "User not found" });
//         }

//         req.user = { name: user.name, id: user._id };
//         next();
//     } catch (error) {
//         console.log(error.message);
//         return res.status(500).json({ success: false, message: "Please login" });
//     }
// };

// export default middleware;/

import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const middleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // Check if the Authorization header exists and starts with 'Bearer '
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
        }

        const token = authHeader.split(' ')[1];

        // Verify the JWT token
        const decoded = jwt.verify(token, "secretkeyofnotesapp");

        // Check if the user exists
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        // Attach user information to the request object
        req.user = { name: user.name, id: user._id };
        next();
    } catch (error) {
        // Handle JWT-specific errors
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ success: false, message: "Invalid Token" });
        } 
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: "Token Expired" });
        }

        // For other server errors
        console.log("Server Error:", error.message);
        return res.status(500).json({ success: false, message: "Server Error. Please login again." });
    }
};

export default middleware;
