import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-gradient-radial-fc-100-50 from-[#5c31ff]/20 to-[#5c31ff]/10">
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
