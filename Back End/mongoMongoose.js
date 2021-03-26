const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/achievement-arena', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function ()
{
    // we're connected!
    const userSchema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        otherProfiles: [
            {
                steam: String,
                gog: String,
                psn: String,
                xbox: String
            }
        ]
    });

    userSchema.plugin(require('mongoose-autopopulate'));

    const gameSchema = new mongoose.Schema({
        name: String,
        steamID: String,
        gogID: String,
        system: String
    });

    const achievementSchema = new mongoose.Schema({
        game: String,
        achievements: [
            {
                title: String,
                description: String,
                points: Number
            }
        ]
    });

    const leaderboardSchema = new mongoose.Schema({

    });

    const messageSchema = new mongoose.Schema({

    });

    console.log("Connected!");
    const user = mongoose.model('user', userSchema);
    console.log("User Schema Made");
    const game = mongoose.model('game', gameSchema);
    console.log("Game Schema Made");
    const achievements = mongoose.model('achievements', achievementSchema);
    console.log("Achievement Schema Made");
    const leaderboard = mongoose.model('leaderboard', leaderboardSchema);
    console.log("Leaderboard Schema Made");
    const message = mongoose.model('message', messageSchema);
    console.log("Message Schema Made");


});

