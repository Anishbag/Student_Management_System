import User from "../models/User.js";


export const uploadProfileImage = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user) {return res.status(404).json({
                message: "User not found"
            });
        }

        user.profileImage = req.file.path;

        await user.save();

        res.status(200).json({
            message: "Image uploaded successfully",
            image: user.profileImage
        });

    } catch (error) {res.status(500).json({
            message: error.message
        });
    }
};