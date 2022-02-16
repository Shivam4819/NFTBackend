const mongoose = require('mongoose');

const NFTSchema=mongoose.Schema({

    tokenId:{
        type:Number,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    image:{
        type:String,
        default:'https://nft-back-end.herokuapp.com'

    }
    
})
NFTSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

NFTSchema.set('toJSON', {
    virtuals: true,
});

exports.NFT= mongoose.model('NFT',NFTSchema)