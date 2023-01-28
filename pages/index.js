
import ArticleList from '@/components/ArticleList'
import baseUrl from '@/config/baseUrl'
import Meta from '@/components/Meta'

export default function Home({articles}) {
  // console.log(articles);
  return (<>
      <div>
        <Meta title={'Home'} />
        
      </div>
    <ArticleList articles={articles} />
    </>
  )
}

// Data Fetching
//getStaticProps (Static Site Generation) from a page, Next.js will pre-render this page at build time using the props returned by getStaticProps.

export const getStaticProps = async ()=>{
const res = await fetch(`${baseUrl}/api/userarticle`)

const articles = await res.json()

return {
  props:{
   articles
  }
}
}
