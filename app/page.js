"use client"
import { useEffect, useState } from 'react'
import { useQRCode } from 'next-qrcode';
import Link from 'next/link';


export default function Home() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const { Canvas, SVG, Image } = useQRCode();
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((pre) => !pre)
  }
  const Reset = () => {
    setToggle((pre) => !pre)
    setName("")
    setEmail("")
    setPhone("")
  };

  return (
    <main className=" w-[100%]  items-center flex flex-col  h-[100vh] bg-slate-800 gap-5 border-4 border-transparent border-t-indigo-500">

      <div className=' w-full flex flex-col max-w-[500px] mt-10 gap-5 '>
        <h1 className=' font-mono text-5xl '> QR Code <span className=' text-indigo-500 text-center'>Generator</span></h1>
        <p className=' text-indigo-500 font-serif text-2xl text-center'>Genrate a QR Code for sharing your content
          <Link href="scann-qr" className=' pl-2'>
            <span className='text-indigo-100 underline hover:text-indigo-400' >
              Scan QR
            </span>
          </Link>
        </p></div>
      <div className='w-full max-w-[500px] gap-2 flex flex-col text-black'>

        <input type="text" placeholder='Name' className='w-full h-10 px-5 rounded-md opacity-60 text-lg focus:bg-white' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='Email' className='w-full h-10 px-5 rounded-md opacity-60 text-lg' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='Phone' className='w-full  h-10 px-5 rounded-md opacity-60 text-lg' value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button className='w-[200px] h-[45px] bg-indigo-500 rounded-lg text-xl hover:bg-indigo-600 hover:w-[220px] hover:text-2xl transition-all' onClick={() => handleClick()} >Genrate QR Code</button>

      {toggle && <div className="">

        <Image
          // text={JSON.stringify({name,email,phone})}
          text={`Name:${name} Email:${email} Phone:${phone}`}
          options={{
            type: 'image/jpeg',
            quality: 0.3,
            errorCorrectionLevel: 'M',
            margin: 3,
            scale: 4,
            width: 200,
            color: {
              dark: '#0000',
              light: '#ffffff',
            },
          }}
        />
      </div>}
      <button className='w-[200px] h-[45px] bg-indigo-500 rounded-lg text-xl hover:bg-indigo-600 hover:w-[220px] hover:text-2xl transition-all' onClick={() => Reset()} >Reset</button>
    </main>
  )
}
