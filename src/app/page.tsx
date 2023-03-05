'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useRef } from 'react'
import NaiveButton from './components/NaiveButton'

import NaiveMultiSelect from './components/NaiveMultiSelect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const ref = useRef<HTMLButtonElement|null>(null)
  
  const handleClick = () => {
    console.log("clicked")
  }
  return (
    <main className={styles.main}>
      <NaiveButton text={'Follow'} textColor={'white'} backgroundColor={'blue'} buttonRef = {ref} onClick={handleClick}/>
      
      <NaiveMultiSelect labelText={'tset'} nothingFoundText={'test'} placeholderText={'hi'}></NaiveMultiSelect>
      
    </main>
  )
}
