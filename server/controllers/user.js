const User = require("../models/user");

module.exports.user = async (req, res) => {
  const { email } = req.body;
  await User.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else res.send("ID unknown" + err);
  });
};

module.exports.getAllUsers = async (req, res) => {
  await User.find({}, (err, docs) => {
    res.status(200).json(docs);
  });
};

module.exports.all = async (req, res) => {
  try {
    const users = await User.find();
    return res.json({ users });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.updateBio = async (req, res) => {
    const { email, bio } = req.body;
    console.log(email, bio);

  try {
    const user = await User.findOneAndUpdate({ email }, { bio }, { new: true });
    return res.json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.updateUser = async (req, res) => {
  await User.findOneAndUpdate(
    { email: req.body.email },
    {
      $set: {
        bio: req.body.bio,
      },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true },
    (err, docs) => {
      if (err) return res.status(500).send({ message: err });
      else return res.send(docs);
    }
  );
};
