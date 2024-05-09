'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Player } from '@lottiefiles/react-lottie-player'

export function Hero() {
  return (
    <div className='w-[100vw]'>
      <div className='w-full h-[80vh] bg-blue-200 bg-hero-pattern'>
        <div className='flex flex-col items-center justify-center h-full space-y-6'>
          <div>
            <Player
              autoplay
              loop
              src='/animations/coin_animation.json'
              style={{ height: '150px', width: '150px' }}
            />
          </div>
          <h1 className='text-5xl font-bold text-center text-black'>
            HodlCoin
          </h1>
          <p className='text-lg text-center text-black'>
            The best solution for staking and earning
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 pb-12'>
            <Link href='/createVault'>
              <Button>Create Vault</Button>
            </Link>
            <Link href='/explorer'>
              <Button>Play the game</Button>
            </Link>
          </div>
          <div className='flex flex-row space-x-2 items-center'>
            <p>A project by</p>
            <Image
              src='/logo-animated.gif'
              alt='Logo'
              width={40}
              height={40}
              className='cursor-pointer py-2 hidden lg:inline-block'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
