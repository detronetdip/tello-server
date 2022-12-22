import { Request, Response } from "express";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import AWS from "../config/AWS";

export const UploadFile = (req: Request, res: Response) => {
//   console.log((req.file.buffer.toString()), "l");
  const s3 = new AWS.S3({
    endpoint: "s3.us-west-004.backblazeb2.com",
    region: "us-west-004",
  });
  var params = {
    Bucket: "tello-storage",
    Key: "kino.jpg",
    Body: req.file.buffer,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg'
  };
  s3.putObject(params, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
  });
  res.status(StatusCodes.Success).json({
    statusCode: StatusCodes.Accepted,
    message: ErrorMessages.Successfull,
  });
};
