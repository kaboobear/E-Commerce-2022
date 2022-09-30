export interface SendMailParams {
  recipient: string;
  subject: string;
  content: string;
}

export interface EmailWithAcionLinkParams {
  recipient: string;
  username: string;
  link: string;
}
