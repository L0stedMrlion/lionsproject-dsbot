const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config({ path: `${process.cwd()}/.${process.env.NODE_ENV.replace(' ', '')}.env` });

module.exports = {
    token: process.env.DISCORD_TOKEN,
    prefix: process.env.PREFIX,
    ownerID: process.env.OWNER_ID,
};

require('./status.js');
require('./reload.js');
