import React from 'react'

const Controls = () => {
  return (
    <>
      <section className='w-32 mt-10 mx-auto grid grid-cols-3 gap-2 '>
       
      <div  className='border bg-white rounded-full aspect-square ring ring-slate-500/20'></div>
      <div className='border bg-teal-500 rounded-full aspect-square  ring ring-slate-500/20'></div>
      <div className='border bg-red-500 rounded-full aspect-square  ring ring-slate-500/20'></div>
      <div className='border bg-sky-500 rounded-full aspect-square  ring ring-slate-500/20'></div>
      <div className='border bg-orange-500 rounded-full aspect-square  ring ring-slate-500/20'></div>
      <div className='border bg-amber-300 rounded-full aspect-square  ring ring-slate-500/20'></div>

      
   
   </section>
    <div className='flex gap-5 h-8 max-w-sm mx-auto mt-10'>
        <div className='rounded-md w-full bg-blue-500 grid place-content-center'>Previous</div>
        <div className='rounded-md w-full bg-blue-500 grid place-content-center'>Next</div>
      </div>
      
    </>
  
  )
}

export default Controls