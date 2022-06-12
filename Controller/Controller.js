import mongoose from 'mongoose';
import User from '../Schema/User.js';

class Controller{
    async createOne(req,res){
        const {name, phone} = req.body;
        console.log(req.body);
        let result = await User.create({name,phone})
        res.status(201).json(result);
    }

    async createMany(req,res){

        try {
            let users = req.body;

            console.log(typeof users);
            for(let user of users){
                console.log(user);
                const {name, phone} = user;
                let result = await User.create({name,phone})
            
            }

            res.status(201).json(users);

        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
        
    }

    async getAll(req,res){
        let result = await User.find();
        res.json(result);
    }

    async getOne(req,res){
        console.log(req.params.id);
        let result = await User.findById(req.params.id);
        res.json(result);
    }

    async delete(req,res){
        console.log(req.params.id);
        let result = await User.findByIdAndDelete(req.params.id);
        res.json(result);
    }

    async update(req,res){
        console.log(req.params.id);
        let result = await User.findByIdAndUpdate(req.params.id,req,body,{new:true});
        res.json(result);
    }


}


export default new Controller();