
import Navbar from "./components/Navbar";
console.log(process.env.GOOGLE_CLIENT_ID);
console.log(process.env.GOOGLE_CLIENT_SECRET);



export default function Home() {
  return (
   <main>
    <Navbar/>
   </main>
  );
}
