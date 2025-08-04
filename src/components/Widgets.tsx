// src/components/Widgets.tsx
import React from 'react'

export const Widgets: React.FC = ({ a }: { a?: string }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h1>Widgets</h1>
      <p>A reusable React component.{a}</p>
    </div>
  )
}
