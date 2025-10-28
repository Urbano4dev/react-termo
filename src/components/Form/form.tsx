'use client';

import { useRef, useState } from 'react';
import Input from '../Input/input';

const inputs = [0, 1, 2, 3, 4];

export default function Form() {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [writed, setWrited] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const value = e.target.value.toUpperCase();

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    setWrited(value);
  }

  function handleKeydown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key === 'Backspace') {
      e.preventDefault();

      if (inputRefs.current[index]) {
        inputRefs.current[index]!.value = '';
      }

      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  }

  return (
    <form className="flex gap-2">
      {inputs.map((i) => (
        <Input
          key={i}
          ref={(el) => {
            inputRefs.current[i] = el;
          }}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeydown(e, i)}
        />
      ))}
    </form>
  );
}
