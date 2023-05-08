import { PropTypes } from 'prop-types';
import classNames from 'classnames';

export default function Strength({ level }) {
  let indicator = [];

  for (let i = 0; i < 4; i++) {
    const active = i < level;
    const classname = classNames('h-6 w-2', {
      'border-[1px] border-stone-100': !active,
      'bg-red': active && level <= 2,
      'bg-yellow': active && level === 3,
      'bg-green-500': active && level >= 4,
    });
    indicator.push(<div className={classname} key={i}></div>);
  }

  return (
    <div className="bg-stone-900 p-5 flex justify-between items-center">
      <p className="text-stone-400 font-bold text-sm uppercase">Strength</p>
      <div className="flex gap-[6px] items-center">
        <p className="text-stone-100 font-bold text-lg uppercase mr-3">
          {level <= 2 ? 'Weak' : level < 4 ? 'Medium' : 'Strong'}
        </p>
        {indicator}
      </div>
    </div>
  );
}

Strength.propTypes = {
  level: PropTypes.number.isRequired,
};
