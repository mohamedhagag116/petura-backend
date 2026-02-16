const Pet = require("../models/pet.model");
const Notification = require("../models/notification.model");

exports.getHomeData = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const petsCount = await Pet.countDocuments({ user: userId });

    const unreadNotificationsCount = await Notification.countDocuments({
      user: userId,
      isRead: false
    });

    const latestPets = await Pet.find({ user: userId })
      .sort({ createdAt: -1 })
      .limit(3);

    const latestNotifications = await Notification.find({
      user: userId
    })
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      data: {
        petsCount,
        unreadNotificationsCount,
        latestPets,
        latestNotifications
      }
    });

  } catch (error) {
    next(error);
  }
};
