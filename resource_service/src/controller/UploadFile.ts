import { Request, Response } from "express";
import { google } from "googleapis";
import { Readable } from "stream";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import { userPost } from "./Post";

function bufferToStream(buffer: Buffer) {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);

  return stream;
}
export const UploadFile = async (req: Request, res: Response) => {
  // console.log((req.file.buffer.toString()), "l");
  // const s3 = new AWS.S3({
  //   endpoint: "s3.us-west-004.backblazeb2.com",
  //   region: "us-west-004",
  // });
  // var params = {
  //   Bucket: "tello-storage",
  //   Key: "kino.jpg",
  //   Body: req.file.buffer,
  //   ContentEncoding: 'base64',
  //   ContentType: 'image/jpeg'
  // };
  // s3.putObject(params, function (err, data) {
  //   if (err) console.log(err);
  //   else console.log(data);
  // });
  const GOOGLE_DRIVE_FOLDER_ID = "1Eun27krCg9Pwr4lo3YoONmZjzYF1tFS6";
  let response = null;
  try {
    const { text, userId } = req.body;
    if (req.file) {
      const auth = new google.auth.GoogleAuth({
        keyFile: "./src/config/drive.json",
        scopes: ["https://www.googleapis.com/auth/drive"],
      });
      const drive = google.drive({
        version: "v3",
        auth,
      });
      const metaData = {
        name: req.file.originalname,
        parents: [GOOGLE_DRIVE_FOLDER_ID],
      };
      const media = {
        mimeType: req.file.mimetype,
        body: bufferToStream(req.file.buffer),
      };
      response = await drive.files.create({
        requestBody: metaData,
        media,
        fields: "id",
      });
      response = await userPost({ userId, text, imageUrl: response.data.id });
    } else {
      const post = await userPost({ userId, text });
      response = post;
    }
    res.status(StatusCodes.Success).json({
      statusCode: StatusCodes.Accepted,
      message: ErrorMessages.Successfull,
      response: response,
    });
  } catch (error) {
    console.log(error);
  }
};
