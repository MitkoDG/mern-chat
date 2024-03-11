export const signup = (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;
        
    } catch (error) {
        
    }
    console.log("signupUser");
};

export const login = (req, res) => {
    res.send("loginUser")
    console.log("loginUser");
};

export const logout = (req, res) => {
    res.send("logoutUser")
    console.log("logoutUser");
};
