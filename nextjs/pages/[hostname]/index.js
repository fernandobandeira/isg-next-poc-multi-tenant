import Link from 'next/link'

export async function getStaticPaths() {
  return { fallback: true, paths: [] }
}

export async function getStaticProps({ params }) {
  const random = Math.random();
  return { 
    props: { random, hostname: params.hostname },
    revalidate: 20,
  }
}

export default ({ random, hostname }) => {
  return (
    <>
      <p>You are in the home page {random} - {hostname}</p>
      <Link href="/test">Go to test page</Link>
    </>
  )
}
