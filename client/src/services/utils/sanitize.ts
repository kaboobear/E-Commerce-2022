export const sanitize = (str: string): string =>
  str
    .replace(/(<([^>]+)>)/gi, '')
    .replace('"', '')
    .replace(/[\n\r]/g, '');
