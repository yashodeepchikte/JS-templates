const bcrypt = require("bcryptjs");

// salting the number is the salting strength
const salt = bcrypt.genSalt(10);

//hashing
const hashedPassword = bcrypt.hash( plainPassword, salt );

// Compairing
const isMatch = bcrypt.compair(testPass, hashedPassword);