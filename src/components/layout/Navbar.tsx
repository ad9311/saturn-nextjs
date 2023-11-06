'use client';

import { signOut } from 'next-auth/react';

function Navbar() {
  function handSignOut() {
    signOut();
  }

  return (
    <div className="bg-neutral-200">
      <nav>
        <button type="button" onClick={handSignOut}>
          Sign out
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
