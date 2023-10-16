'use client'

import { useSession } from 'next-auth/react'

function UserInfo() {
  const { data: session } = useSession();

  return (
    <div>
      <h2>{session?.user?.name}</h2>
      <h3>{session?.user?.email}</h3>
    </div>
  )
}

export default UserInfo
