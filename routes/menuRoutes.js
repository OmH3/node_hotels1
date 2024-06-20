const express = require('express');
const router = express.Router();
const menuItem = require('./models/Menu');

// post method to add menu item

router.post('/', async (req,res)=>{
    try{
    const data =req.body;
    const newMenu = new menuItem(data);
    const response = await newMenu.save();
    console.log('data saved!');
    res.status(200).json(response)
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"})
    }
})

// get method to retrieve menu items

router.get('/', async (req,res)=>{
    try{
        const data = await menuItem.find();
        console.log('data fetched');
        res.status(200).json(data);

    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.get('/:type', async (req,res)=>{
    try{
        const Menutype = req.params.type;
        if(Menutype=='sweet'||Menutype=='sour'||Menutype=='spicy'){
            const response = await menuItem.find({type:Menutype});
            console.log('data fetched');
            res.status(200).json(response);
        }else{
            console.log('Invalid type');
            res.status(404).json({error: 'Invalid type'})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"})
    }
})

module.exports=router;