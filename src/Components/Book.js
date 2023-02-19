import React, { useState } from 'react'
import { data } from '../data'
import { test } from '../test'

const Book = () => {

    return (
        <>
            <h2 className='flex justify-center text-3xl my-5 '>Mes ouvrages</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mx-6'>
                {data.map((data) => (
                    <div key={data.id} className="max-w-sm rounded overflow-hidden shadow-lg ">
                        <img className='h-60 mx-auto' src={data.image} alt="img-text" />
                        <div className='font-bold mt-4 px-3'>
                            {data.title}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Book