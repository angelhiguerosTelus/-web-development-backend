const fs = require("fs");
var path = require("path");
var pathUrls = path.resolve(__dirname, "./urls.json");
var pathSecrets = path.resolve(__dirname, "./secrets.json");

let urls = {};
let secrets = [];

const readFiles = () => {
  urls = JSON.parse(fs.readFileSync(pathUrls));
  secrets = JSON.parse(fs.readFileSync(pathSecrets));
};

const writeFiles = () => {
  let dataUrls = JSON.stringify(urls);
  fs.writeFileSync(pathUrls, dataUrls);

  let dataSecrets = JSON.stringify(secrets);
  fs.writeFileSync(pathSecrets, dataSecrets);
};

// URL Shortener
const getUrls = () => {
  readFiles();
  let res = urls;
  return {
    error: "",
    data: res,
  };
};

const addUrls = (urlsList) => {
  readFiles();
  urls = [...urlsList];
  writeFiles();

  return {
    error: "",
    data: urls,
  };
};

// URL Shortener
const getSecrets = () => {
  readFiles();
  let res = secrets;
  return {
    error: "",
    data: res,
  };
};

const addSecrets = (secretsList) => {
  readFiles();
  secrets = [...secretsList];
  writeFiles();

  return {
    error: "",
    data: secrets,
  };
};
module.exports = {
  getUrls,
  addUrls,
  getSecrets,
  addSecrets,
};
