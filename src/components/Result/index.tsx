import './Result.css';

import { FC, useCallback } from 'react';
import { toast } from 'react-toastify';

import { ReactComponent as CopyIcon } from './icon-copy.svg';

interface ResultProps {
  password: string;
}
export const Result: FC<ResultProps> = ({ password }) => {
  const handleCopyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(password);
    toast('🫡 Password is copied!');
  }, [password]);

  return (
    <div className="Result">
      <div className="Result__password">{password}</div>
      <button className="Result__copy" onClick={handleCopyToClipboard}>
        <CopyIcon />
      </button>
    </div>
  );
};

export default Result;
