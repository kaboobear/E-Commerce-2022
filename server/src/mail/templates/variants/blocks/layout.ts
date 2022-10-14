import { emailTemplateFooter } from './footer';
import { emailTemplateStyles } from './styles';

export const emailTemplateLayout = (content: string) => `
  <!doctype html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      ${emailTemplateStyles}
    </head>
    <body>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
          <td>&nbsp;</td>
          <td class="container">
            <div class="content">
              <table role="presentation" class="main">
                <tr>
                  <td background="https://www.londonperfect.com/blog/wp-content/uploads/2019/11/A-Guide-To-Kensington-Church-Street-by-London-Perfect1.jpg" style="background:#2a3448 url(https://www.londonperfect.com/blog/wp-content/uploads/2019/11/A-Guide-To-Kensington-Church-Street-by-London-Perfect1.jpg) no-repeat center center / cover;background-position:center center;background-repeat:no-repeat;padding:0px;vertical-align:top;" height="300">
                </tr>
                <tr>
                  <td class="wrapper">
                    ${content}
                  </td>
                </tr>
              </table>
              ${emailTemplateFooter}
            </div>
          </td>
          <td>&nbsp;</td>
        </tr>
      </table>
    </body>
  </html>
`;
