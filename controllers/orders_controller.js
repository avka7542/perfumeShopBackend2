const controler_name = "order";
const object_name = "Order";
const objects_name = "orders";

const Model = require(`../models/${object_name}`);


module.exports = {

    // managers functions

    getAllOrdersForManagers: async (req,res) => {

        try {

            const models = await Model.find().exec();

            return res.status(200).json({
                success:true,
                message:`success to find all ${objects_name} - for managers`,
                [objects_name]:models
            })
            
        } catch (error) {
            return res.status(500).json({
                message:`error in get all ${objects_name} - for -managers`,
                error: error.message
            })
        }
    },

    updateStatusForManagers: async (req,res) =>{


        try {


            const id = req.params.id;

            await Model.findByIdAndUpdate(id,{status:req.body.status}).exec();

            return res.status(200).json({
                success:true,
                message:`success to update ${controler_name} status by id - for managers`
            })
            
        } catch (error) {
            return res.status(500).json({
                message:`error in update ${controler_name} status by id - for managers`,
                error: error.message
            })
        }
    },

    getOrderByIdForManagers: async (req,res)=>{

        try {

            const models = await Model.findById(req.params.id).populate([/* 'user', */'products.product']).exec();

            return res.status(200).json({
                success:true,
                message:`success to find ${controler_name} by id - for managers`,
                [controler_name]:models
            })
            
        } catch (error) {
            return res.status(500).json({
                message:`error in find ${controler_name} by id} - for managers`,
                error: error.message
            })
        }
    },
    deleteOrderByIdForManagers : async (req,res)=> {


        try {


            const id = req.params.id;

            await Model.findByIdAndDelete(id).exec();

            return res.status(200).json({
                success:true,
                message:`success to delete ${controler_name} by id - for managers`
            })
            
        } catch (error) {
            return res.status(500).json({
                message:`error in delete ${controler_name} by id - for managers`,
                error: error.message
            })
        }
    },

    //___________________


    // guests functions

    addNewOrderForGuest: async (req,res) => {
        
        try {
           console.log(req.body)
            // gettind values from the body request
            const {

                payment_details,
                products,
                customer_details

            } = req.body;
    

            // creating new model using the values from req.body
            const new_model = new Model({
    
                payment_details,
                products,
                customer_details
    
            });

            // actual saving
            await new_model.save();

            // return success message
            return res.status(200).json({
                success:true,
                message:`success to add new ${controler_name} - for guest`
            })
            
        } catch (error) {
            return res.status(500).json({
                message:`error in add ${controler_name} - for guest`,
                error: error.message
            })
        }
    },

    //___________________

    add: async (req,res) => {

        try {

            // gettind values from the body request
            const {

                user,
                total_price,
                payment_details,
                products

            } = req.body;
    

            // creating new model using the values from req.body
            const new_model = new Model({
    
                user,
                total_price,
                payment_details,
                products
    
            });

            // actual saving
            await new_model.save();

            // return success message
            return res.status(200).json({
                success:true,
                message:`success to add new ${controler_name}`
            })
            
        } catch (error) {
            return res.status(500).json({
                message:`error in add ${controler_name}`,
                error: error.message
            })
        }


    },

    getAll: async (req,res) => {


        try {

            const models = await Model.find().populate(['user','products.product']).exec();

            return res.status(200).json({
                success:true,
                message:`success to find all ${objects_name}`,
                [objects_name]:models
            })
            
        } catch (error) {
            return res.status(500).json({
                message:`error in get all ${objects_name}`,
                error: error.message
            })
        }
    },

    getById: async (req,res)=>{

        try {

            const models = await Model.findById(req.params.id).populate(['user','products.product']).exec();

            return res.status(200).json({
                success:true,
                message:`success to find ${controler_name} by id`,
                [objects_name]:models
            })
            
        } catch (error) {
            return res.status(500).json({
                message:`error in find ${controler_name} by id}`,
                error: error.message
            })
        }
    },

    updateById: async (req,res) =>{


        try {


            const id = req.params.id;

            await Model.findByIdAndUpdate(id,req.body).exec();

            return res.status(200).json({
                success:true,
                message:`success to update ${controler_name} by id`
            })
            
        } catch (error) {
            return res.status(500).json({
                message:`error in update ${controler_name} by id`,
                error: error.message
            })
        }
    },

    deleteById : async (req,res)=> {


        try {


            const id = req.params.id;

            await Model.findByIdAndDelete(id).exec();

            return res.status(200).json({
                success:true,
                message:`success to delete ${controler_name} by id`
            })
            
        } catch (error) {
            return res.status(500).json({
                message:`error in delete ${controler_name} by id`,
                error: error.message
            })
        }
    }
}