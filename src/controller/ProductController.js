
const{
    ReadProductService,
    UpdateProductService,
    CreateProductService,
    DeleteProductService,
    ReadProductByIdService
} = require('../Services/ProductServices')



exports.ReadProduct = async (req,res)=>{
    let result = await ReadProductService(req);
    return res.status(200).json(result)
}
exports.ReadProductById = async (req,res)=>{
    let result = await ReadProductByIdService(req);
    return res.status(200).json(result)
}

exports.UpdateProduct = async(req,res)=>{
    let result = await UpdateProductService(req);
    return res.status(200).json(result)
}

exports.CreateProduct = async (req,res)=>{
    let result = await CreateProductService(req);
    return res.status(200).json(result)
}

exports.DeleteProduct = async (req,res)=>{
    let result = await DeleteProductService(req);
    return res.status(200).json(result)
}