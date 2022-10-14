import { emailTemplateLayout } from './blocks/layout';

interface TemplateContentProps {
  text: string;
  buttonText: string;
  username: string;
  link: string;
}

export const callToActionTemplate = ({
  text,
  buttonText,
  username,
  link,
}: TemplateContentProps) =>
  emailTemplateLayout(`
  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
    <tr>
      <td>
        <h3>Hi ${username},</h3>
        <p>${text}</p>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
          <tbody>
            <tr>
              <td align="left">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr>
                      <td> <a href="${link}" target="_blank">${buttonText}</a> </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <p>Vist our website to see more amazing products, we sure that you will find something you really like</p>
        <p class="last">Good luck! See you soon.</p>
      </td>
    </tr>
  </table>
`);
