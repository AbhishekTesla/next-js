import Head from 'next/head'
import ArticleList from '@/components/ArticleList'

export default function Home({articles}) {
  // console.log(articles);
  return (<>
      <div>
        <Head>
          <title>Home</title>
        </Head>
        
      </div>
    <ArticleList articles={articles} />
    </>
  )
}

// Data Fetching
//getStaticProps (Static Site Generation) from a page, Next.js will pre-render this page at build time using the props returned by getStaticProps.

export const getStaticProps = async ()=>{
const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)

const articles = await res.json()

return {
  props:{
   articles
  }
}
}
