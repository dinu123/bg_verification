const db = require("./data-source");
const logger = require("./logger");
const mailer = require("./mailer");



exports.db = db;
exports.logger = logger;
exports.mailer = mailer;