const fs = require("fs");
const registration = (req, res) => {
  let { name, email, password, city, } = req.body;
  if (fs.existsSync(`./users/${email}.txt`)) {
    res.render("registration", { errMsg: "Email already registered" });
  } else {
    fs.writeFile(
      `./users/${email}.txt`,
      `${name}\n${email}\n${password}\n${city}`,
      (err) => {
        if (err) {
          res.render("registration", { errMsg: "something went wrong" });
        } else {
          //res.render("registration", { succMsg: "Registered succesfully" });
           res.redirect("/users/welcome/" + email);
        }
      }
    );
  }
};


module.exports = { registration };