const userModel = require('../model/userModel')

const bcrypt = require('bcrypt');
const saltRounds = 10;

//create user
exports.create=async(req,res)=>{
    const {username,password} = req.body
    if(username&&password){
        try {
            const found = await userModel.findOne({where:{username}})
        if(!found){
            bcrypt.hash(password, saltRounds, async function(err, hash) {
                await userModel.create({username,password:hash})
            });
            res.send(true)
            res.cookie('secure', true,{expires: new Date(Date.now() + 1000*60*60)})
        } else res.send(false)
        } catch (error) {
            
        }
    } else res.send(false)
}

exports.login = async (req,res)=>{
    const {username,password} = req.body
    if(username&&password){
        try {
            const hash = await userModel.findOne({
                where:{
                    username
                },
                raw:true
            })
            bcrypt.compare(password, hash.password, function(err, result) {
                result && res.cookie('secure', true,{expires: new Date(Date.now() + 1000*60*60)})
                res.send(result)
            });
        } catch (error) {
            res.send(false)
            console.log(error.message)
        }
} else res.send(false)
}