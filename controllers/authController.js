const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const _ = require('lodash');
const RiderProfile = require('../models/riderProfile');
const DriverProfile = require('../models/driverProfile');


const transport = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: {
      user: "bangaru.saivivek2@gmail.com",
      pass: "QDXmMdNPbB15agWK",
    },
});

exports.riderSignup = async (req,res) => {
    // console.log(req.body);
    const { fname,lname,email,password,mobile,city,promocode } = req.body;
    console.log(fname,lname,email,password,mobile,city,promocode)
    try{
        
        const riderProfile = await RiderProfile.find({mobile});
        console.log(riderProfile.length) 
        if(riderProfile.length !== 0){
            console.log(riderProfile)
            return res.status(400).json({
                success: false,
                message: "User already exists!",
            })
        }
        console.log("hello1")
        const token = jwt.sign({fname,lname,email,mobile,password,city,promocode}, process.env.JWT_ACCOUNT_ACTIVATION,{
            expiresIn: "100m",
        });
        
        const activateLink = `${process.env.CLIENT_URL}/auth/rider/activate/${token}`;
        console.log("hello2")
        const emailData = {
            to: [
                {
                    address: email,
                    fname,
                },
            ],
            from: {
                address: process.env.EMAIL_FROM,
                name: "Brydo care",
            },
            subject: "Account Activation Link",
            html: `
                <div>
                    <h1>Please use the following link to activate the account.</h1>

                    <a href="${activateLink}" target="_blank">${activateLink}</a>

                    <hr />

            `,
        };
        console.log("hello3")
        transport.sendMail(emailData, (err,info) => {
            if(err){
                return res.status(400).json({
                    success: false,
                    message: err,
                });
            }

            res.status(200).json({
                success: true,
                message: `Email has been succesfully sent to ${email}.Follow the instructions in the email to activate your account`,
            });

        });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            message: "Something went wrong",
        })
    }
};

exports.driverSignup = async (req,res) => {
    console.log(req.body);
    const { fname,lname,email,password,mobile,city,promocode } = req.body;
    try{
        console.log("hello")
        const driverProfile = await DriverProfile.findOne({email});
        console.log(driverProfile.length);
        if(driverProfile.length !== 0){
            // console.log(riderProfile)
            return res.status(400).json({
                success: false,
                error: "user",
                message: "User already exists!",
            })
        }
        const token = jwt.sign({fname,lname,email,mobile,password,city,promocode}, process.env.JWT_ACCOUNT_ACTIVATION,{
            expiresIn: "100m",
        });

        const activateLink = `${process.env.CLIENT_URL}/auth/driver/activate/${token}`;

        const emailData = {
            to: [
                {
                    address: email,
                    name,
                },
            ],
            from: {
                address: process.env.EMAIL_FROM,
                name: "Brydo care",
            },
            subject: "Account Activation Link",
            html: `
                <div>
                    <h1>Please use the following link to activate the account.</h1>

                    <a href="${activateLink}" target="_blank">${activateLink}</a>

                    <hr />

            `,
        };
        transport.sendMail(emailData, (err,info) => {
            if(err){
                return res.status(400).json({
                    success: false,
                    error: "server",
                    message: err,
                });
            }

            res.status(200).json({
                success: true,
                message: `Email has been succesfully sent to ${email}.Follow the instructions in the email to activate your account`,
            });

        });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            error: "server",
            message: "Something went wrong in server",
        })
    }
};

exports.riderActivateAccount = async (req,res) => {
    const {token} = req.params;
    console.log(token)
    try{
        if(token){
            return jwt.verify(token,process.env.JWT_ACCOUNT_ACTIVATION, (err) => {
                if(err){
                    return res.status(400).json({
                        success: false,
                        error: "",
                        message: "The link has expired",
                    })
                }

                const {fname,lname,email,mobile,password,city,promocode} = jwt.decode(token);
                console.log(jwt.decode(token))
                const newRider = new RiderProfile();

                newRider.fname = fname;
                newRider.lname = lname;
                newRider.email = email;
                newRider.mobile = mobile;
                newRider.password = password;
                newRider.city = city;
                newRider.promocode = promocode;
                RiderProfile.findOne({mobile}).exec((err,user) => {
                    if(err) {
                        return res.status(400).json({
                            success: false,
                            error: "",
                            message: "Server Error"
                        })
                    }
                    console.log(user)
                    if(user){
                        return res.status(400).json({
                            success: false,
                            error: "exists",
                            message: "The account has already been activated",
                        });
                    }
                    console.log(newRider)
                    newRider.save((err,userData) => {
                        if(err){
                            return res.status(400).json({
                                success: false,
                                error: "",
                                message: "Server Error",
                            });
                        }
                        res.status(200).json({
                            success: true,
                            message: `Succesfully activated account`,
                            data: userData,
                        });
                    });

                });
            });
        }
        return res.status(401).json({
            success: false,
            error: "",
            message:"The token is invalid",
        })
    }
    catch(err){
        return res.status(400).json({
            success: false,
            error: "",
            message: "server error",
        })
    }
}

exports.driverActivateAccount = async (req,res) => {
    const {token} = req.params;
    try{
        if(token){
            return jwt.verify(token,process.env.JWT_ACCOUNT_ACTIVATION, (err) => {
                if(err){
                    return res.status(401).json({
                        success: false,
                        error: "",
                        message: "The link has expired",
                    })
                }

                const {fname,lname,email,mobile,password,city,promocode} = jwt.decode(token);

                const newDriver = new DriverProfile();

                newDriver.fname = fname;
                newDriver.lname = lname;
                newDriver.email = email;
                newDriver.mobile = mobile;
                newDriver.password = password;
                newDriver.city = city;
                newDriver.promocode = promocode;
                DriverProfile.findOne({mobile}).exec((err,user) => {
                    if(err) {
                        return res.status(400).json({
                            success: false,
                            error: "",
                            message: "unable to fetch data from db"
                        })
                    }
                    if(user){
                        return res.status(400).json({
                            success: false,
                            error: "exists",
                            message: "The account has already been activated",
                        });
                    }

                    newDriver.save((err,userData) => {
                        if(err){
                            return res.status(400).json({
                                success: false,
                                error: "",
                                message: "unable to save data to db",
                            });
                        }
                        res.status(200).json({
                            success: true,
                            message: `Hey ${name}, welcome to the app`,
                            data: userData
                        });
                    });

                });
            });
        }
        return res.status(401).json({
            success: false,
            error: "",
            message:"The token is invalid",
        })
    }
    catch(err){
        return res.status(400).json({
            success: false,
            error: "",
            message: "Something went wrong",
        })
    }
}

exports.riderSignin = async (req,res) => {
    const {mobile} = req.body;
    console.log(mobile)
    try{
        const rider = await RiderProfile.findOne({mobile});
        console.log(rider)
        if(!rider){
            return res.status(400).json({
                success: false,
                error: "rider",
                message: "Rider doesn't exist"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Rider exist"
        })
    }
    catch(err){
        return res.status(400).json({
            success: false,
            error: "server",
            message: "Server Error"
        })
    }
}

exports.riderSigninAuth = async (req,res) => {
    const { mobile, password } = req.body; 
    try{
        // console.log(number)
        const rider = await RiderProfile.findOne({mobile});
        console.log(rider)
        
        if(!rider.authenticate(password)) {
            return res.status(400).json({
                success: false,
                error: "password",
                message: "Password is incorrect",
            })
        }

        const token = jwt.sign({_id: rider._id}, process.env.JWT_SECRET,{expiresIn: "1d",});

        const { _id, name, email } = rider;

        return res.status(200).json({
            success: true,
            data: {
                token,
                rider: {
                    _id,
                    name,
                    email,
                    mobile
                },
            },
            message: "Signed in succesfully"

        });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            error: "server",
            message: "Something went wrong",
        })
    }
}

exports.driverSignin = async (req,res) => {
    const {mobile} = req.body;
    console.log(mobile)
    try{
        const driver = await DriverProfile.findOne({mobile});
        // console.log(rider)
        if(!driver){
            return res.status(400).json({
                success: false,
                error: "driver",
                message: "Driver doesn't exist"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Rider exist"
        })
    }
    catch(err){
        return res.status(400).json({
            success: false,
            error: "server",
            message: "Server Error"
        })
    }
}

exports.driverSigninAuth = async (req,res) => {
    const { mobile, password } = req.body; 
    try{
        // console.log(number)
        const driver = await driverProfile.findOne({mobile});
        // console.log(rider)
        
        if(!driver.authenticate(password)) {
            return res.status(400).json({
                success: false,
                error: "password",
                message: "Password is incorrect",
            })
        }

        const token = jwt.sign({_id: driver._id}, process.env.JWT_SECRET,{expiresIn: "1d",});

        const { _id, name, email } = driver;

        return res.status(200).json({
            success: true,
            data: {
                token,
                driver: {
                    _id,
                    name,
                    email,
                    mobile
                },
            },
            message: "Signed in succesfully"

        });
    }
    catch(err){
        return res.status(400).json({
            success: false,
            error: "server",
            message: "Something went wrong",
        })
    }
}

exports.riderForgotPassword = async (req, res) => {
    const { email } = req.body;
    try{
        RiderProfile.findOne({ email }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                success: false,
                error: "notexist",
                message: "User doesn't exist.",
            });
        }
    
        const token = jwt.sign({ _id: user._id, name: user.name }, process.env.JWT_RESET_PASSWORD, {
            expiresIn: "10m",
        });
    
        const link = `${process.env.CLIENT_URL}/auth/rider/reset/${token}`;
    
        const emailData = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: "Password Reset Link",
            html: `
            <h1>Please use the following link to reset your password:</h1>
            <a href="${link}" target="_blank">${link}</a>
            `,
        };
    
        return user.updateOne({ resetPasswordLink: token }).exec((err, success) => {
            if (err) {
            return res.status(400).json({
                success: false,
                error: "",
                message: "There was an error in saving the reset password link",
            });
            }
    
            transport
            .sendMail(emailData)
            .then(() => {
                return res.status(200).json({
                    success: true,
                    error: "",
                    message: `Email has been successfully sent to ${email}`,
                });
            })
            .catch((err) => {
                return res.status(400).json({
                    success: false,
                    error: "",
                    message: "There was an error in sending the email.",
                });
            });
        });
        });
    }
    catch(err){
        req.status(400).json({
            success: false,
            error: "",
            message: "something went wrong"
        })
    }
};

exports.driverForgotPassword = async (req, res) => {
    const { email } = req.body;
    try{
        DriverProfile.findOne({ email }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                success: false,
                error: "notexist",
                message: "User doesn't exist.",
            });
        }
    
        const token = jwt.sign({ _id: user._id, name: user.name }, process.env.JWT_RESET_PASSWORD, {
            expiresIn: "10m",
        });
    
        const link = `${process.env.CLIENT_URL}/auth/rider/reset/${token}`;
    
        const emailData = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: "Password Reset Link",
            html: `
            <h1>Please use the following link to reset your password:</h1>
            <a href="${link}" target="_blank">${link}</a>
            `,
        };
    
        return user.updateOne({ resetPasswordLink: token }).exec((err, success) => {
            if (err) {
            return res.status(400).json({
                success: false,
                error: "",
                message: "There was an error in saving the reset password link",
            });
            }
    
            transport
            .sendMail(emailData)
            .then(() => {
                return res.status(200).json({
                    success: true,
                    error: "",
                    message: `Email has been successfully sent to ${email}`,
                });
            })
            .catch((err) => {
                return res.status(400).json({
                    success: false,
                    error: "",
                    message: "There was an error in sending the email.",
                });
            });
        });
        });
    }
    catch(err){
        req.status(400).json({
            success: false,
            error: "",
            message: "something went wrong"
        })
    }
};

exports.riderResetPassword = async (req, res) => {
    const { newPassword,id } = req.body;
    // const { resetPasswordLink } = req.params;
    try{
        // if (resetPasswordLink) {
        // return jwt.verify(resetPasswordLink, process.env.JWT_RESET_PASSWORD,(err)=> {
        //     if (err) {
        //     return res.status(400).json({
        //         error: "Expired link. Try again.",
        //     });
        // }
    
        RiderProfile.findOne({ id }).exec((err, user) => {
            if (err || !user) {
                return res.status(400).json({
                    success: false,
                    error: "",
                    message: "Somethig went wrong. Try later",
                });
            }
    
            const updateFields = {
                password: newPassword,
            };
    
            user = _.extend(user, updateFields);
    
            user.save((err) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        error: "",
                        message: "error in resetting the password",
                    });
                }
    
                return res.json({
                    success: true,
                    error: "",
                    message: "Great! The password has reset.",
                });
            });
        });
        
        
    }
    catch(err){
        return res.status(400).json({
            success: false,
            error: "",
            message: "something went wrong",
        })
    }
};

exports.driverResetPassword = async (req, res) => {
    const { newPassword,id } = req.body;
    // const { resetPasswordLink } = req.params;
    try{
        // if (resetPasswordLink) {
        // return jwt.verify(resetPasswordLink, process.env.JWT_RESET_PASSWORD,(err)=> {
        //     if (err) {
        //     return res.status(400).json({
        //         error: "Expired link. Try again.",
        //     });
        // }
    
        DriverProfile.findOne({ id }).exec((err, user) => {
            if (err || !user) {
                return res.status(400).json({
                    success: false,
                    error: "",
                    message: "Somethig went wrong. Try later",
                });
            }
    
            const updateFields = {
                password: newPassword,
            };
    
            user = _.extend(user, updateFields);
    
            user.save((err) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        error: "",
                        message: "error in resetting the password",
                    });
                }
    
                return res.json({
                    success: true,
                    error: "",
                    message: "Great! The password has reset.",
                });
            });
        });
        
        
    }
    catch(err){
        return res.status(400).json({
            success: false,
            error: "",
            message: "something went wrong",
        })
    }
};

