import React from 'react'

export const Education = () => {
  return (
    <div className="md:mb-5">
        <h1 className="md:scroll-m-20 md:pb-2 md:text-3xl text-sm font-semibold tracking-tight text-blue-500 first:mt-0">Education :</h1>
        {/* section  */}
        <div className='pl-3'>
        {/* Matriculation */}
        <div className='md:mb-2'>
        <h3 className="md:scroll-m-20 text-green-700 md:text-xl text-xs font-semibold tracking-tight">Matriculation</h3>
        {/* sub section  */}
        <div className='md:pl-3 pl-1'>
        <div className='flex gap-1'>
            <h4 className="md:scroll-m-20 md:text-xl text-xxs font-medium tracking-tight">Institute :</h4><p className="md:leading-7 leading-3 md:text-lg text-xxs font-normal [&:not(:first-child)]"> Anglo Model School</p>
        </div>
        <div className='flex gap-1'>
            <h4 className="md:scroll-m-20 md:text-xl text-xxs font-medium tracking-tight">Year Of Complete :</h4><p className="md:leading-7 leading-3 md:text-lg text-xxs font-normal [&:not(:first-child)]"> 2022</p>
        </div>
        <div className='flex gap-1'>
            <h4 className="md:scroll-m-20 md:text-xl text-xxs font-medium tracking-tight">Grade/GPA :</h4><p className="md:leading-7 leading-3 md:text-lg text-xxs font-normal [&:not(:first-child)]">  A-One Grade [85%]</p>
        </div>
        </div>
        </div>
        {/* Intermediate  */}
        <div className='md:mb-2'>
        <h3 className="md:scroll-m-20 text-green-700 md:text-xl text-xs font-semibold tracking-tight">Intermediate</h3>
        {/* sub section  */}
        <div className='md:pl-3 pl-1'>
        <div className='flex gap-1'>
            <h4 className="md:scroll-m-20 md:text-xl text-xxs font-medium tracking-tight">Institute :</h4><p className="md:leading-7 leading-3 md:text-lg text-xxs font-normal [&:not(:first-child)]"> Govt National College</p>
        </div>
        <div className='flex gap-1'>
            <h4 className="md:scroll-m-20 md:text-xl text-xxs font-medium tracking-tight">Year Of Complete :</h4><p className="md:leading-7 leading-3 md:text-lg text-xxs font-normal [&:not(:first-child)]"> 2024</p>
        </div>
        <div className='flex gap-1'>
            <h4 className="md:scroll-m-20 md:text-xl text-xxs font-medium tracking-tight">Grade/GPA :</h4><p className="md:leading-7 leading-3 md:text-lg text-xxs font-normal [&:not(:first-child)]">  A-One Grade [80%]</p>
        </div>
        </div>
        </div>
        {/* Graduation  */}
        <div>
        <h3 className="md:scroll-m-20 text-green-700 md:text-xl text-xs font-semibold tracking-tight">Graduation</h3>
        {/* sub section  */}
        <div className='md:pl-3 pl-1'>
        <div className='flex gap-1'>
            <h4 className="md:scroll-m-20 md:text-xl text-xxs font-medium tracking-tight">Institute :</h4><p className="md:leading-7 leading-3 md:text-lg text-xxs font-normal [&:not(:first-child)]"> University Of Karachi</p>
        </div>
        <div className='flex gap-1'>
            <h4 className="md:scroll-m-20 md:text-xl text-xxs font-medium tracking-tight">Year Of Complete :</h4><p className="md:leading-7 leading-3 md:text-lg text-xxs font-normal [&:not(:first-child)]"> 2028</p>
        </div>
        <div className='flex gap-1'>
            <h4 className="md:scroll-m-20 md:text-xl text-xxs font-medium tracking-tight">Grade/GPA :</h4><p className="md:leading-7 leading-3 md:text-lg text-xxs font-normal [&:not(:first-child)]">  4.5 GPA</p>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
