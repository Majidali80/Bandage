import Image from "next/image"; 
import Navbar2 from "../components/Navbar2";
import Footer from "../components/footer";


export default function AboutUs() {
  return (
    <div>
      <Navbar2 />
      {/* Made By Majid Ali */}
      <div className="w-[1100px] h-[58px] lg:w-[1000px] lg:h-[58px] lg:px-[17px] lg:pl-[38px] flex items-center justify-center">
      </div>

      <div className="relative flex flex-col gap-4 w-[1340px] h-[629px] mr-28  ">
        {/* First Section */}
        <div className="w-full max-w-[1000px] mx-auto flex flex-col items-start lg:gap-[80px] gap-[40px] py-[112px] sm:mb-[50px]">
          <div className="flex flex-col lg:flex-row items-center gap-[30px] w-full lg:w-[1044px] lg:h-[321px]">
            {/* Column 1 */}
            <div className="flex flex-col lg:items-start items-center gap-[35px] w-full lg:w-[599px] h-auto lg:h-[321px]">
              <h5 className="text-[14px] sm:text-[14px] lg:w-[149px] font-semibold text-[#252B42] tracking-[0.1px]">
                CONTACT US
              </h5>
              <h1 className="text-[30px] sm:text-[30px] lg:text-[58px] font-bold text-[#252B42] tracking-[0.2px]">
                Get In touch <br />today!
              </h1>
              <h4 className="text-[12px] sm:text-[18px] lg:text-[20px] text-[#737373] w-[200px] lg:w-[376px]">
                We know how large objects will act,  but things on a small scale
              </h4>
              <div className="flex flex-row items-start gap-[10px] w-[230px] h-[32px]">
                <h3 className="text-[24px] sm:text-[30px] lg:text-[24px] font-medium text-[#252B42] tracking-[0.2px]">
                  Phone:+451 215 215 <p>Fax : +451 215 215</p>
                </h3>
              </div>
            
              <div className="w-[200px] h-[50px] mt-5 ">
                {/* Social Icons Container */}
                <div className="flex items-center justify-center gap-5 w-full">
                  {/* Twitter Icon */}
                  <div className="w-[30px] h-[24.49px] p-[0.02px]">
                    <img src="Contact/tw2.png" alt="Twitter" className="w-full h-full object-contain" />
                  </div>
                  
                  {/* Facebook Icon */}
                  <div className="w-[30px] h-[24.49px] p-[0.02px]">
                    <img src="Contact/fb2.png" alt="Facebook" className="w-full h-full object-contain" />
                  </div>
                  
                  {/* Instagram Icon */}
                  <div className="w-[30px] h-[24.49px] p-[0.02px]">
                    <img src="Contact/lk1.png" alt="Instagram" className="w-full h-full object-contain" />
                  </div>
                  
                  {/* LinkedIn Icon */}
                  <div className="w-[30px] h-[24.49px] p-[0.02px]">
                    <img src="Contact/lk2.png" alt="LinkedIn" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
 {/* Made By Majid Ali */}
            </div>
            {/* Column 2 */}
            <Image
              src="/Contact/co2.png"
              alt="girl"
              className="absolute lg:block hidden lg:left-[540px] top-[100px] lg:top-[0px] "
              width={800} // specify the width and height explicitly
              height={645}
            />
          </div>
          
        </div>
        <div className="bg-white py-16 px-8 mt-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h6 className="text-lg font-semibold text-[#252B42]">VISIT OUR OFFICE</h6>
            <h2 className="text-4xl font-bold leading-[50px] tracking-[0.2px] text-center text-[#252B42] ">
              We help small businesses <br /> with big ideas
            </h2>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* Phone Contact */}
            <div className="w-80 bg-white border border-gray-200 p-6 rounded-lg text-center">
              <div className="text-blue-500 mb-4 justify-center">
                <img
                  src="/Contact/ph.png"  // Replace with the actual image path
                  alt="Shop Image"
                  className="w-[61px] h-[67px] ml-24 "  // Adjust the size or remove grayscale if needed
                />
              </div>
              <p className="text-[#252B42] font-bold">georgia.young@example.com</p>
              <p className="text-[#252B42] font-bold">georgia.young@ple.com</p>
              <h5 className="text-[#252B42] font-bold text-center mt-4">Get Support</h5>
              <button className="text-center w-[189px] h-[54px] px-[36px] py-[15px] gap-[10px] rounded-full border-[1px] border-[#23A6F0] text-[#23A6F0] bg-[#ffffff] mt-5 ml-5">
                Submit Request
              </button>
            </div>

            {/* Location Contact */}
            <div className="w-[328px] h-[403px] p-[50px] gap-[15px] bg-[#252B42] ">
              <div className="mb-10 flex justify-center">
                <img
                  src="/Contact/loc.png"  // Replace with the actual image path
                  alt="Shop Image"
                  className="w-[61px] h-[67px] "  // Adjust the size or remove grayscale if needed
                />
              </div>
              <p className="text-white text-center">georgia.young@example.com</p>
              <p className="text-white text-center">georgia.young@ple.com</p>
              <h5 className="text-white text-center mt-4">Get Support</h5>
              <button className="text-center w-[189px] h-[54px] px-[36px] py-[15px] gap-[10px] rounded-full border-[1px] border-[#23A6F0] text-[#23A6F0] bg-[#252B42] mt-5 ml-5">
                Submit Request
              </button>

            </div>
 {/* Made By Majid Ali */}
            {/* Email Contact */}
            <div className="w-80 bg-white border border-gray-200 p-6 rounded-lg text-center">
              <div className="text-blue-500 mb-4">
                <img
                  src="/Contact/em.png"  // Replace with the actual image path
                  alt="Shop Image"
                  className="w-[72px] h-[55px] ml-24 "  // Adjust the size or remove grayscale if needed
                />
              </div>
              <p className="text-[#252B42] font-bold">georgia.young@example.com</p>
              <p className="text-[#252B42] font-bold">georgia.young@ple.com</p>
              <h5 className="text-[#252B42] font-bold text-center mt-4">Get Support</h5>
              <button className="text-center w-[189px] h-[54px] px-[36px] py-[15px] gap-[10px] rounded-full border-[1px] border-[#23A6F0] text-[#23A6F0] bg-[#ffffff] mt-5 ml-5">
                Submit Request
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-24">
            <div className="w-[72.56px] h-[30px] ml-[500px] border-t-[4px] rotate-[-5.56deg]  ">
              <img
                src="/Contact/ar.png"  // Replace with the actual image path
                alt="Shop Image"
                className="w-[72px] h-[55px] ml-24 "  // Adjust the size or remove grayscale if needed
              />
            </div>
            <p className="text-gray-600 text-lg mt-10">WE Can't WAIT TO MEET YOU</p>
            <h2 className="text-4xl font-bold text-gray-800 mt-4">Let’s Talk</h2>
            <button className="mt-4 px-8 py-3 bg-[#23A6F0] text-white rounded-lg">Try it free now</button>
          </div>
        </div>
 {/* Made By Majid Ali */}
        <Footer />
      </div>
    </div>
  );
}
