import React from 'react'

export default function QuoteToast({quotes}) {
  return (
    <div className="toast toast-top toast-center z-100">
      <div className="alert alert-info flex flex-col items-center gap-1">
        <p className='font-bold text-center'>{quotes.message}</p>
        <p className='text-[13px] text-[#555]'>- {quotes.author}</p>
      </div>
    </div>
  )
}