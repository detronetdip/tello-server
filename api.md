# API Documentation

`Every Path should start with server URL`

`Use { withCredentials:true } for each and every request where authentication is needed`

- [Registration API](#registration-api)
- [OTP validation API](#otp-validation-api)
- [Login API](#login-api)
- [Login Validation API](#login-validation-api)
- [Refresh Token API](#regeneration-token-api)
- [Add Friend API](#addfriend-api)
- [Friend request accept API](#friend-request-accept-api)
- [Block unblock API](#block-unblock-api)

## # Registration API

This API is used for new user registration and only accessible from client domain.

- Authentication: `Not Needed`
- Target Server: `Auth`

```http
  POST  /api/v1/registration
```

| Parameter   | Type     | Required | Description       |
| :---------- | :------- | :------- | :---------------- |
| `email`     | `string` | True     | User's email      |
| `username`  | `string` | True     | User's username   |
| `password`  | `string` | True     | User's password   |
| `firstName` | `string` | True     | User's First Name |
| `lastName`  | `string` | True     | User's Last Name  |

A sample request is shown below using [axios](https://axios-http.com/)

```js
axios.post("https://server.com/api/v1/registration", {
  email: "mail@mail.com",
  username: "username",
  password: "password",
  firstName: "firstName",
  lastName: "lastname",
});
```

sample response

```js
{
      code: 200,
      msg: "Successfull",
      data: {
        userId: "qw1232w331t437",
      }
}
```

### Expected status codes are:

| Http codes | Response codes  |
| ---------- | --------------- |
| 200        | 3001, 3002, 200 |
| 409        | 6000            |
| 400        | 6000            |
| 500        | 5000            |

## # OTP validation API

This API is used for verifying account upon registration from client domain.

- Authentication: `Not Needed`
- Target Server: `Auth`

```http
  POST  /api/v1/registration/validate-otp
```

| Parameter | Type     | Required | Description |
| :-------- | :------- | :------- | :---------- |
| `userId`  | `string` | True     | user Id     |
| `otp`     | `string` | True     | OTP         |

A sample request is shown below using [axios](https://axios-http.com/)

```js
axios.post("https://server.com/api/v1/registration/validate-otp", {
  reqId: "friendRequest Id",
});
```

sample response

```js
{
    data:{
        code: 200,
        msg: "Successfull"
    }
}
```

### Expected status codes are:

| Http codes | Response codes |
| ---------- | -------------- |
| 200        | 202,3003       |
| 400        | 3001,3003      |
| 500        | 5000           |

## # Login API

This API is used for user login and only accessible from client domain.

- Authentication: `Not Needed`
- Target Server: `Auth`

```http
  POST  /api/v1/login
```

| Parameter  | Type     | Required | Description     |
| :--------- | :------- | :------- | :-------------- |
| `email`    | `string` | True     | User's email    |
| `password` | `string` | True     | User's password |

A sample request is shown below using [axios](https://axios-http.com/)

```js
axios.post("https://server.com/api/v1/login", {
  email: "mail@mail.com",
  password: "password",
});
```

sample response

```js
{
    data:{
        code: 200,
        msg: "Successfull"
    }
}
```

### Expected status codes are:

| Http codes | Response codes |
| ---------- | -------------- |
| 422        | 3001, 3002     |
| 200        | 3003, 200      |
| 400        | 400            |

## # Login Validation API

This API is used for validating a loggedin user to check wheather the user is logged in or not.

- Authentication: `Needed`
- Target Server: `Auth`

```http
  GET /api/v1/validate
```

| Parameter | Type | Required | Description                      |
| :-------- | :--- | :------- | :------------------------------- |
| Null      | Null | False    | You do not have to pass anything |

A sample request is shown below using [axios](https://axios-http.com/)

```js
axios.get("https://server.com/api/v1/validate");
```

sample response

```js
{
    data:{
      isLogin: true,
      code: 200,
      msg: "Successfull"
    }
}
```

### Expected status codes are:

| Http codes | Response codes |
| ---------- | -------------- |
| 422        | 3001           |
| 401        | 3000           |
| 200        | 200            |

## # Regeneration Token API

This API is used for regenerating new set of token.

- Authentication: `Needed`
- Target Server: `Auth`

```http
  GET /api/v1/regen
```

| Parameter | Type | Required | Description                      |
| :-------- | :--- | :------- | :------------------------------- |
| Null      | Null | False    | You do not have to pass anything |

A sample request is shown below using [axios](https://axios-http.com/)

```js
axios.get("https://server.com/api/v1/regen");
```

sample response

```js
{
    data:{
      msg: "Successfull",
      code: 4003,
    }
}
```

### Expected status codes are:

| Http codes | Response codes   |
| ---------- | ---------------- |
| 200        | 4002, 4003, 4004 |
| 401        | 4001, 3000       |

## # AddFriend API

This API is used for sending friend request and only accessible from client domain.

- Authentication: `Needed`
- Target Server: `Resource`

```http
  POST  /api/v1/addFriend
```

| Parameter  | Type     | Required | Description                                 |
| :--------- | :------- | :------- | :------------------------------------------ |
| `userId`   | `string` | True     | User's id who is sending request            |
| `friendId` | `string` | True     | User's id to whom the request is to be sent |

A sample request is shown below using [axios](https://axios-http.com/)

```js
axios.post("https://server.com/api/v1/addFreind", {
  userId: "userId",
  friendId: "friendId",
});
```

sample response

```js
{
    data:{
        code: 200,
        msg: "Successfull"
    }
}
```

### Expected status codes are:

| Http codes | Response codes |
| ---------- | -------------- |
| 200        | 2000           |
| 400        | 6000,3003      |
| 500        | 5000           |

## # Friend request accept API

This API is used for accepting friend request and only accessible from client domain.

- Authentication: `Needed`
- Target Server: `Resource`

```http
  POST  /api/v1/accept
```

| Parameter | Type     | Required | Description      |
| :-------- | :------- | :------- | :--------------- |
| `reqId`   | `string` | True     | friendRequest Id |

A sample request is shown below using [axios](https://axios-http.com/)

```js
axios.post("https://server.com/api/v1/accept", {
  reqId: "friendRequest Id",
});
```

sample response

```js
{
    data:{
        code: 200,
        msg: "Successfull"
    }
}
```

### Expected status codes are:

| Http codes | Response codes |
| ---------- | -------------- |
| 200        | 2000           |
| 400        | 3003,6000      |
| 500        | 5000           |

## # Block unblock API

This API is used for blocking or unblocking a friend and only accessible from client domain.

- Authentication: `Needed`
- Target Server: `Resource`

```http
  POST  /api/v1/block
```

| Parameter  | Type      | Required | Description                                                  |
| :--------- | :-------- | :------- | :----------------------------------------------------------- |
| `userId`   | `string`  | True     | User's Id                                                    |
| `friendId` | `string`  | True     | User's friend Id                                             |
| `action`   | `Boolean` | True     | `true` or `false` based on we will perform block and unblock |

A sample request is shown below using [axios](https://axios-http.com/)

```js
axios.post("https://server.com/api/v1/block", {
  userId: "User id",
  friendId: "Friend id",
  action: true,
});
```

sample response

```js
{
    data:{
        code: 200,
        msg: "Successfull"
    }
}
```

### Expected status codes are:

| Http codes | Response codes  |
| ---------- | --------------- |
| 200        | 2000            |
| 400        | 3003,6000 , 400 |
| 500        | 5000            |

<hr/>
<hr/>
# Status Codes

### HTTP Codes

| Codes | Description                                                                                                                                                                                                                                                                                                                            |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200   | The request succeeded.                                                                                                                                                                                                                                                                                                                 |
| 202   | The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request.                                                                                                                                                  |
| 204   | There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.                                                                                                                                                                         |
| 400   | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).                                                                                                                             |
| 401   | Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.                                                                                                                                                   |
| 403   | The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike `401 Unauthorized`, the client's identity is known to the server.                                                                                                                 |
| 404   | The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of `403 Forbidden` to hide the existence of a resource from an unauthorized client. |
| 405   | The request method is known by the server but is not supported by the target resource                                                                                                                                                                                                                                                  |
| 409   | This response is sent when a request conflicts with the current state of the server or database.                                                                                                                                                                                                                                       |
| 422   | The request was well-formed but was unable to be followed due to semantic errors.                                                                                                                                                                                                                                                      |
| 415   | The media format of the requested data is not supported by the server, so the server is rejecting the request.                                                                                                                                                                                                                         |
| 500   | The server has encountered a situation it does not know how to handle.                                                                                                                                                                                                                                                                 |

### Response Codes

| Codes | Description                                                                                                                                                                 |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2000  | Operation successfull.                                                                                                                                                      |
| 3000  | Received Invalid token.                                                                                                                                                     |
| 3001  | Did not receive Expected arguments.                                                                                                                                         |
| 3002  | Format of arguments are invalid.                                                                                                                                            |
| 3003  | Received invalid credentials from client.                                                                                                                                   |
| 4000  | A access token is required but got none. In this situation client need to authenticate with the server to obtain new token.                                                 |
| 4001  | A access token is required but got none and also could not get the refresh token. In this situation client need to authenticate with the server to obtain new set of token. |
| 4002  | Current authentication token is malformed or has expired.                                                                                                                   |
| 4003  | Token version is not matching and that's why refresh token can not be generated.                                                                                            |
| 4004  | Token generated successfully.                                                                                                                                               |
| 5000  | Internal Server error.                                                                                                                                                      |
| 6000  | Requested resource is already in use or present in the server.                                                                                                              |
