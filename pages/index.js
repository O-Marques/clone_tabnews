import Image from 'next/image';

function Home() {
    return(
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Meet My Cat!</h1>
      <Image src="/my_cat.jpg" width={500} height={500} />
    </div>
    )
}

export default Home
