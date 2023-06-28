import getBlogs from './action/getBlog'
import getCurrentUser from './action/getCurrentUser'
import Singleblog from './createblogs/Singleblog'

export default async function Home() {
  const currentUser = await getCurrentUser()
  let fetchBlog;
  if (currentUser) {
    fetchBlog = await getBlogs(currentUser.id)
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-64 gap-4">
      {
        currentUser &&
        fetchBlog?.map((item) => (
          <Singleblog data={item} key={item.id} currentUser={currentUser} />
        ))
      }
    </main>
  )
}
