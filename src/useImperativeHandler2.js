import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const InputComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    clear: () => {
      inputRef.current.value = '';
    }
  }), []);

  return <input ref={inputRef} {...props} />;
});

export default function FormAge() {
    const ref = useRef(null);
  
    function handleClick() {
      ref.current.clear();
    }
  
    return (
      <form>
        <InputComponent placeholder="Enter age" ref={ref} />
        <button type="button" onClick={handleClick}>
          Clear
        </button>
      </form>
    );
  }
