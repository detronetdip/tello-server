export function loginTemplate() {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Noreply@tello</title>
        <style>
          img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%;
          }
          body {
            background-color: #f6f6f6;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
          p {
            line-height: 27px;
          }
          table {
            border-collapse: separate;
            width: 100%;
            padding: 0;
          }
          table td {
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top;
            padding: 5px;
          }
          .container {
            display: block;
            margin: 0 auto !important;
            max-width: 580px;
            padding: 10px;
            width: 580px;
          }
          .content {
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            max-width: 580px;
            padding: 10px;
          }
          .main {
            background: #ffffff;
            border-radius: 3px;
            width: 100%;
          }
          .wrapper {
            box-sizing: border-box;
            padding: 20px;
          }
          .content-block {
            padding-bottom: 10px;
            padding-top: 10px;
          }
          .footer {
            clear: both;
            margin-top: 10px;
            text-align: center;
            width: 100%;
          }
          .footer td,
          .footer p,
          .footer span,
          .footer a {
            color: #999999;
            font-size: 12px;
            text-align: center;
          }
          h1,
          h2,
          h3,
          h4 {
            color: #000000;
            font-family: sans-serif;
            font-weight: 400;
            line-height: 1.4;
            margin: 0;
            margin-bottom: 30px;
          }
          h1 {
            font-size: 35px;
            font-weight: 300;
            text-align: center;
            text-transform: capitalize;
          }
          p,
          ul,
          ol {
            font-family: sans-serif;
            font-size: 15px;
            font-weight: normal;
            margin: 0;
            margin-bottom: 15px;
          }
          p li,
          ul li,
          ol li {
            list-style-position: inside;
            margin-left: 5px;
          }
          a {
            color: #3498db;
            text-decoration: underline;
          }
          .btn {
            box-sizing: border-box;
            width: 100%;
          }
          .btn > tbody > tr > td {
            padding-bottom: 1px;
          }
          .btn table {
            width: auto;
          }
          .btn table td {
            background-color: #ffffff;
            border-radius: 5px;
            text-align: center;
          }
          .btn a {
            background-color: #ffffff;
            border: solid 1px #3498db;
            border-radius: 5px;
            box-sizing: border-box;
            color: #3498db;
            cursor: pointer;
            display: inline-block;
            font-size: 14px;
            font-weight: bold;
            margin: 0;
            padding: 10px 15px;
            text-decoration: none;
            text-transform: capitalize;
          }
          .btn-primary a {
            background-color: #3498db;
            border-color: #3498db;
            color: #ffffff;
          }
          .last {
            margin-bottom: 0;
          }
          .first {
            margin-top: 0;
          }
          .align-center {
            text-align: center;
          }
          .align-right {
            text-align: right;
          }
          .align-left {
            text-align: left;
          }
          .clear {
            clear: both;
          }
          .mt0 {
            margin-top: 0;
          }
          .mb0 {
            margin-bottom: 0;
          }
          .preheader {
            color: transparent;
            display: none;
            height: 0;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            visibility: hidden;
            width: 0;
          }
          .powered-by a {
            text-decoration: none;
          }
          hr {
            border: 0;
            border-bottom: 1px solid #f6f6f6;
            margin: 20px 0;
          }
          @media only screen and (max-width: 620px) {
            table.body h1 {
              font-size: 28px !important;
              margin-bottom: 10px !important;
            }
            table.body p,
            table.body ul,
            table.body ol,
            table.body td,
            table.body span,
            table.body a {
              font-size: 16px !important;
            }
            table.body .wrapper,
            table.body .article {
              padding: 10px !important;
            }
            table.body .content {
              padding: 0 !important;
            }
            table.body .container {
              padding: 0 !important;
              width: 100% !important;
            }
            table.body .main {
              border-left-width: 0 !important;
              border-radius: 0 !important;
              border-right-width: 0 !important;
            }
            table.body .btn table {
              width: 100% !important;
            }
            table.body .btn a {
              width: 100% !important;
            }
            table.body .img-responsive {
              height: auto !important;
              max-width: 100% !important;
              width: auto !important;
            }
          }
          @media all {
            .ExternalClass {
              width: 100%;
            }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
              line-height: 100%;
            }
            .apple-link a {
              color: inherit !important;
              font-family: inherit !important;
              font-size: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
              text-decoration: none !important;
            }
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
              font-size: inherit;
              font-family: inherit;
              font-weight: inherit;
              line-height: inherit;
            }
          }
        </style>
      </head>
      <body>
        <span class="preheader">tello</span>
        <table
          role="presentation"
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="body"
        >
          <tr>
            <td>&nbsp;</td>
            <td class="container">
              <div class="content">
                <table role="presentation" class="main">
                  <tr>
                    <td class="wrapper">
                      <table
                        role="presentation"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                      >
                        <tr>
                          <td>
                            <p style="font-size: 22px; color: #1289bc">
                              <b>Hola!</b>
                            </p>
                            <p>
                              Wellcome to Tello,You have sucessfully created your account.
                            </p>
                            
                            <table class="btn btn-primary">
                              <tbody>
                                <tr>
                                  <td align="left">
                                    <table style="width: 100%">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <a
                                              href="#"
                                              target="_blank"
                                              >Login</a
                                            >
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style="padding: 5px">
                        Plese do not forward this email to others in order to
                        prevent anybody else from accessing your account.
                      </p>
                    </td>
                  </tr>
                </table>
                <div class="footer">
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td class="content-block">
                        <span class="apple-link"
                          >This is an auto generated mail.</span
                        >
                        <br />
                        Do not reply to this email.
                      </td>
                    </tr>
                    <tr>
                      <td class="content-block powered-by">
                        Developed by
                        <a
                          href="mailto:tello.noreply@gmail.com"
                          style="text-decoration: underline"
                          >Devloper</a
                        >.
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </body>
    </html>
    `;
}
export function otpTemplate(otp: string) {
  return `<!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>OTP</title>
      <style>
        img {
          border: none;
          -ms-interpolation-mode: bicubic;
          max-width: 100%;
        }
        body {
          background-color: #f6f6f6;
          font-family: sans-serif;
          -webkit-font-smoothing: antialiased;
          font-size: 14px;
          line-height: 1.4;
          margin: 0;
          padding: 0;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
        p {
          line-height: 27px;
        }
        table {
          border-collapse: separate;
          width: 100%;
          padding: 0;
        }
        table td {
          font-family: sans-serif;
          font-size: 14px;
          vertical-align: top;
          padding: 5px;
        }
        .container {
          display: block;
          margin: 0 auto !important;
          max-width: 580px;
          padding: 10px;
          width: 580px;
        }
        .content {
          box-sizing: border-box;
          display: block;
          margin: 0 auto;
          max-width: 580px;
          padding: 10px;
        }
        .main {
          background: #ffffff;
          border-radius: 3px;
          width: 100%;
        }
        .wrapper {
          box-sizing: border-box;
          padding: 20px;
        }
        .content-block {
          padding-bottom: 10px;
          padding-top: 10px;
        }
        .footer {
          clear: both;
          margin-top: 10px;
          text-align: center;
          width: 100%;
        }
        .footer td,
        .footer p,
        .footer span,
        .footer a {
          color: #999999;
          font-size: 12px;
          text-align: center;
        }
        h1,
        h2,
        h3,
        h4 {
          color: #000000;
          font-family: sans-serif;
          font-weight: 400;
          line-height: 1.4;
          margin: 0;
          margin-bottom: 30px;
        }
        h1 {
          font-size: 35px;
          font-weight: 300;
          text-align: center;
          text-transform: capitalize;
        }
        p,
        ul,
        ol {
          font-family: sans-serif;
          font-size: 15px;
          font-weight: normal;
          margin: 0;
          margin-bottom: 15px;
        }
        p li,
        ul li,
        ol li {
          list-style-position: inside;
          margin-left: 5px;
        }
        a {
          color: #3498db;
          text-decoration: underline;
        }
        .btn {
          box-sizing: border-box;
          width: 100%;
        }
        .btn > tbody > tr > td {
          padding-bottom: 1px;
        }
        .btn table {
          width: auto;
        }
        .btn table td {
          background-color: #ffffff;
          border-radius: 5px;
          text-align: center;
        }
        .btn a {
          background-color: #ffffff;
          border: solid 1px #3498db;
          border-radius: 5px;
          box-sizing: border-box;
          color: #3498db;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: bold;
          margin: 0;
          padding: 10px 15px;
          text-decoration: none;
          text-transform: capitalize;
        }
        .btn-primary a {
          background-color: #3498db;
          border-color: #3498db;
          color: #ffffff;
        }
        .last {
          margin-bottom: 0;
        }
        .first {
          margin-top: 0;
        }
        .align-center {
          text-align: center;
        }
        .align-right {
          text-align: right;
        }
        .align-left {
          text-align: left;
        }
        .clear {
          clear: both;
        }
        .mt0 {
          margin-top: 0;
        }
        .mb0 {
          margin-bottom: 0;
        }
        .preheader {
          color: transparent;
          display: none;
          height: 0;
          max-height: 0;
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          visibility: hidden;
          width: 0;
        }
        .powered-by a {
          text-decoration: none;
        }
        hr {
          border: 0;
          border-bottom: 1px solid #f6f6f6;
          margin: 20px 0;
        }
        @media only screen and (max-width: 620px) {
          table.body h1 {
            font-size: 28px !important;
            margin-bottom: 10px !important;
          }
          table.body p,
          table.body ul,
          table.body ol,
          table.body td,
          table.body span,
          table.body a {
            font-size: 16px !important;
          }
          table.body .wrapper,
          table.body .article {
            padding: 10px !important;
          }
          table.body .content {
            padding: 0 !important;
          }
          table.body .container {
            padding: 0 !important;
            width: 100% !important;
          }
          table.body .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important;
          }
          table.body .btn table {
            width: 100% !important;
          }
          table.body .btn a {
            width: 100% !important;
          }
          table.body .img-responsive {
            height: auto !important;
            max-width: 100% !important;
            width: auto !important;
          }
        }
        @media all {
          .ExternalClass {
            width: 100%;
          }
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
            line-height: 100%;
          }
          .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important;
          }
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
          }
        }
      </style>
    </head>
    <body>
      <span class="preheader">tello</span>
      <table
        role="presentation"
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="body"
      >
        <tr>
          <td>&nbsp;</td>
          <td class="container">
            <div class="content">
              <table role="presentation" class="main">
                <tr>
                  <td class="wrapper">
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                    >
                      <tr>
                        <td>
                          <p>
                            Your One Time Password for verifying your email Id is.
                            <br />
                            <br />
                            <b
                              style="
                                font-size: 22px;
                                color: #1289bc;
                                background-color: #88d4f560;
                                border: 1px solid #1289bc;
                                padding: 0.2rem;
                                border-radius: 7px;
                              "
                              >${otp}</b
                            >
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="padding: 5px; color: #a5a5a58c; font-size: 12px">
                      Plese do not forward this email to others in order to
                      prevent anybody else from accessing your account.
                    </p>
                  </td>
                </tr>
              </table>
              <div class="footer">
                <table
                  role="presentation"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tr>
                    <td class="content-block">
                      <span class="apple-link"
                        >This is an auto generated mail.</span
                      >
                      <br />
                      Do not reply to this email.
                    </td>
                  </tr>
                  <tr>
                    <td class="content-block powered-by">
                      Developed by
                      <a
                        href="mailto:tello.noreply@gmail.com"
                        style="text-decoration: underline"
                        >Tello</a
                      >.
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </td>
          <td>&nbsp;</td>
        </tr>
      </table>
    </body>
  </html>
  `;
}
export function changePasswordNotification(url: string) {
  return `
  <!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      rel="stylesheet"
    />
    <title>OTP</title>
    <style>
      *{
        font-family: 'Poppins', sans-serif;

      }
      img {
        border: none;
        -ms-interpolation-mode: bicubic;
        max-width: 100%;
      }
      body {
        background-color: #dfdfdf;
        font-size: 14px;
        line-height: 1.4;
        margin: 0;
        padding: 0;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      p {
        line-height: 27px;
      }
      table {
        border-collapse: separate;
        width: 100%;
        padding: 0;
      }
      table td {
        font-size: 14px;
        vertical-align: top;
        padding: 5px;
      }
      .container {
        display: block;
        margin: 0 auto !important;
        max-width: 580px;
        padding: 10px;
        width: 580px;
      }
      .content {
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        max-width: 580px;
        padding: 10px;
      }
      .main {
        background: #ffffff;
        border-radius: 3px;
        width: 100%;
      }
      .wrapper {
        box-sizing: border-box;
        padding: 20px;
      }
      .content-block {
        padding-bottom: 10px;
        padding-top: 10px;
      }
      .footer {
        clear: both;
        margin-top: 10px;
        text-align: center;
        width: 100%;
      }
      .footer td,
      .footer p,
      .footer span,
      .footer a {
        color: #999999;
        font-size: 12px;
        text-align: center;
      }
      h1,
      h2,
      h3,
      h4 {
        color: #000000;
        font-weight: 400;
        line-height: 1.4;
        margin: 0;
        margin-bottom: 30px;
      }
      h1 {
        font-size: 35px;
        font-weight: 300;
        text-align: center;
        text-transform: capitalize;
      }
      p,
      ul,
      ol {
        font-size: 15px;
        font-weight: normal;
        margin: 0;
        margin-bottom: 15px;
      }
      p li,
      ul li,
      ol li {
        list-style-position: inside;
        margin-left: 5px;
      }
      a {
        color: #3498db;
        text-decoration: underline;
      }
      .btn {
        box-sizing: border-box;
        width: 100%;
      }
      .btn > tbody > tr > td {
        padding-bottom: 1px;
      }
      .btn table {
        width: auto;
      }
      .btn table td {
        background-color: #ffffff;
        border-radius: 5px;
        text-align: center;
      }
      .btn a {
        background-color: #ffffff;
        border: solid 1px #3498db;
        border-radius: 5px;
        box-sizing: border-box;
        color: #3498db;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: bold;
        margin: 0;
        padding: 10px 15px;
        text-decoration: none;
        text-transform: capitalize;
      }
      .btn-primary a {
        background-color: #3498db;
        border-color: #3498db;
        color: #ffffff;
      }
      .last {
        margin-bottom: 0;
      }
      .first {
        margin-top: 0;
      }
      .align-center {
        text-align: center;
      }
      .align-right {
        text-align: right;
      }
      .align-left {
        text-align: left;
      }
      .clear {
        clear: both;
      }
      .mt0 {
        margin-top: 0;
      }
      .mb0 {
        margin-bottom: 0;
      }
      .preheader {
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        visibility: hidden;
        width: 0;
      }
      .powered-by a {
        text-decoration: none;
      }
      hr {
        border: 0;
        border-bottom: 1px solid #f6f6f6;
        margin: 20px 0;
      }
      @media only screen and (max-width: 620px) {
        table.body h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
        table.body p,
        table.body ul,
        table.body ol,
        table.body td,
        table.body span,
        table.body a {
          font-size: 16px !important;
        }
        table.body .wrapper,
        table.body .article {
          padding: 10px !important;
        }
        table.body .content {
          padding: 0 !important;
        }
        table.body .container {
          padding: 0 !important;
          width: 100% !important;
        }
        table.body .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        table.body .btn table {
          width: 100% !important;
        }
        table.body .btn a {
          width: 100% !important;
        }
        table.body .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
      @media all {
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
        
      }
    </style>
  </head>
  <body>
    <span class="preheader">tello</span>
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="body"
    >
      <tr>
        <td>&nbsp;</td>
        <td class="container">
          <div class="content">
            <table role="presentation" class="main">
              <tr>
                <td class="wrapper">
                  <table role="presentation" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        Hi Unknown, password for your tello account just have
                        changed, if it was not by you please change your
                        password
                        <a href="${url}">here</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <p style="padding: 5px; color: #6464648c; font-size: 11px">
                    Plese do not forward this email to others in order to
                    prevent anybody else from accessing your account.
                  </p>
                </td>
              </tr>
            </table>
            <div class="footer">
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
              >
                <tr>
                  <td class="content-block">
                    <span class="apple-link"
                      >This is an auto generated mail.</span
                    >
                    <br />
                    Do not reply to this email.
                  </td>
                </tr>
                <tr>
                  <td class="content-block powered-by">
                    Developed by
                    <a
                      href="mailto:tello.noreply@gmail.com"
                      style="text-decoration: underline"
                      >Tello</a
                    >.
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>

  `;
}
