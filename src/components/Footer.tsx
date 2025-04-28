import React from 'react'
import insta from '../../public/instagram.png'
import github from '../../public/github.png'
import linkedin from '../../public/Linkedin.png'
import Image from 'next/image'
function Footer() {
  return (
    <div className='bg-black px-7 py-5 flex justify-between items-center '>
        <p className='opacity-75 text-white '>
        © 2025 Nazirov Ozodbek
        </p>
        <div className='flex gap-5 items-center'>
            <Image src={insta} alt='insta' width={30} height={30}/>
            <Image src={github} alt='insta' width={30} height={30}/>
            {/* <Image src={linkedin} alt='insta' width={30} height={30}/> */}
        </div>
    </div>
  )
}

export default Footer