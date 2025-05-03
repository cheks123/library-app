asyncHandler = require("express-async-handler")
const bcrypt = require('bcryptjs');


exports.login = asyncHandler(async (req, res, next)=>{
    if(req.method == "POST"){
        const {username, password } = req.body
        const hashed_password = await bcrypt.hash(password, 10)
        console.log(username, password, hashed_password)
        return res.redirect("/catalog")
    }
    res.render("login")
    
  
    
})
