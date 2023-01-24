module.exports = (str) => str.split("").reduce((rev, char) => char + rev, "");
