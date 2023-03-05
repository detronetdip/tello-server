enum StatusCodes {
  // http status codes
  Success = 200,
  Accepted = 202,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  Conflict = 409,
  UnprocessableEntity = 422,
  UnsupportedMediaType = 415,
  ServerError = 500,
  // --------------------
  // server status codes
  // --------------------
  // success indication codes should present within 2*** level
  RegistrationSuccessful = 2000,
  AccountVerificationPending = 2001,
  // Invalidity indication codes should present within 3*** level
  InvalidToken = 3000,
  InsufficientArguments = 3001,
  InvalidFormat = 3002,
  InvalidCredential = 3003,
  MismatchData=3004,
  // Not found indication and token error codes should present within 4*** level
  AccessTokenNotFound = 4000,
  RefreshTokenNotFound = 4001,
  ValidAccessTokenError = 4002,
  TokenVersionMissMatch = 4003,
  TokenGenerationSuccessfull = 4004,
  // Internal error indication codes should present within 5*** level
  InternalServerError = 5000,
  // Duplication error indication codes should present within 5*** level
  AlredyInUse = 6000,
}
export { StatusCodes };
