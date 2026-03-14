"use client"

import FeatureSection from "@/components/task1/FeatureSection"
import Link from "next/link"

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <FeatureSection />

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link
          href="/dashboard"
          style={{
            padding: "12px 20px",
            background: "#2563eb",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          Go to User Dashboard
        </Link>
      </div>
    </main>
  )
}