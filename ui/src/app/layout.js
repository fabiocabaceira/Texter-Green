import Navbar from "src/Nav/Navbar";

 
export default function Layout({ children }) {
 return (
  <>
  <Navbar />
  
  <main>{children}</main>
  </>
  )
}
