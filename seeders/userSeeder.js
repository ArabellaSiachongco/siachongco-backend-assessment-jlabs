// using password hashing
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const sequelize = require("../config/database");

(async () => {
  // forcing to drop a table hehe
  await sequelize.sync({ force: true });
  const hashedPassword = await bcrypt.hash("password123", 10);
  await User.create({ email: "test@example.com", password: hashedPassword });
  // adding sample email 
  console.log("User seeded: test@example.com / password123");
  process.exit();
})();
