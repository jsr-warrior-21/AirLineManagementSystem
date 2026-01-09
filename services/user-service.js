const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");
const bcrypt = require("bcrypt");
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong in the service layer.");
      throw error;
    }
  }

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1h" });
      return result;
    } catch (error) {
      console.log("Something went wrong in token creation.");
      throw error;
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something went wrong in token validation.", error);
      throw error;
    }
  }

  async signIn(email,plainPassword){
    try {
       // step1 - fetch the user using email
      const user = await this.userRepository.getByEmail(email);

      // step2 - compare incoming plain password with encrypted store password
      const passwordMatch = this.checkPassword(plainPassword,user.password);
      if(!passwordMatch){
        console.log("Password doesn't match.");
        throw {errora:'Incorrect password'};
      }
      // step3 - if the password match then we are going to create new JWT token
      const newJWT = this.createToken({email:user.email,id:user.id});
      return newJWT;

    } catch (error) {
      console.log("Something went wrong in the sign in process.");
      throw error;
    }
  }


  checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
      console.log("Something went wrong in password comparision.");
      throw error;
    }
  }
}

module.exports = UserService;
