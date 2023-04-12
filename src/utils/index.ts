import { Fields, Rules } from '@/types';

export const getStrength = (password: string): 1 | 2 | 3 | 4 => {
  if (password && password.length === 1 && password.length <= 5) {
    return 1;
  } else if (password && password.length >= 6 && password.length <= 10) {
    return 2;
  } else if (password && password.length > 10) {
    return 3;
  } else if (password && password.length > 12) {
    return 4;
  } else {
    return 1;
  }
};

export const generatePassword = ({
  passwordLength = 10,
  rules,
}: {
  passwordLength?: number;
  rules: Rules;
}) => {
  const data = {
    lowerCaseAlphabet: 'abcdefghijklmnopqrstuvwxyz',
    upperCaseAlphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*?{}[]()|/\\\'"`~,;:.<>',
  };

  let charset = '';

  (Object.keys(rules) as Fields[])
    .filter((key: Fields) => rules[key])
    .forEach((key) => (charset += data[key]));

  let generatedPassword = '';
  for (let i = 0, n = charset.length; i < passwordLength; ++i) {
    generatedPassword += charset.charAt(Math.floor(Math.random() * n));
  }

  return generatedPassword;
};
