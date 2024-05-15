import { Table } from "../model/table.model.js";

const addEntry=async(req,res,next)=>{
    try{
        // console.log(req)
        const {name,email,phoneNumber,hobbies}=req.body;
        const table=await Table.create({
            name,
            email,
            phoneNumber,
            hobbies
        });

        const createdTable=await Table.findById(table._id);
        if(!createdTable){
            throw new Error("Some Error Occured, Entry cant be added");
        }
        res.status(201).json({
            status:true,
            message:"Entry added successfully",
            table:createdTable
        })
        
    }catch(error) {
        next(error)
    }
}

const deleteEntry=async(req,res,next)=>{
    try {
        const{ids}=req.body;
        const deletedTable=await Table.deleteMany({_id:{$in:ids}});
        console.log(deletedTable);
        res.status(200).json({
            status:true,
            message:"Entry deleted successfully",
        })
        
    }catch(error){
        next(error)
    }
}

const updateEntry=async(req,res,next)=>{
    try{
        const {id,update}=req.body;
        const updatedTable=await Table.findByIdAndUpdate(id,update,{new:true});
        res.status(200).json({
            status:true,
            message:"Entry updated successfully",
            table:updatedTable
        })
    }
    catch(error){
        next(error);
    }
}

const getAllEntry=async(req,res,next)=>{
    try{
        const tables=await Table.find();
        res.status(200).json({
            status:true,
            message:"All Entries fetched successfully",
            tables
        })
    }catch(error){
        next(error);

    }
}

export {addEntry,deleteEntry,updateEntry,getAllEntry};