import { useState } from 'react';

export default function Range({ max, onChange }) {
  const [progress, setProgress] = useState(8);

  const handleChange = (e) => {
    setProgress(e.target.value);
    onChange(e);
  };

  return (
    <div>
      <input
        type="range"
        name="length"
        id="length"
        min="0"
        max={max}
        value={progress}
        step={1}
        onChange={handleChange}
        style={{
          backgroundImage: `linear-gradient(to right, #a4ffaf ${
            (progress / max) * 100
          }%, #18171f ${(progress / max) * 100}%)`,
        }}
      />
    </div>
  );
}
