import { useRouter } from 'next/router'
// Next js Dynamics Routes
const Post = () => {
  const { query } = useRouter();
console.log( query.id );
  return <h1>Post:{query.id} </h1>
}

export default Post