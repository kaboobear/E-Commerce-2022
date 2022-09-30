export interface SendMailParams {
  recipient: string;
  subject: string;
  content: string;
}

export interface PasswordResetMailParams {
  recipient: string;
  username: string;
  link: string;
}
