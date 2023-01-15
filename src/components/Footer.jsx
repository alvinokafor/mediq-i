import React from 'react'

export default function Footer() {
  return (
    <section className='outer-container border-t border-[#CFCFD1] pt-5 pb-14'>
        <div className='flex justify-between'>
            <p className='text-grey'>&#169; 2023 Mediq-i</p>

            <div className='flex items-center space-x-4'>
                <img src="/assets/twitter.svg" alt="" />
                <img src="/assets/facebook.svg" alt="" />
                <img src="/assets/linkedin.svg" alt="" />
            </div>
        </div>
    </section>
  )
}
