import Link from 'next/link'
import { auth } from '@clerk/nextjs'

export default function Home() {
  const { userId } = auth()
  let href = userId ? '/journal' : '/new-user'

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">The best joutnal app, period.</h1>
        <p className="text-2x text-white/60 mb-4">
          this is the best app for tracking your mood throughout your life. All
          you have to do is to be honest.
        </p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
