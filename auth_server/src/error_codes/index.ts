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
  UnprocessableEntity=422,
  UnsupportedMediaType = 415,
  ServerError = 500,
  // --------------------
  // server status codes
  // --------------------
  AccessTokenNotFound = 1000,
  RefreshTokenNotFound = 1001,
  InvalidToken = 1002,
  InsufficientArguments=1003,
  InvalidFormat=1004,
  AlredyInUse=1005,
  RegistrationSuccessful=1006,
  InternalServerError=5000
}
export { StatusCodes };
