export const confirmEmailTemplate = ({
  username,
  link,
}: {
  username: string;
  link: string;
}) => `
<html>
  <head>
      <style></style>
  </head>
  <body>
      <p>Hi ${username},</p>
      <p>Confirm your email.</p>
      <p> Please, click the link below to confirm your email</p>
      <a href="${link}">Confirm</a>
  </body>
</html>
`;
