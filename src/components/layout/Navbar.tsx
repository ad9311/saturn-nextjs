'use client'

import { signOut } from 'next-auth/react';
import Link from 'next/link';

function Navbar() {
  function handSignOut() {
    signOut();
  }

  return (
    <div className="mb-10 bg-neutral-200">
      <nav>
        <button type="button" onClick={handSignOut}>Sign out</button>
      </nav>
    </div>
  )
}

export default Navbar
