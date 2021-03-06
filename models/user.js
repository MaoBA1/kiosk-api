const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    creadAdt: { type: Date, default: Date.now },
    password: String,
    mobile: String,
    dob: Date,
    Avatar: {type: String, default: 'https://e7.pngegg.com/pngimages/122/295/png-clipart-open-user-profile-facebook-free-content-facebook-silhouette-avatar-thumbnail.png'},
    firstName: String,
    lastName: String,
    passcode: Number,
    subs: [
        {
            storeId: {type: mongoose.Schema.Types.ObjectId, ref: 'Store'},
        }
    ],
    level: {type: String, default: 'Newbie'},
    points: {type: Number, default: 0},
    isBusiness: {type: Boolean, default: false},
    isApproved: {type: Boolean, default: false},
    isLocked: {type: Boolean, default: false}
});


module.exports = mongoose.model('User', userSchema);