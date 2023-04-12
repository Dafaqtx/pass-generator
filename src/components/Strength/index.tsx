import './Strength.css';

import cn from 'classnames';
import { FC } from 'react';

import { StrengthEnum } from '@/types';
import { getStrength } from '@/utils';

interface StrengthProps {
  password: string;
}

export const Strength: FC<StrengthProps> = ({ password }) => {
  const strength = getStrength(password);

  return (
    <div className="Strength">
      <div className="Strength__text">Strength</div>
      <div className="Strength__value">
        <span>{StrengthEnum[strength]}</span>
        <div className={cn('Strength__indicators', `Strength__indicators-${strength}`)}>
          {[1, 2, 3, 4].map((val) => (
            <div
              key={val}
              className={cn('Strength__indicator', {
                'Strength__indicator--filled': val <= strength,
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Strength;
