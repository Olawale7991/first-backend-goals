const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    name: {
        type: String,
    },
    text: {
        type: String,
    },
    completed: {
        type: String,
        enum: ['true', 'false'],
        default: 'false',
    },

},{
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema)