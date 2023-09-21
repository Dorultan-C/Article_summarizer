import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-centre w-full mb-10 pt-3'>
        <img 
          src={logo} 
          alt='logo site'
          className='w-28 object-contain' />
        <button 
          type='button'
          onClick={() => window.open('https://github.com/Dorultan-C/Article_summarizer')} 
          className='black_btn'>GitHub</button>
      </nav>
      <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden' /> 
      <span className='orange_gradient'>OpenAI GPT-4 </span>
       </h1>
       <h2 className='desc'>With sums you can summarize your article, more compact and easy to comprehend.
       <br />Give it a go!</h2>
      </header>
  )
}

export default Hero