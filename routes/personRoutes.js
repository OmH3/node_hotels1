const express = require('express');
const router = express.Router();
const Person = require('./models/person') // same go to person.js in models
router.post('/',async (req,res)=>{
    try{
    const data=req.body //assuming req body contains the person data
    // create a new person document using the model created
    const newPerson = new Person(data);
    // save the new person to the database
    const response=await newPerson.save();
    console.log('data saved.');
    res.status(200).json(response);
    }
    catch(err){
        console.log(err)
        res.status(500).json({err: 'Internal Server Error'})
    }
})

// get method to get the person

router.get('/', async (req,res)=>{
    try{
        const data = await Person.find();
        console.log('data fetched')
        res.status(200).json(data);
    }catch(error){
        console.log(err)
        res.status(500).json({err: 'Internal Server Error'})
    }
})

// for parameterized 

router.get('/:workType', async(req,res)=>{
    try{
        const workType = req.params.workType;  // extract workType from URL param
        if(workType=='chef'||workType=='manager'||workType=='waiter'){
            const response = await Person.find({work:workType});
            console.log('data fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: "Invalid work Type"});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
})

// updating the record
router.put('/:id', async (req,res)=>{
    try{
        const personId=req.params.id; // extract id from url parameter
        const updatedPersonData = req.body; // updated data for the person
        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new: true,  
            runValidators:true
        })

        if(!response){
            return res.status(404).json({error: 'Person not found'})
        }

        console.log('data updated')
        res.status(200).json(response)
         
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndRemove(personId);

        if(!response){
            return res.status(404).json({error: 'Person not found'})
        }

        console.log('data deleted')
        res.status(200).json({message:'Person deleted successfully'})

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

module.exports=router;