import React from 'react'
type Props = {
  
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({onChange}:Props) => {
  return (
    <div>
      <input 
      type="number" 
      onChange={onChange} 
      step={1}
      placeholder={'Give the steps celsiusa'} 
      />
    </div>
  )
}

export default Input
