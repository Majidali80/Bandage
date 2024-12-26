import Head from 'next/head';
import Greentopheader from '../components/Greentopheader';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CardText from '../components/cards-text';

export default function Home() {
  return (
    <div>
      {/* Top Header Section */}
      <div className="flex justify-center bg-[#23856D]">
        <Greentopheader />
      </div>

      {/* Navbar Section */}
      <div className="flex justify-center">
        <Navbar />
      </div>

      {/* Main Content Section */}
      <main className="w-[1340px] container mx-auto p-6 mt-16 bg-[#fafafa]">
        <header className="bg-[#fafafa] p-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold">Shop</h1>
            </div>
            <div className="text-sm text-gray-500 px-3 py-1">
              <nav>
                <span>Home</span> &gt; <span className="text-gray-800">Shop</span>
              </nav>
            </div>
          </div>
        </header>

        {/* Categories Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {['Clothes', 'Electronics', 'Shoes', 'Accessories', 'Home'].map((category, index) => (
            <div key={index} className="relative p-4 rounded shadow">
              <img
                src={`/About/Images/${index + 1}.png`} // Dynamic image source based on index
                alt={category}
                className="rounded"
              />
              <div className=" flex flex-col justify-center items-center text-transparent">
                <h2 className="opacity[50px]">{category}</h2>
                <p>{Math.floor(Math.random() * 10) + 1} Items</p>
              </div>
            </div>
          ))}
        </section>

        {/* Filter Section */}
        <section className="bg-[#ffffff] py-4 mt-8">
          <div className="max-w-[1050px] mx-auto flex items-center justify-between h-[98px] px-0 py-[24px] ml-28">
            <span className="w-[330px] text-gray-600">Showing all 12 results</span>
            <div className="flex justify-center space-x-4">
              <span>View</span>
              <img
                src="/Shop/icon.png" // Replace with your grid icon image path
                alt="Grid view"
                className="w-6 h-6"
              />
              <img
                src="/Shop/icon2.png" // Replace with your list icon image path
                alt="List view"
                className="w-6 h-6"
              />
            </div>

            {/* Sorting and Filter Section */}
            <div className="flex items-center justify-between space-x-2 ml-10">
              <div className="flex items-center space-x-2 ml-16">
                <select
                  id="sort"
                  className="border border-gray-300 rounded px-3 py-1 text-[#DDDDDD] w-[141px] h-[50px]"
                >
                  <option>Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>

              <div>
                <button className="bg-[#23A6F0] text-white w-[94px] h-[50px] text-[14px] font-[Montserrat] font-bold leading-[24px] tracking-[0.2px] text-center rounded hover:bg-blue-600">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="bg-[#ffffff] py-6">
  <div className="max-w-7xl mx-auto flex justify-center items-center">
    <div className="p-4">
      <img
        src="/Shop/shop2.png"  // Replace with the actual image path
        alt="Shop Image"
        className="w-[1320px] h-[175px] left-[195px]"  // Adjust the size or remove grayscale if needed
      />
    </div>
  </div>
</section>

        
<footer className="bg-white relative w-[1240px] ">
      {/* Top Section */}
      <section className="bg-[#fafafa] py-10">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight ml-16">
              Bandage
            </h1>
          </div>
          <div className="flex gap-6 mr-36">
            {/* Direct image URLs for social icons */}
            <img
              src="/Footer/fb.png" // Replace with the correct path to your image
              alt="Facebook"
              className="w-6 h-6"
            />
            <img
              src="/Footer/ins.png" // Replace with the correct path to your image
              alt="Instagram"
              className="w-6 h-6"
            />
            <img
              src="/Footer/tw.png" // Replace with the correct path to your image
              alt="Twitter"
              className="w-6 h-6"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#e6e6e6]" />

      {/* Main Footer Content */}
      <section className="bg-white ml-16 ">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 ml-5 mt-4">
    {/* Company Info */}
    <div className="mt-1">
      <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
      <nav className="flex flex-col gap-1 mt-2">
        <a href="#" className="text-[#727272] text-sm font-bold">
          About Us
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Careers
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          We Are Hiring
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Blog
        </a>
      </nav>
    </div>

    {/* Legal */}
    <div className="mt-1">
      <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
      <nav className="flex flex-col gap-1 mt-2">
        <a href="#" className="text-[#727272] text-sm font-bold">
          About Us
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Careers
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          We Are Hiring
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Blog
        </a>
      </nav>
    </div>

    {/* Features */}
    <div className="mt-1">
      <h2 className="text-[#252b42] text-base font-bold">Features</h2>
      <nav className="flex flex-col gap-1 mt-2">
        <a href="#" className="text-[#727272] text-sm font-bold">
          Business Marketing
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          User Analytics
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Live Chat
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Unlimited Support
        </a>
      </nav>
    </div>

    {/* Resources */}
    <div className="mt-1">
      <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
      <nav className="flex flex-col gap-1 mt-2">
        <a href="#" className="text-[#727272] text-sm font-bold">
          iOS & Android
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Watch a Demo
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          Customers
        </a>
        <a href="#" className="text-[#727272] text-sm font-bold">
          API
        </a>
      </nav>
    </div>

    {/* Get in Touch */}
    <div className="mt-1">
      <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
      <div className="mt-2">
        <div className="relative mb-3">
          <input
            type="email"
            className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
            placeholder="Your Email"
          />
          <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg">
            Subscribe
          </button>
        </div>
        <p className="text-[#727272] text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Bottom Section */}
      <section className="bg-[#FAFAFA] py-4 mt-5">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center ml-20 ">
          <p className="text-[#727272] text-sm font-bold">
            Made with love by Finland. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
       
        {/* Product Cards Section */}
        <section className="w-[1240px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[0px] bg-[#ffffff] ">
          {["/Card/1a.png", "/Card/2a.png", "/Card/3.png", "/Card/4a.png",
            "/Card/5.png", "/Card/6a.png", "/Card/7a.png", "/Card/8a.png",
            "/Card/9a.png", "/Card/10a.png", "/Card/11a.png", "/Card/12a.png"
          ].map((pic, index) => (
            <div key={index} className="w-[240px] h-[615px] mx-auto bg-[#ffffff]">
              <div className="w-full h-full mt-16  ">
                <div className="w-[239px] h-[320px]">
                  <img src={pic} alt={`picture${index + 1}`} className="w-full h-full object-cover" />
                </div>
                <CardText />
              </div>
            </div>
          ))}
        </section>

        <section className="flex justify-center items-center gap-4 mt-8 w-[313px] h-[74px] bg-white border-[1.35px] border-[#BDBDBD] rounded-[6.73px] shadow-[0px_2px_4px_0px_#0000001A] mx-auto">
  {/* First Button */}
  <button className="w-[84px] h-[74px] px-4 py-2 bg-[#F3F3F3] text-[#bdbdbd] border-[1px] border-[#BDBDBD] rounded-[6.73px] hover:bg-[#E0E0E0] font-semibold flex items-center justify-center transition-all duration-300 ease-in-out">
    First
  </button>

  {/* Page 1 Button */}
  <button className="w-[46px] h-[74px] bg-[#FFFFFF] text-[#23A6F0] border-[1px] border-[#E9E9E9] rounded-[6.73px] text-center font-semibold text-sm tracking-wide hover:bg-[#F3F3F3] transition-all duration-300 ease-in-out">
    1
  </button>

  {/* Page 2 Button */}
  <button className="w-[46px] h-[74px] bg-[#23A6F0] text-[#ffffff] border-[1px] border-[#E9E9E9] rounded-[6.73px] text-center font-semibold text-sm tracking-wide hover:bg-[#1E87C5] transition-all duration-300 ease-in-out">
    2
  </button>

  {/* Page 3 Button */}
  <button className="w-[46px] h-[74px] bg-[#FFFFFF] text-[#23A6F0] border-[1px] border-[#E9E9E9] rounded-[6.73px] text-center font-semibold text-sm tracking-wide hover:bg-[#F3F3F3] transition-all duration-300 ease-in-out">
    3
  </button>

  {/* Next Button */}
  <button className="w-[84px] h-[74px] px-4 py-2 bg-[#FFFFFF] text-[#23A6F0] border-[1px] border-[#BDBDBD] rounded-[6.73px] hover:bg-[#E0E0E0] font-semibold flex items-center justify-center transition-all duration-300 ease-in-out">
    Next
  </button>
</section>




      </main>
     
    </div>
  );
}
