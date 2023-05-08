import { ArrowRight } from '@phosphor-icons/react';
import Strength from './Strength';
import { usePassword } from '../store/usePassword';
import { strengthChecker } from '../utils/strengthChecker';
import Range from './Range';
import Checkbox from './Checkbox';

export default function Form() {
  const { generate, password, length, changeLength, changeOptions } =
    usePassword();

  const handleGenerate = () => {
    generate(length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-stone-800 p-5 flex flex-col gap-5">
      <div className="flex justify-between text-stone-100">
        Character length
        <p className="text-2xl font-bold text-green-500">{length}</p>
      </div>

      <Range
        max={20}
        onChange={(e) => {
          changeLength(e.target.value);
        }}
      />

      <form onSubmit={handleSubmit}>
        <Checkbox
          label="Include Uppercase Letters"
          name="uppercase"
          onChange={(e) => changeOptions('uppercase', e.target.checked)}
          checked
        />
        <Checkbox
          label="Include Lowercase Letters"
          name="uppercase"
          onChange={(e) => changeOptions('lowercase', e.target.checked)}
          checked
        />
        <Checkbox
          label="Include Numbers"
          name="uppercase"
          onChange={(e) => changeOptions('numbers', e.target.checked)}
          checked
        />
        <Checkbox
          label="Include Symbols"
          name="uppercase"
          onChange={(e) => changeOptions('symbols', e.target.checked)}
          checked
        />
      </form>
      <Strength level={strengthChecker(password)} />
      <button
        className="text-green-700 bg-green-500 flex items-center gap-2 p-3 justify-center font-bold uppercase text-sm tracking-wider hover:bg-stone-800 border-[1px] border-green-500 hover:text-green-500"
        onClick={handleGenerate}
      >
        Generate
        <ArrowRight weight="bold" />
      </button>
    </div>
  );
}
