const mongoose = requi("mongoose")
const userScheme = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    role: {
        type: ["user", "admin"],
        default: "user",
    },
}, {
    timestamps: true,
    versionkey: false,
})
module.exports = mongoose.model("users", userScheme);