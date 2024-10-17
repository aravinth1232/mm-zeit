import React from 'react'

const Location = () => {
  return (
    <div>
      <section className="bg-primary px-5 py-16 pt-24 flex flex-col justify-center items-center ">

      <h2 className=" text-4xl font-semibold text-center  text-tertiary pt-4 font-karla pb-8 ">
            Reach us at
      </h2>   

        <div className="w-full ">
        <iframe 
        className='w-full mx-auto lg:w-[80%] h-48 lg:h-96'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.367191691152!2d80.1804614732782!3d13.075899487249119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261b47de0971b%3A0x199885c89b448ccf!2smotomod!5e0!3m2!1sen!2sin!4v1729046432782!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      
    </section>
    </div>
  )
}

export default Location
