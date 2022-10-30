'use client'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl items-center p-5">
      {children}
    </div>
  )
}
