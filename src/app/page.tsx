import Topheader from "./components/Topheader";
import Hero from "./components/Hero";
import Editors from "./components/editorspick";
import Classman from "./components/Classman";
import Navbar from "./components/navbar";
import ProductCard from "./components/products-card";
import Univiverse from "./components/Unviverse";
import FuturePost from "./components/FuturePost";
import Footer from "./components/footer";

export default function Home() {
  return (
   <> 

      <Topheader />
      <Navbar />
      <Hero />
      <Editors />
      <ProductCard />
      <Classman />git remote add origin https://github.com/Majidali80/Bandage.git
       <FuturePost />
       <Footer />
       </>
  );
}
