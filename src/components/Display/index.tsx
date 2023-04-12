/* eslint-disable jsx-a11y/label-has-associated-control */
import './Display.css';

import cn from 'classnames';
import { FC } from 'react';
import ReactSlider from 'react-slider';

import { CHECKBOXES } from '@/App';
import { Rules } from '@/types';

import Strength from '../Strength';
import { ReactComponent as ArrowIcon } from './icon-arrow-right.svg';

interface DisplayProps {
  password: string;
  rangeValue: number;
  rules: Rules;
  onChangeLength(value: number): void;
  onGenerate(): void;
  onChangeRule(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const Display: FC<DisplayProps> = ({
  password,
  rangeValue,
  rules,
  onChangeLength,
  onGenerate,
  onChangeRule,
}) => {
  return (
    <div className="Display">
      <div className="Display__chars">
        <div className="Display__length">Character Length</div>
        <div className="Display__count">{rangeValue}</div>
      </div>
      <ReactSlider
        className="Display__slider"
        marks
        step={1}
        min={1}
        max={20}
        defaultValue={10}
        onChange={onChangeLength}
        renderThumb={(props) => <div {...props} className="Display__slider-thumb" />}
        renderTrack={(props, state) => (
          <div
            {...props}
            className={cn({
              'Display__slider-track': state.index === 1,
              'Display__slider-path': state.index === 0,
            })}
          />
        )}
      />
      <div className="Display__checkboxes">
        {CHECKBOXES.map(({ label, id }) => (
          <div key={id} className="Display__checkbox">
            <input
              name={id}
              id={id}
              type="checkbox"
              checked={rules[id]}
              onChange={onChangeRule}
            />
            <label className="Display__label" htmlFor={id} />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <Strength password={password} />
      <button className="Display__button" onClick={onGenerate}>
        Generate
        <ArrowIcon className="Display__arrow" />
      </button>
    </div>
  );
};

export default Display;
