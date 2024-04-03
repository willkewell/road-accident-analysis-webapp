import React from 'react'

//Global filter implementation for field search
export const GlobalFilter = ({ filter, setFilter}) => {
  return (
    <span>
        Search Fields: {' '}
        <input value={filter || ''} onChange={e => setFilter(e.target.value)} />
    </span>
  )
}
