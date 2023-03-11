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

  const multiSelectData: Array<{label:string,value:string,bgColor:string,textColor:string}> = [
    {
      label:"Engineering",
      value:"Engineering",
      bgColor:"#FF0660",
      textColor:"#FFFFFF"
    },
    {
      label:"Sports",
      value:"Sports",
      bgColor:"#416FEC",
      textColor:"#FFFFFF"
    }
  ]

  return (
    <main className={styles.main}>
      <NaiveButton text={'Follow'} textColor={'white'} backgroundColor={'blue'} buttonRef = {ref} onClick={handleClick}/>
      
      <NaiveMultiSelect labelText={'test'} nothingFoundText={'test'} placeholderText={'hi'} data={multiSelectData}></NaiveMultiSelect>
      
    </main>
  )
}
