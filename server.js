const express= require('express')
const router= express.Router();
const {NFT} = require('./NFT')
const {Counter}= require('./Counter')

// get nft
router.get('/:id',async (req,res)=>{

    
    const nft= await NFT.findById(req.params.id)

    if(!nft) return res.status(404).json({status:false,message:'nft does not exist'})

    return res.send(nft)
})

// new nft
router.post(`/`,async (req,res)=>{
    console.log("yo man");
    console.log(req.body.name);


    let newNFT=new NFT({
        id:req.body.id,
        name:req.body.name,
        description:req.body.description,
        image:req.body.image,
    })

    newNFT= await newNFT.save()
    
    if(!newNFT) return res.status(404).json({status:false,message:'nft not created'})
    const objID= newNFT.id

    return res.status(200).send({message:"nft added to db", data:objID})
})



module.exports= router