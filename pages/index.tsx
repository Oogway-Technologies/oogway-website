import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="md:flex flex-col items-center justify-center min-h-screen bg-[#333]">
      <Head>
        <title>Oogway | Your Personalized AI Decision Assistant</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <Header/>
    </div>
  )
}
