import ArticleStyles from '../../../styles/Article.module.css'
import { useRouter } from "next/router"
import baseUrl from '@/config/baseUrl'
import Meta from '@/components/Meta'
function article({article}) {
    // const router = useRouter();
    // const {id} = router.query;

  return (<>
  <Meta  title={`Article ${article.id}`} />
  
  <div className={ArticleStyles.card} >
    
   <h1 >{article.name}</h1>
   <img className={ArticleStyles.img} src={article.pic} alt="" />
  </div>
  </>
  )
}

export default article

export async function getServerSideProps(context) {
  const res = await fetch(`${baseUrl}/api/userarticle/${context.params.id}`)
  const article = await res.json()

  

  return {
   props: {
    article
   }// will be passed to the page component as props
  }
}

