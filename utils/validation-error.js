const { StatusCodes } = require("http-status-codes");
const AppError = require("./error-handler");

class validationError extends AppError {
  constructor(error) {
      let errorName = error.name;
    let explanation = [];
    error.errors.array.forEach( (err)=>{
        explanation.push(err.message)
    });
    super(
        errorName,
      "Not able to validate the data sent in the request",
      explanation,
      StatusCodes.BAD_REQUEST
    );
  }
}

module.exports = validationError;
