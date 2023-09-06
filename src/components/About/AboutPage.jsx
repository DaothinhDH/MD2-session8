import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AboutPage() {
    // Outlet dùng để xác định vị trí hiênt thị của componet
  return (
      <div>
          <Outlet />
    </div>
  )
}
