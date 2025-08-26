import React from 'react'

export default function ProductCard(){
  return (
    <>
    <section className='relative flex h-screen w-full'>
    <div>
        <img src="./pic1.jpg" alt="" className='w-20 h-20 object-cover'/>
        <h1>Lamborgini</h1>
        <p>fast and secure</p>
    </div>
      <div>
        <img src="./pic2.jpg" alt="" className='w-20 h-20 object-cover'/>
        <h1>Lamborgini</h1>
        <p>fast and secure</p>
    </div>
      <div>
        <img src="./pic3.jpg" alt="" className='w-20 h-20 object-cover'/>
        <h1>Lamborgini</h1>
        <p>fast and secure</p>
    </div>
    </section>
    </>
  )
}
