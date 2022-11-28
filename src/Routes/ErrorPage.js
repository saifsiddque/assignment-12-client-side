import React from 'react'
import { useRouteError } from 'react-router-dom'




const ErrorPage = () => {
  const error = useRouteError()
  console.log(error);

  return (
    <>
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
        {error && (
          <div c>
            <p className='text-red-500 text-center'>
              {error.statusText || error.massages} <br />
              {error.status}
              </p>
          </div>
        )}
      </div>
    </>
  )
}

export default ErrorPage
