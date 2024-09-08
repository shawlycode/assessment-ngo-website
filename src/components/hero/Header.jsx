
import { Link } from 'react-router-dom';
import BtnDonate from '../btn/BtnDonate'
import Styles from '../modules/Styles.module.css'
import { FaPlay } from "react-icons/fa";

export default function Header() {
  return (
    <section className='h-screen py-20 px-60 mb-10'>

      <div className="mx-auto md:shrink-0">
        <div className='md:shrink '>
          <h1 className=' lg:text-5xl lg:leading-loosed  sm:text-xl md:text-3xl text-black font-semibold  '>Great futures are built  <br />with a small charity</h1>
          <p className='lg:font-semibold text-gray-500 lg:w-full py-4 text-xl md: font-normal text-balance md:w-full'>The world's largest social fundraising platform, <br />optimized for your charity in a more easy way</p>
        </div>
      </div>

    </section>
  )
}
