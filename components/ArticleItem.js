import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

function ArticleItem({article}) {
  return (
   <Link href="/article/[id]" as={`/article/${article.id}`} legacyBehavior>
    <a className={articleStyles.card} >
    <h4>{article.name} &rarr;</h4>
  <img className={articleStyles.img} src={article.pic} alt="" />
    </a>
   </Link>

  )
}

export default ArticleItem