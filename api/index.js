const package = require("../package.json");

module.exports = async (req, res) => {
  res.json({
    alive: true,
    made_by: "https://github.com/JosephJenistan",
    version: package.version,
    docs: "https://jenistan.gitbook.io/jiosaavn-api/",
  });
};
