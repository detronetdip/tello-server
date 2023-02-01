/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { UserModel } from "../model/userModel";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { StatusCodes } from "../error_codes";
import { ErrorMessages } from "../error_messages";
import axios from "axios";
import http from "http";

async function sentToResourceServer({
  userId,
  username,
  firstName,
  lastName,
}: {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
}) {
  // console.log(username, firstName, lastName);

  // return new Promise((resolve, reject) => {
  //   console.log("started");

  //   const req = http.request(
  //     {
  //       hostname: process.env.ResourceServerURL,
  //       port: 4000,
  //       path: "/api/internal/createUser",
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     },
  //     (res) => {
  //       console.log(`statusCode: ${res.statusCode}`);

  //       res.on("data", (d) => {
  //         resolve(d);
  //       });
  //     }
  //   );
  //   req.on("connect", () => console.log("connected"));
  //   req.on("error", (error) => {
  //     console.error(error);
  //     reject(error);
  //   });

  //   req.write(JSON.stringify({ username, firstName, lastName }));
  //   req.end();
  // });

  return axios
    .post("http://resource_server:4000/api/internal/createUser", {
      userId,
      username,
      firstName,
      lastName,
    })
    .then((r) => {
      return r.data;
    })
    .catch((er) => console.log(er));
}

export async function handelRegistration(req: Request, res: Response) {
  const { email, username, password, firstName, lastName } = req.body;
  const salt = bcrypt.genSaltSync(10);
  try {
    const userId = uuidv4();
    const USER = new UserModel({
      email: email,
      password: bcrypt.hashSync(password, salt),
      uid: userId,
    });

    const response = await sentToResourceServer({
      userId,
      username,
      firstName,
      lastName,
    });
    console.log(response);

    await USER.save().then((_e: object) => {
      res.status(StatusCodes.Success).json({
        code: StatusCodes.Success,
        msg: ErrorMessages.Successfull,
      });
    });
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.ServerError).json({
      msg: ErrorMessages.ServerError,
      code: StatusCodes.InternalServerError,
    });
  }
}
