import { callToActionTemplate } from './variants/call-to-action.template';

interface ctaTemplateProps {
  username: string;
  link: string;
}

export const confirmEmailTemplate = ({ username, link }: ctaTemplateProps) =>
  callToActionTemplate({
    username,
    link,
    text: "We've heard that you want to confirm your email, so just click the button below, and we do the rest",
    buttonText: 'Confirm Email',
  });
