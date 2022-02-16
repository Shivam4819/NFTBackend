module.exports= (sequelize, DataTypes)=>{
    const nft= sequelize.define("nftusers",{
        tokenId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true
        },
        name:{
            type:  DataTypes.STRING,
            allowNull:false
        },
        description:{
            type: DataTypes.STRING,
            allowNull:false
        },
        image:{
            type:DataTypes.STRING,
            defaultValue:'https://nft-back-end.herokuapp.com'
    
        }
 
    })

    return nft
}