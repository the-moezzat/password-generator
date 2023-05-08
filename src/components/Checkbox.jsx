import { useState } from 'react';
import { Check } from '@phosphor-icons/react';

export default function Checkbox({ label, onChange, checked }) {
  const [isChecked, setIsChecked] = useState(checked || false);

  return (
    <label className="flex items-center cursor-pointer gap-4">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            onChange(e);
          }}
        />
        <div
          className={`w-5 h-5 border border-stone-100 flex items-center justify-center text-stone-900 ${
            isChecked ? 'bg-green-500' : 'bg-stone-900'
          }`}
        >
          {isChecked && <Check size={18} weight="bold" />}
        </div>
      </div>
      <span className="text-stone-100 font-bold text-lg ">{label}</span>
    </label>
  );
}
