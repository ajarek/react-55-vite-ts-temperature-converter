import React from 'react'
type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({ onChange }: Props) => {
  return (
    <div className='input'>
      <input
        type='number'
        onChange={onChange}
        step={1}
        max={100}
        min={-100}
        placeholder={'Give the ºC'}
      />
      <h1>ºC</h1>
    </div>
  )
}

export default Input
