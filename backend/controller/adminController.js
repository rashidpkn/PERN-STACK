const adminModel = require('../model/adminModel')

const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.create=async(req,res)=>{
    const {username,password} = req.body
    if(username&&password){
        try {
            const found = await adminModel.findOne({where:{username}})
        if(!found){
            bcrypt.hash(password, saltRounds, async function(err, hash) {
                await adminModel.create({username,password:hash})
            });
            res.cookie('secure', true,{expires: new Date(Date.now() + 1000*60*60)})
            res.send(true)
        } else res.send(false)
        } catch (error) {
           console.log(error.message) 
        }
    } else res.send(false)
}

exports.login = async (req,res)=>{
    const {username,password} = req.body
    if(username&&password){
        try {
            const hash = await adminModel.findOne({
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