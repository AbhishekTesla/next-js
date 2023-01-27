import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

function ArticleItem({article}) {
  return (
   <Link href="/article/[id]" as={`/article/${article.id}`} legacyBehavior>
    <a className={articleStyles.card} >
    <h4>{article.title} &rarr;</h4>
    <p>{article.body}</p>
    </a>
   </Link>

  )
}

export default ArticleItem