const ProductModel =require('../model/ProductModel')

const ReadProductService = async (req)=>{
    try {
        const products = await ProductModel.find();
    if (!products) {
      return res.status(404).json({ message: 'No products found' });
    }else{
        return {status:"success", data:products}
    }
      } catch (e) {
        return {status:"fail", message:e.toString()}
}
}

const ReadProductByIdService = async (req)=>{
    try {
        const productId = req.params.productId;
        const products = await ProductModel.findById({_id:productId});
    if (!products) {
      return {status:"fail", message:"No data Found"}
    }else{
        return {status:"success", data:products}
    }
      } catch (e) {
        return {status:"fail", message:e.toString()}
}
}

const UpdateProductService = async (req)=>{
    
    try{
        const body = req.body
        await ProductModel.updateOne( {$set:body});
        return {status:"success",message:"Product save success"}
   }

    catch (e) {
        return {status:"fail", message:e.toString()}
    }
}

const CreateProductService = async (req)=>{
    
    try{

        const {name:name,brand:brand,category:category,description:description,image:image} = req.body
        let product = new ProductModel({ name:name,brand:brand,category:category,description:description,image:image});

        await product.save()

        return {status:"success",message:"Product save success"}
   }

    catch (e) {
        return {status:"fail", message:e.toString()}
    }
}

const DeleteProductService = async (req)=>{
    
    try{
        const productId = req.params.productId;
        await ProductModel.deleteOne( {productId});
        return {status:"success",message:"Product Delete success"}
   }

    catch (e) {
        return {status:"fail", message:e.toString()}
    }
}


module.exports={
    ReadProductService,
    UpdateProductService,
    CreateProductService,
    DeleteProductService,
    ReadProductByIdService
}