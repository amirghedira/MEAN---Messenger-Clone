const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    conversation: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: String, required: true },
    seen: {
        state: { type: Boolean, required: true, default: false },
        seenDate: { type: String }
    },
    content: { type: String, required: true },

})


module.exports = mongoose.model('Message', messageSchema);