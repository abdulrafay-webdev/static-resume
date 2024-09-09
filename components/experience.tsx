import React from 'react'

export const Experience = () => {
  return (
    <div>
        <h1 className="md:scroll-m-20 md:pb-2 text-blue-500 md:text-3xl text-sm font-semibold tracking-tight first:mt-0">
        Experience :
      </h1>
      <ol className="md:my-1 md:ml-9 ml-4 md:p-2 list-disc md:text-lg text-xxs font-medium [&>li]:mt-1">
        <li>
          <h4 className="text-green-700 md:text-lg text-xs">BonoQabil Incubation Center :</h4>
          <p className="font-light">
            Sincerely Worked 6 Month as a Senior graphic Designer.
          </p>
        </li>
        <li>
          <h4 className="text-green-700 md:text-lg text-xs">Wordpress Developer :</h4>
          <p className="font-light">
            Sincerely worked 7 Months as a Wordpress web Developer and designs too many websites.
          </p>
        </li>
      </ol>
    </div>
  )
}
