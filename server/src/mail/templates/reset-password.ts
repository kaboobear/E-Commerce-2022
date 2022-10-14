import { callToActionTemplate } from './variants/call-to-action.template';

interface ctaTemplateProps {
  username: string;
  link: string;
}

export const resetPasswordTemplate = ({ username, link }: ctaTemplateProps) =>
  callToActionTemplate({
    username,
    link,
    text: "We've heard that you want to reset your password, so just click the button below, and we do the rest",
    buttonText: 'Reset Password',
  });
