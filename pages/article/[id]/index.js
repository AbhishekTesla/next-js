import ArticleStyles from '../../../styles/Article.module.css'
import { useRouter } from "next/router"
function article({article}) {
    // const router = useRouter();
    // const {id} = router.query;

  return (<>
  <h1>Article {article.id}</h1>
  
  <div className={ArticleStyles.card} >
    
   <h1 >{article.title}</h1>
   <p>{article.body}</p>
  </div>
  </>
  )
}

export default article

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const article = await res.json()

  

  return {
   props: {
    article
   }// will be passed to the page component as props
  }
}

