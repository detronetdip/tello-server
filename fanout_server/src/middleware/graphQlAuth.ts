import { GraphQLError } from "graphql";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { verifyToken } from "../utils/token";

export const graphQlAuth = async ({ req, res }) => {
  const { accessToken } = req.cookies;
  if (accessToken && !verifyToken(accessToken)) {
    throw new GraphQLError("User Not Authenticate", {
      extensions: {
        code: StatusCodes.InvalidToken,
        msg: ErrorMessages.TokenExpired,
        http: {
          status: 401,
        },
      },
    });
  }
  if (!accessToken) {
    throw new GraphQLError("User Not Authenticate", {
      extensions: {
        code: StatusCodes.InvalidToken,
        msg: ErrorMessages.TokenExpired,
        http: {
          status: 401,
        },
      },
    });
  } else {
    return req;
  }
};
