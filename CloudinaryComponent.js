const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "suzyng83209",
  api_key: "226333178986368",
  api_secret: "vHQ9n49ViWfr6JVtUI5f5W5QGCA"
});

module.exports = {
  getColors: function(imageName) {
    cloudinary.api.resource(
      imageName,
      function(result) {
        console.log(result);
      },
      { colors: true }
    );
  }
};
