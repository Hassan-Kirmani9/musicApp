"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession()
  return (
   <div>
 {session.data?.user  &&  <button className="bg-green-300 m-2 p-2" onClick={() => signOut()}>Log out</button>}
   
 {!session.data?.user &&  <button className="bg-green-300 m-2 p-2" onClick={() => signIn()}> Sign in </button>}
 </div>
);

}
