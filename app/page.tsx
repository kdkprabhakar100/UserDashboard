"use client"

import { useEffect, useState } from "react"
import { getUsers } from "@/services/api"
import { User } from "../types/types"
import { useRouter } from "next/navigation"

export default function Home() {

  const [users, setUsers] = useState<User[]>([])
  const [apiIsLoading, setApiIsLoading] = useState(true)
  const [error, setError] = useState("")
  const router = useRouter()
  const [search, setSearch] = useState("")

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data)
        setApiIsLoading(false)
      })
      .catch(() => {
        setError("Something went wrong")
        setApiIsLoading(false)
      })
  }, [])

  if (apiIsLoading) return <p>Loading users...</p>
  if (error) return <p>{error}</p>

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>

      <h1 style={{ marginBottom: "20px" }}>User Dashboard</h1>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "25px",
          width: "100%",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      />

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px"
  }}
>
  {filteredUsers.length === 0 && (
  <p style={{ marginTop: "20px" }}>No users found</p>
)}
  {filteredUsers.map((user) => (
    <div
      key={user.id}
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        color: "#333"
      }}
    >
      <h3 style={{ marginBottom: "5px", color: "#111" }}>
        {user.name}
      </h3>

      <p style={{ margin: "3px 0", color: "#555" }}>
        {user.email}
      </p>

      <p style={{ margin: "3px 0", color: "#777" }}>
        {user.company.name}
      </p>

      <button
        onClick={() => router.push(`/users/${user.id}`)}
        style={{
          marginTop: "10px",
          padding: "8px 14px",
          border: "none",
          borderRadius: "6px",
          backgroundColor: "#2563eb",
          color: "white",
          cursor: "pointer"
        }}
      >
        View Posts
      </button>
    </div>
  ))}
</div>

    </div>
  )
}