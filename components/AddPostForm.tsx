"use client"

import { useState } from "react"
import { z } from "zod"

interface Props {
  onAddPost: (post: { title: string; body: string }) => void
}

const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  body: z.string().min(5, "Body must be at least 5 characters")
})

export default function AddPostForm({ onAddPost }: Props) {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const result = postSchema.safeParse({ title, body })

    if (!result.success) {
      setError(result.error.issues[0].message)
      return
    }

    onAddPost({ title, body })

    setTitle("")
    setBody("")
    setError("")
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "35px" }}>

      {error && (
        <p style={{ color: "red", marginBottom: "10px" }}>
          {error}
        </p>
      )}

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "6px",
          width: "100%",
          marginBottom: "12px",
          backgroundColor: "white",
          color: "#000"
        }}
      />

      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "6px",
          width: "100%",
          marginBottom: "12px",
          minHeight: "100px",
          backgroundColor: "white",
          color: "#000"
        }}
      />

      <button
        type="submit"
        style={{
          padding: "10px 18px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "500"
        }}
      >
        Add Post
      </button>

    </form>
  )
}