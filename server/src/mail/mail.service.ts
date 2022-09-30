import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { resetPasswordTemplate } from "./templates/reset-password";
import { PasswordResetMailParams, SendMailParams } from "./types";

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
  }: PasswordResetMailParams) {
    this.sendMail({
      recipient,
      subject: "Reset Your Password",
      content: resetPasswordTemplate({ username, link }),
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
