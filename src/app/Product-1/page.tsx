"use client";

import Navbar from "../components/navbar";
import Image from "next/image";
import { useState } from "react";
import Greentopheader from "../components/Greentopheader";
import CardsText from "../components/cards-text";
import Footer from "../components/footer";

export default function Pages() {
  const [selectedImage, setSelectedImage] = useState("/assets/single-product-1-cover-2.jpg");

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <Greentopheader />
      <Navbar />
      
      {/* Breadcrumb Section */}
      <div className="w-[1280px] h-[92px] py-[24px] bg-[#FAFAFA]">
        <div className="w-[1230px] h-[44px] absolute left-[130px] flex gap-[30px]">
          <div className="flex items-center gap-[15px]">
            <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">Home</div>
            <Image src="/About/V1.png" alt="arrow" width={8} height={6} />
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">Shop</h6>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className=" min-w-[1280px] container top-[200px] py-12 flex flex-col md:flex-row gap-8 font-Montserrat bg-[#FAFAFA]">
        {/* Left Section - Image Slider */}
        <div className="flex-1">
          <div className="relative ml-20">
            <Image src="/About/Sofa.jpg" alt="Product Image" className="rounded-lg" width={600} height={400} />
             {/* Arrows */}
              <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6 text-gray-700">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                </button>
               <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6 text-gray-700">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Thumbnails */}
          <div className="flex mt-4 gap-4">
             <Image src="/About/tn1.jpg" alt="Thumbnail 1" className="ml-20 rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500" width={100} height={100} onClick={() => handleThumbnailClick("/assets/single-product-1-thumb-1.jpg")} />
             <Image src="/About/tn2.jpg" alt="Thumbnail 2" className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500" width={100} height={100} onClick={() => handleThumbnailClick("/assets/single-product-1-thumb-2.jpg")} />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1 mt-6">
          <h1 className="text-2xl font-semibold text-gray-800">Floating Phone</h1>
          <div className="flex items-center mt-2">
            <span className="flex items-center text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                   </svg>
                  ))}
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-gray-300">
                <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
              </svg>
            </span>
            <p className="ml-2 text-sm text-gray-500">(10 Reviews)</p>
          </div>

          {/* Price and Availability */}
          <p className="text-xl font-semibold text-black mt-4">$1,139.33</p>
          <p className="text-sm text-gray-500 mt-2">Availability: <span className="text-[#23A6F0] font-medium">In Stock</span></p>

          {/* Description */}
          <p className="text-gray-700 mt-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met sent. RELIT official consequent door ENIM RELIT Mollie.<br /> Excitation venial consequent sent nostrum met.
          </p>

          {/* Color Options */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold border-b border-[#BDBDBD] pb-2 w-[445px] "></h3>
            <div className="flex items-center gap-2 mt-10">
               <span className="h-6 w-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
                 <span className="h-6 w-6 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
              <span className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
            </div>
          </div>

          {/* Buttons */}
          <div className=" flex items-center gap-4 mt-20">
            <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600">Select Options</button>
            <div className="flex items-center gap-4">
              <Image src="/About/v4.png" alt="heart" width={24} height={24} className="cursor-pointer" />
              <Image src="/About/v3.png" alt="cart" width={24} height={24} className="cursor-pointer" />
              <Image src="/About/v2.png" alt="eye" width={24} height={24} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="w-[1051px] h-[72px] flex justify-center mt-10 ml-64">
         <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373] mr-32">Description</span>
           <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373] mr-32">Additional Information</span>
          <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373] mr-32">Reviews
        <h1 className="text-sm leading-[24px] text-[#23856D]">(0)</h1>
      </span>
     </div>


      {/* Product Cards */}
        <div className="flex flex-col lg:flex-row w-[1051px] h-[499px] gap-[30px] px-8 py-12 ml-[100px] items-center justify-center">
        {/* Image Section */}
        <div className="w-full lg:w-[323px] h-auto flex-shrink-0 rounded-lg overflow-hidden">
          <Image src="/About/v5.png" alt="Interior Design" width={332} height={392} className="object-cover" />
        </div>

        {/* Content Section */}
        <div className="flex w-full lg:w-[65%] space-y-8">
  
  <div className="w-[332px] space-y-4 flex flex-col gap-[30px] mt-10">
    <h3 className="text-[24px] font-Montserrat font-bold text-gray-800">the quick fox jumps over</h3>
    <p className="text-[#737373] font-Montserrat font-normal text-[14px] leading-[20px]">
      Met minim Mollie non desert Alamo est sit <br/>cliquey dolor do met sent. RELIT official <br/>consequent door ENIM RELIT Mollie. <br/>Excitation venial consequent sent nostrum met.<br/><br/><br/>
      Met minim Mollie non desert Alamo est sit <br/>cliquey dolor do met sent. RELIT official <br/>consequent door ENIM RELIT Mollie. <br/>Excitation venial consequent sent nostrum met.<br/><br/><br/>
      Met minim Mollie non desert Alamo est sit <br/>cliquey dolor do met sent. RELIT official <br/>consequent door ENIM RELIT Mollie. <br/>Excitation venial consequent sent nostrum met.<br/><br/><br/>
    </p>
  </div>
  


  <div className="flex w-full lg:w-[50%] space-y-5 ml-5">
    <div className="flex flex-col justify-center">
      <div>
        <h3 className="w-[332px] text-[24px] font-semibold font-Montserrat text-gray-800">the quick fox jumps over</h3>
        <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
          <li className="flex items-center gap-2"><Image src="/About/v1.png" alt="Arrow" width={12} height={12} /> the quick fox jumps over the lazy dog</li>
          <li className="flex items-center gap-2"><Image src="/About/v1.png" alt="Arrow" width={12} height={12} /> the quick fox jumps over the lazy dog</li>
          <li className="flex items-center gap-2"><Image src="/About/v1.png" alt="Arrow" width={12} height={12} /> the quick fox jumps over the lazy dog</li>
          <li className="flex items-center gap-2"><Image src="/About/v1.png" alt="Arrow" width={12} height={12} /> the quick fox jumps over the lazy dog</li>
         
        </ul>
        <h3 className="w-[332px] text-[24px] font-semibold font-Montserrat text-gray-800 mt-10">the quick fox jumps over</h3>
        <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
          <li className="flex items-center gap-2"><Image src="/About/v1.png" alt="Arrow" width={12} height={12} /> the quick fox jumps over the lazy dog</li>
          <li className="flex items-center gap-2"><Image src="/About/v1.png" alt="Arrow" width={12} height={12} /> the quick fox jumps over the lazy dog</li>
          <li className="flex items-center gap-2"><Image src="/About/v1.png" alt="Arrow" width={12} height={12} /> the quick fox jumps over the lazy dog</li>
          <li className="flex items-center gap-2"><Image src="/About/v1.png" alt="Arrow" width={12} height={12} /> the quick fox jumps over the lazy dog</li>
        </ul>
      </div>
     </div>
  </div>  
</div>
</div>
<div className="w-[1340px] h-[1250px] px-[195px] py-0 bg-[#FAFAFA]">
  <div className="w-[924px] h-[1086px] left-[195px] px-0 py-[20px] gap-[10px]">
    <h3 className="w-[299px] h-[32px] font-Montserrat text-[24px] font-extrabold leading-[32px] tracking-[0.1px] text-center whitespace-nowrap">
      BESTSELLER PRODUCTS
      </h3>
     <div className="w-full h-auto py-0 flex gap-[30px] mr-20 mt-10">
     {/* Box 1 */}
    <div className="w-[238px] h-auto bg-white shadow-lg">
      <img src="/About/b1.png" alt="Product Image" className="w-[239px] h-[280px] object-cover" />
        <div className="flex justify-center w-full h-auto p-[20px] pb-[30px] gap-[10px]">
        {/* Importing cards-text.tsx component */}
        <CardsText />
      </div>
    </div>

    {/* Box 2 */}
    <div className="w-[238px] h-auto bg-white shadow-lg">
      <img src="/About/b2.png" alt="Product Image" className="w-[239px] h-[280px] object-cover" />
      <div className="flex justify-center w-full h-auto p-[20px] pb-[30px] gap-[10px]">
        {/* Importing cards-text.tsx component */}
        <CardsText />
      </div>
    </div>

    {/* Box 3 */}
    <div className="w-[238px] h-auto bg-white shadow-lg">
      <img src="/About/b3.png" alt="Product Image" className="w-[239px] h-[280px] object-cover" />
      <div className="flex justify-center w-full h-auto p-[20px] pb-[30px] gap-[10px]">
        {/* Importing cards-text.tsx component */}
        <CardsText />
      </div>
    </div>

    {/* Box 4 */}
    <div className="w-[238px] h-auto bg-white shadow-lg">
      <img src="/About/b4.png" alt="Product Image" className="w-[239px] h-[280px] object-cover" />
      <div className="flex justify-center w-full h-auto p-[20px] pb-[30px] gap-[10px]">
        {/* Importing cards-text.tsx component */}
        <CardsText />
      </div>
      
    </div>
    
    </div>
    <div className="w-full h-auto py-0 flex gap-[30px] mr-20 mt-10">
    {/* Box 5 */}
    <div className="w-[238px] h-auto bg-white shadow-lg">
      <img src="/About/b5.png" alt="Product Image" className="w-[239px] h-[280px] object-cover" />
      <div className="flex justify-center w-full h-auto p-[20px] pb-[30px] gap-[10px]">
        {/* Importing cards-text.tsx component */}
        <CardsText />
      </div>
    </div>

    {/* Box 6 */}
    <div className="w-[238px] h-auto bg-white shadow-lg">
      <img src="/About/b6.png" alt="Product Image" className="w-[239px] h-[280px] object-cover" />
      <div className="flex justify-center w-full h-auto p-[20px] pb-[30px] gap-[10px]">
        {/* Importing cards-text.tsx component */}
        <CardsText />
      </div>
    </div>

    {/* Box 7 */}
    <div className="w-[238px] h-auto bg-white shadow-lg">
      <img src="/About/b01.png" alt="Product Image" className="w-[239px] h-[280px] object-cover" />
      <div className="flex justify-center w-full h-auto p-[20px] pb-[30px] gap-[10px]">
        {/* Importing cards-text.tsx component */}
        <CardsText />
      </div>
    </div>

    {/* Box 8 */}
    <div className="w-[238px] h-auto bg-white shadow-lg">
      <img src="/About/b2.png" alt="Product Image" className="w-[239px] h-[280px] object-cover" />
      <div className="flex justify-center w-full h-auto p-[20px] pb-[30px] gap-[10px]">
        {/* Importing cards-text.tsx component */}
        <CardsText />
        </div>
      </div>
    </div>
   </div>
 </div>
<div className="flex justify-center items-center">
        <img
        src="/Shop/shop2.png"  // Replace with the actual image path
        alt="Shop Image"
        className="w-[1320px] h-[175px] left-[195px]"  // Adjust the size or remove grayscale if needed
      />
      </div>
    <Footer />
   </div>
 );
}
