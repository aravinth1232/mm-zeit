import React from 'react'
import Location from './Location'
import FAQ from './Faq'
import Footer from './Footer'
import ContactForm from './ContactForm'
import PageTransiton from './PageTransiton'
// import ConfettiButton from './ConfettiButton'

const Contact = () => {
  return (


    <> 
    
    <PageTransiton >
     <main className='bg-fourth'>
  

  <Location />
  <FAQ />

  <ContactForm />
   

    

    </main>
    <Footer />
  
    </PageTransiton>
    </>

  )
}

export default Contact
