import Image from "next/image";

// Social media icons array
const socialIcons = [
  { src: "/Topheader/2.png", alt: "Instagram" },
  { src: "/Topheader/3.png", alt: "YouTube" },
  { src: "/Topheader/4.png", alt: "Facebook" },
  { src: "/Topheader/5.png", alt: "Twitter" },
];

function Topheader() {
  return (
    <div className="w-[1290px] bg-[#23856D]">
      <div className="justify-between items-center w-[1290px] h-[46px] px-4 py-2 lg:px-[24px] hidden lg:flex ">
        {/* Left section: Contact Info */}
        <div className="flex gap-2 md:gap-4">
          <button className="flex items-center gap-2 p-2 text-[#FFFFFF] text-xs sm:text-sm md:text-base">
            <Image src="/Topheader/0.png" alt="phone" width={16} height={16} />
            <span className="font-Montserrat font-semibold"> (225) 555-0118</span>
          </button>
          <button className="flex items-center gap-2 p-2 text-[#FFFFFF] text-xs sm:text-sm md:text-base rounded-[5px]">
            <Image src="/Topheader/1.png" alt="mail" width={16} height={16} />
            <span className="font-Montserrat">michelle.rivera@example.com</span>
          </button>
        </div>

        {/* Center section: Follow Us text */}
        <h6 className="font-Montserrat font-semibold text-xs sm:text-sm md:text-base text-[#FFFFFF] text-center lg:text-center lg:flex-1">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex gap-4 items-center mr-20">
          <h6 className="font-Montserrat text-xs sm:text-sm md:text-base text-[#FFFFFF]">Follow Us:</h6>
          <div className="flex gap-4">
            {/* Render Social Media Icons */}
            {socialIcons.map((icon, index) => (
              <Image key={index} src={icon.src} alt={icon.alt} width={20} height={20} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topheader;
