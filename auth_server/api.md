# API Documentation

\*_`Every Path should start with server URL`_

- Auth API
  - [Registration API](#registration-api)
  - [Login API]()
  - [Refresh Token API]()

## Registration API

This API is used for new user registration and only accessible from client domain.

- Path : `/api/v1/registration`
- Method: `POST`
- Param: `email,username,password`
- Authentication: `Not Needed`

A sample request is shown [below](*1000) using [axios](https://axios-http.com/)

```
 axios.post(
    "https://server.com/api/v1/registration",
    {
        email: mail@mail.com,
        username: username,
        password: password
    }
 );
```
sample response
```
{
    data:{
        accepted: true,
        code: 1006,
        msg: "Successfuly registered"
    }
}
```













<hr/>
<hr/>

# Status Codes

### HTTP Status Codes

- 200
  > The request succeeded.
- 202
  > The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request.
- 204
  > There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.
- 400
  > The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
- 401
  > Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
- 403
  > The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike `401 Unauthorized`, the client's identity is known to the server.
- 404
  > The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of `403 Forbidden` to hide the existence of a resource from an unauthorized client.
- 405
  > The request method is known by the server but is not supported by the target resource
- 409
  > This response is sent when a request conflicts with the current state of the server or database.
- 422
  > The request was well-formed but was unable to be followed due to semantic errors.
- 415
  > The media format of the requested data is not supported by the server, so the server is rejecting the request.
- 500
  > The server has encountered a situation it does not know how to handle.

### Responce Status Codes
 * 1000
   > A access token is required but got none. In this situation client need to authenticate with the server to obtain new token. 
 * 1001
   > A access token is required but got none and also could not get the refresh token. In this situation client need to authenticate with the server to obtain new set of token. 
 * 1002
   > Current authentication token is malformed of has expired.
 * 1003
   > Could no get enough data to proccess the request or client has sent less amount of data.
 * 1004
   > Data sent by the client is malformed.
 * 1005
   > Requested resourse is already present in the server.
