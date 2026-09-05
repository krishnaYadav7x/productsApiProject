import React from 'react'

export default function Select({ options, defaultOption, setCategory }) {
  return (
    <select
      name="select"
      id="select"
      className="cursor-pointer rounded border px-2 py-1"
      onChange={(e)=>{
        setCategory(e.target.value)
      }}
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
