import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

export default function Select({ options, defaultOption, setCategory ,onChange,id}) {
  const[isDark] = useContext(ThemeContext)
  return (
    <select
      name="select"
      id={id}
      className={`cursor-pointer rounded px-2 py-1 ${
        isDark
          ? "border-slate-600 bg-slate-900 text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
          : "border-slate-400 bg-white text-black focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
      }`}
      onChange={onChange}
    >
      <option value="" hidden>
        {defaultOption}
      </option>
      {options.map((option, i) => {
        return (
          <option key={i} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}
