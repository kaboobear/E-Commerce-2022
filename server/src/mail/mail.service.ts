import nodemailer, { Transporter } from "nodemailer";
import { confirmEmailTemplate } from "./templates/confirm-email";
import { resetPasswordTemplate } from "./templates/reset-password";
import { EmailWithAcionLinkParams, SendMailParams } from "./types";

class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: "kaboo.bear.test@gmail.com", pass: "vsbgnzrxggrdywhf" },
    });
  }

  public async sendPasswordResetMail({
    recipient,
    username,
    link,
  }: EmailWithAcionLinkParams) {
    this.sendMail({
      recipient,
      subject: "Reset Your Password",
      content: resetPasswordTemplate({ username, link }),
    });
  }

  public async sendConfirmationMail({
    recipient,
    username,
    link,
  }: EmailWithAcionLinkParams) {
    this.sendMail({
      recipient,
      subject: "Confirm Your Email",
      content: confirmEmailTemplate({ username, link }),
    });
  }

  private async sendMail({ recipient, subject, content }: SendMailParams) {
    return this.transporter.sendMail({
      from: "'Kaboo Store' <kaboo.bear.test@gmail.com>",
      to: recipient,
      subject,
      html: content,
    });
  }
}

export { MailService };
