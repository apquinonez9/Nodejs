const mongoose = requi("mongoose")
const TracksScheme = new mongoose.Schema({
    name: {
        type: String,
    },
    album: {
        type: String,
    },
    cover: {
        type: String,

        validate: {
            validator: (req) => { return true; }
        },
        message: "Error_URL",
    },

    artist: {
        name: {
            type: String,
        },
        nickname: {
            type: String,
        },
        nationality: {
            type: String,
        },
    },
    duration: {
        start: {
            type: Number,
        },
        end: {
            type: Number,
        },
    },
    mediaId: {
        type: mongoose.Types.ObjectId,
    },
}, {
    timestamps: true,
    versionkey: false,
})
module.exports = mongoose.model("tracks", TracksScheme);