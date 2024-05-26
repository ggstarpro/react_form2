import React from 'react'
import { UseFormRegister } from 'react-hook-form';

interface InputFiledProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  register: UseFormRegister<any>;
}

function InputFiled({
  name,
  label,
  type,
  placeholder,
  register
}: InputFiledProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className='text-gray-700 text-sm font-bold mb-1 block mt-4'
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className='border rounded w-full shadow py-3 px-4 text-gray-700 leading-tight focus:outline-none'
        {...register(name, { required: "この項目は必須です。" })}
      ></input>
    </div>
  )
}

export default InputFiled