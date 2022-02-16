const mongoose = require('mongoose');

const CounterSchema=mongoose.Schema({

    count:{
        type: Number,
        default:0
    },
})
CounterSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

CounterSchema.set('toJSON', {
    virtuals: true,
});

exports.Counter= mongoose.model('Counter',CounterSchema)