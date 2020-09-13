const multer = require('multer');
const fs = require("fs");
const uploadsFolderPath = (process.env.NODE_ENV === "production") ?
  'client/build/uploads' :
  'client/public/uploads';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsFolderPath)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
}


const upload = multer({ storage: storage, fileFilter: fileFilter }).single('file')

const setUploadsFolder = () => {
  fs.access(uploadsFolderPath, function (err) {
    if (err && err.code === 'ENOENT') {
      fs.mkdirSync(uploadsFolderPath); //Create dir in case not found
    }
  });
}
setUploadsFolder();
// Defining methods for the postsController
module.exports = {
  create: function (req, res) {

    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
      } else if (err) {
        return res.status(500).json(err)
      }
      return res.status(200).send(req.file)
    })

  },
};
