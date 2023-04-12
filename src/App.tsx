import './App.css';

import { FC, useState } from 'react';

import { Display, Result } from './components';
import { generatePassword } from './utils';
import { Fields, Rules } from './types';

interface Checkbox {
  label: string;
  id: Fields;
}

export const CHECKBOXES: Checkbox[] = [
  {
    label: 'Include Uppercase Letters',
    id: 'upperCaseAlphabet',
  },
  {
    label: 'Include Lowercase Letters',
    id: 'lowerCaseAlphabet',
  },
  {
    label: 'Include Numbers',
    id: 'numbers',
  },
  {
    label: 'Include Symbols',
    id: 'symbols',
  },
];

const App: FC = () => {
  const [rules, setRules] = useState<Rules>({
    upperCaseAlphabet: true,
    lowerCaseAlphabet: false,
    numbers: false,
    symbols: false,
  });
  const [password, setPassword] = useState(() => {
    const newPassword = generatePassword({
      passwordLength: 10,
      rules,
    });

    return newPassword;
  });
  const [rangeValue, setRange] = useState(password.length);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword({
      passwordLength: rangeValue,
      rules,
    });
    setPassword(newPassword);
  };

  const handleChangeRule = ({
    target: { name, checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setRules((prev) => {
      const newRules = { ...prev, [name]: checked };
      return Object.values(newRules).every((val) => !val) ? prev : newRules;
    });
  };

  return (
    <div className="App">
      <div className="App__title">Password Generator</div>
      <Result password={password} />

      <Display
        password={password}
        rangeValue={rangeValue}
        onChangeLength={setRange}
        onGenerate={handleGeneratePassword}
        onChangeRule={handleChangeRule}
        rules={rules}
      />
    </div>
  );
};

export default App;
