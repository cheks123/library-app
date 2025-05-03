asyncHandler = require("express-async-handler")
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const User = require("../models/user");






exports.register = asyncHandler(async (req, res, next)=>{
    if(req.method == "POST"){
        const {username, password } = req.body
        const hashed_password = await bcrypt.hash(password, 10)
        console.log(username, password, hashed_password)
        await User.create({ username: username, password: hashed_password });
        //return res.redirect('/login');
        return res.redirect("/catalog")
    }
    res.render("register")
    
})


exports.login = asyncHandler(async (req, res, next)=>{
    if(req.method == "POST"){
        const {username, password } = req.body
        const user = await User.findOne({ username })
        if (!user){
            return res.render('login', {error: "User not found"})
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        console.log(passwordMatch)
        if (!passwordMatch){
            return res.render('login', {error: 'User not found'})
        }

        req.session.userId = user._id
        res.redirect('/catalog')
      
    }
    res.render("login")
    
})

exports.logout = asyncHandler(async (req, res, next)=>{
    req.session.destroy(err => {
        if (err) return res.redirect('/catalog');
        res.clearCookie('connect.sid');
        res.redirect('/users/login');
    })
   // return res.redirect('/catalog')
})
