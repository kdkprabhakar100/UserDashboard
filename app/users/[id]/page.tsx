"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getUserPosts } from "@/services/api"
import AddPostForm from "@/components/AddPostForm"

export default function UserPosts() {

  const params = useParams()
  const userId = Number(params.id)
  const router = useRouter()

  const [posts, setPosts] = useState<any[]>([])
  const [apiIsLoading, setApiIsLoading] = useState(true)
  const [error, setError] = useState("")

  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage)

  useEffect(() => {
    getUserPosts(userId)
      .then((data) => {

        const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]")

        const userPosts = savedPosts.filter(
          (post: any) => post.userId === userId
        )

        setPosts([...userPosts, ...data])
        setApiIsLoading(false)

      })
      .catch(() => {
        setError("Something went wrong")
        setApiIsLoading(false)
      })
  }, [userId])

  const addPost = (post: { title: string; body: string }) => {

    const newPost = {
      id: Date.now(),
      userId: userId,
      title: post.title,
      body: post.body
    }

    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]")

    const updatedPosts = [newPost, ...savedPosts]

    localStorage.setItem("posts", JSON.stringify(updatedPosts))

    setPosts((prev) => [newPost, ...prev])
    setCurrentPage(1)
  }

  if (error) {
    return (
      <div style={{ padding: "40px", background: "#f9fafb", minHeight: "100vh" }}>
        <h2>{error}</h2>
      </div>
    )
  }

  if (apiIsLoading) {
    return (
      <div style={{ padding: "40px", background: "#f9fafb", minHeight: "100vh" }}>
        <h2>Loading posts...</h2>
      </div>
    )
  }

  return (
    <div
      style={{
        padding: "40px",
        background: "#f9fafb",
        minHeight: "100vh",
        maxWidth: "900px",
        margin: "auto"
      }}
    >

      <button
        onClick={() => router.push("/")}
        style={{
          marginBottom: "25px",
          padding: "8px 14px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#4b5563",
          color: "white",
          cursor: "pointer"
        }}
      >
        ← Back to Users
      </button>

     <h1
  style={{
    marginBottom: "10px",
    color: "#111"
  }}
>
  User Posts
</h1>

<h2
  style={{
    marginBottom: "15px",
    color: "#374151"
  }}
>
  Add New Post
</h2>

      <AddPostForm onAddPost={addPost} />

      {paginatedPosts.map((post: any) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #e5e5e5",
            borderRadius: "10px",
            padding: "18px",
            marginBottom: "16px",
            backgroundColor: "white",
            color: "#222",
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)"
          }}
        >
          <h3 style={{ marginBottom: "6px" }}>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

<div
  style={{
    marginTop: "25px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#111"
  }}
>
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    style={{
      padding: "6px 12px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      backgroundColor: "white",
      color: "#111",
      cursor: "pointer"
    }}
  >
    Prev
  </button>

  <span
    style={{
      fontWeight: "500",
      color: "#111"
    }}
  >
    Page {currentPage}
  </span>

  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={startIndex + postsPerPage >= posts.length}
    style={{
      padding: "6px 12px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      backgroundColor: "white",
      color: "#111",
      cursor: "pointer"
    }}
  >
    Next
  </button>
</div>

    </div>
  )
}