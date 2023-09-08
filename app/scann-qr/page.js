"use client"
import { useEffect, useState } from 'react'
import { useQRCode } from 'next-qrcode';
import Link from 'next/link';
import { QrReader } from 'react-qr-reader';

const page = () => {
    const [data, setData] = useState('No result');
    return (
        <main className=" w-[100%]  items-center flex flex-col  h-[100vh] bg-slate-800 border-4 border-transparent border-t-indigo-500">

            <div className=' w-full flex flex-col max-w-[500px] mt-5 gap-2 '>
                <h1 className=' font-mono text-5xl text-center'> QR Code <span className=' text-indigo-500'>Scanner</span></h1>
                <p className=' text-indigo-500 font-serif text-2xl text-center'>Scan a QR Code for getting  content  <Link href="/" className=' pl-2'>
            <span className='text-indigo-100 underline hover:text-indigo-400' >
              Genrate QR
            </span>
          </Link></p>
                <div className='flex flex-col  items-center'>
                    <QrReader className='w-full max-w-[400px] h-full max-h-[400px]'
                        onResult={(result, error) => {
                            if (!!result) {
                                setData(result?.text);
                            }

                            if (!!error) {
                                console.info(error);
                            }
                        }}
                        style={{ width: '100%'}}
                    />
                    <p className=' text-lg text-center'>{data}</p>
                </div>

            </div>


            {/* <button className='w-[200px] h-[40px] bg-indigo-950 rounded-lg text-xl'  >Genrate QR Code</button> */}


        </main>
    )
}

export default page



