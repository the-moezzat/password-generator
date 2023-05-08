import { useState } from 'react';
import { Copy } from '@phosphor-icons/react';
import { usePassword } from '../store/usePassword';

export default function PasswordField() {
  const [isCopied, setIsCopied] = useState(false);

  const { password } = usePassword();

  const handleClick = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="bg-stone-800 p-5 flex justify-between items-center">
      <p
        className={`${
          password ? 'text-stone-100' : 'text-stone-500'
        } font-bold text-xl`}
        aria-label="password"
      >
        {password || 'P4$5W0rD!'}
      </p>
      <div className="flex gap-2 text-green-500">
        {isCopied && <p>Copied</p>}
        <button
          className="hover:text-stone-100"
          onClick={handleClick}
          aria-label="copy"
        >
          <Copy size={24} weight="regular" />
        </button>
      </div>
    </div>
  );
}
