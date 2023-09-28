
import{useState, useEffect } from 'react';
import {copy, linkIcon, loader, tick} from '../assets';

const Demo = () => {

  const [article, setArticle] = useState ({
    url:'',
    summary:''
  });

  const handleSubmit= async(e) => {
    alert('Submitted');
  }

  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        <form 
        className='relative flex justify-centre items-centre'
        onSubmit={ handleSubmit }>

          <img 
          src={linkIcon} 
          alt="link-icon"
          className='absolute left-0 my-2 ml-3 w-5' />

          <input 
          type="url"
          placeholder='Please enter a URL'
          value= {article.url}
          onChange={(e) => setArticle ({
            ...article, url: e.target.value
          })}
          required
          className='url_input peer' />

          <button 
          type='submit'
          className='submit_btn
                     peer-focus:border-gray-700 
                     peer-focus:text-gray-700'>
            ↵
          </button>

        </form>
      </div>
    </section>
  )
}

export default Demo