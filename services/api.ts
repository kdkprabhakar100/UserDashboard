export const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")

  if (!response.ok) {
    throw new Error("Something went wrong")
  }

  return response.json()
}

export const getUserPosts = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  )

  if (!response.ok) {
    throw new Error("Something went wrong")
  }

  return response.json()
}