const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
                                           username     : String,
                                           client_id    : String,
                                           firstName    : String,
                                           lastName     : String,
                                           bio          : String,
                                           otherProfiles: [
                                               {
                                                   steam: String,
                                                   gog  : String,
                                                   psn  : String,
                                                   xbox : String
                                               }
                                           ],
                                           ownedGames   : [{
                                               appid       : Number,
                                               achievements: [
                                                   {
                                                       apiname   : String,
                                                       achieved  : Number,
                                                       unlocktime: Number
                                                   }],
                                               visible     : String,
                                               earnedPoints: Number
                                           }],
                                           profileTotal : Number
                                       });

module.exports = mongoose.model('user', userSchema);