const newLineCharacters = '(&#xA;|\\\\n|\\\\r)+';
const trimStartRegex = new RegExp(`^${newLineCharacters}`, 'gm');
const trimEndRegex = new RegExp(`${newLineCharacters}$`, 'gm');

export const sanitizeMarkdown = (string?: string) =>
  string
    // trim start and end of string
    ?.trim()
    // trim start of each line in string
    ?.replace(trimStartRegex, '')
    // trim end of each line
    ?.replace(trimEndRegex, '')
    // replace new line characters with <br>
    ?.replace(/&#xA;/g, '<br>');
