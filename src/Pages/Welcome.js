import React from 'react'
import 'animate.css'

const Welcome = () => {
    return (
        <>
            <div className='flex flex-col mx-auto py-32'>
                <div className='flex justify-center'>
                    <p className='text-3xl animate__animated animate__fadeInLeft'>Bienvenue</p>
                </div>
                <div className='flex justify-center'>
                    <p className='text-3xl animate__animated animate__fadeInRight'>Welcome</p>
                </div>
                <div className='flex justify-center'>
                    <p className='text-3xl animate__animated animate__fadeInLeft'>Willkommen</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mx-5'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-225px-Flag_of_France.svg.png" alt="drapeau france" className='rounded-xl w-56 max-h-32' />
                    <p className='flex justify-center'>Français</p>
                </div>
                <div className='mx-5'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" alt="drapeau anglais" className='rounded-xl w-56 max-h-32' />
                    <p className='flex justify-center'>Anglais</p>
                </div>
                <div className='mx-5'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/langfr-225px-Flag_of_Germany.svg.png" alt="drapeau allemand" className='rounded-xl w-56 max-h-32' />
                    <p className='flex justify-center'>Allemand</p>
                </div>
            </div>
            <div className='flex justify-center my-20'>
                <p className='animate__animated animate__bounceInUp'>Par Espérance François Bulayumi</p>
            </div>
        </>
    )
}

export default Welcome