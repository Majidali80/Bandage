import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// Define the type for the TeamCard component props
interface TeamCardProps {
  image: string;       // Image path is a string
  name: string;        // Name of the person
  role: string;        // Role of the person
  facebook: string;    // Facebook icon path
  instagram: string;   // Instagram icon path
  twitter: string;     // Twitter icon path
}

const TeamCard = ({ image, name, role, facebook, instagram, twitter }: TeamCardProps) => (
  <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="w-full h-[230px] relative">
      <Image src={image} alt={name} className="object-cover w-full h-full" width={230} height={230} />
    </div>
    <div className="p-6 text-center">
      <h5 className="text-xl font-bold text-[#252B42]">{name}</h5>
      <h6 className="text-sm font-semibold text-[#737373]">{role}</h6>
      <div className="flex justify-center gap-4 mt-4">
        <Image src={facebook} alt="Facebook" className="w-6 h-6" width={24} height={24} />
        <Image src={instagram} alt="Instagram" className="w-6 h-6" width={24} height={24} />
        <Image src={twitter} alt="Twitter" className="w-6 h-6" width={24} height={24} />
      </div>
    </div>
  </div>
);

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="relative flex flex-col gap-8 w-[1440px] h-[729px] mt-28 ml-48">
        {/* First Section */}
        <div className="w-full max-w-[1050px] mx-auto flex flex-col items-start lg:gap-[80px] gap-[40px] py-[112px] sm:mb-[50px]">
          <div className="flex flex-col lg:flex-row items-center gap-[30px] w-full lg:w-[1044px] lg:h-[321px]">
            {/* Column 1 */}
            <div className="flex flex-col lg:items-start items-center gap-[35px] w-full lg:w-[599px] h-auto lg:h-[321px]">
              <h5 className="text-[14px] sm:text-[14px] lg:w-[149px] font-semibold text-[#252B42] tracking-[0.1px]">
                ABOUT COMPANY
              </h5>
              <h1 className="text-[30px] sm:text-[30px] lg:text-[58px] font-bold text-[#252B42] tracking-[0.2px]">
                ABOUT US
              </h1>
              <h4 className="text-[12px] sm:text-[18px] lg:text-[20px] text-[#737373] w-[200px] lg:w-[376px]">
                We know how large objects will act, but things on a small scale
              </h4>
              <div className="flex flex-row items-start gap-[10px] w-[195px] h-[52px]">
                <div className="flex flex-col items-center px-[40px] py-[15px] gap-[10px] w-[195px] bg-[#23A6F0] rounded-[5px]">
                  <span className="font-bold text-[14px] sm:text-[16px] text-[#FFFFFF] whitespace-nowrap">
                    Get Quote Now
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <Image
              src="/About/h2.png"
              alt="girl"
              className="absolute lg:block hidden lg:left-[-1px] top-[300px] lg:top-[0px]"
              width={1050} // specify the width and height explicitly
              height={545}
            />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-8 p-4">
        <section className="flex justify-between items-start max-w-6xl mx-auto p-6">
  {/* Left Column: Heading and Subheading */}
  <div className="w-1/2">
    <h2 className="text-red-600 text-lg font-semibold mb-2">Problems trying</h2>
    <h3 className=" w-[370px] h-[96px] text-2xl  mb-4">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
    </h3>
  </div>

  {/* Right Column: Additional Text */}
  <div className="w-1/2 mt-14">
    <p className="text-gray-600">
      Problems trying to resolve the conflict between the two major realms of
      Classical physics: Newtonian mechanics.
    </p>
  </div>
</section>


      {/* Section 2: Stats */}
      <section className="grid grid-cols-4 gap-4 text-center">
        {[
          { value: "15K", label: "Happy Customers" },
          { value: "150K", label: "Monthly Visitors" },
          { value: "15", label: "Countries Worldwide" },
          { value: "100+", label: "Top Partners" },
        ].map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h1 className="text-6xl font-bold p-4">{stat.value}</h1>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Section 3: Video */}
      <section className="w-full flex justify-center">
        <div className="rounded-lg overflow-hidden shadow-lg max-w-4xl">
          <Image
            src="/About/bg.png" // Replace with your image path
            alt="Video Placeholder"
            width={1440}
            height={264}
            className="w-full"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-blue-500 p-4 rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 12l-6.75-4.5v9l6.75-4.5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
        {/* Team Section */}
        <section className="relative bg-white py-16">
          <div className="container mx-auto flex flex-col items-center gap-16 px-4">
            {/* Heading */}
            <div className="text-center max-w-lg">
              <h2 className="text-4xl font-bold text-[#252B42]">Meet Our Team</h2>
              <p className="text-base text-[#737373] mt-4">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <TeamCard
                image="/About/team-1-user-1.jpg"
                name="John Doe"
                role="Software Engineer"
                facebook="/About/facebook.png"
                instagram="/About/ant-design_instagram-outlined.png"
                twitter="/About/ant-design_twitter-outlined.png"
              />
              <TeamCard
                image="/About/team-1-user-2.jpg"
                name="Jane Smith"
                role="Marketing Head"
                facebook="/About/facebook.png"
                instagram="/About/ant-design_instagram-outlined.png"
                twitter="/About/ant-design_twitter-outlined.png"
              />
              <TeamCard
                image="/About/team-1-user-3.jpg"
                name="Emily Rose"
                role="UI/UX Designer"
                facebook="/About/facebook.png"
                instagram="/About/ant-design_instagram-outlined.png"
                twitter="/About/ant-design_twitter-outlined.png"
              />
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className="bg-gray-100 py-20 flex justify-center">
          <div className="w-full max-w-6xl flex flex-col gap-[24px] items-center px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Big Companies Are Here</h2>
              <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="flex justify-center">
                <Image src="/About/fa-brands-1.png" alt="Client 1 Logo" className="h-12 w-auto" width={48} height={48} />
              </div>
              <div className="flex justify-center">
                <Image src="/About/fa-brands-2.png" alt="Client 2 Logo" className="h-12 w-auto" width={48} height={48} />
              </div>
              <div className="flex justify-center">
                <Image src="/About/fa-brands-3.png" alt="Client 3 Logo" className="h-12 w-auto" width={48} height={48} />
              </div>
              <div className="flex justify-center">
                <Image src="/About/fa-brands-4.png" alt="Client 4 Logo" className="h-12 w-auto" width={48} height={48} />
              </div>
              <div className="flex justify-center">
                <Image src="/About/fa-brands-5.png" alt="Client 5 Logo" className="h-12 w-auto" width={48} height={48} />
              </div>
              <div className="flex justify-center">
                <Image src="/About/fa-brands-6.png" alt="Client 6 Logo" className="h-12 w-auto" width={48} height={48} />
              </div>
            </div>
          </div>
        </section>

        {/* Grow Section */}
        <section className="relative w-[1440px] h-[636px] flex bg-[#2A7CC7] justify-center items-center mt-[-30px]">
          <div className="w-[1440px] md:w-1/2 h-[636px] bg-[#2A7CC7] lg:px-[250px] lg:ml-[0px] ml-[50px] py-16 flex flex-col justify-center">
            <div className="w-[438px] flex flex-col gap-[24px]">
              <h5 className="text-white text-lg font-bold leading-[24px] tracking-[0.1px]">WORK WITH US</h5>
              <h2 className="text-white text-4xl font-bold leading-[50px] tracking-[0.2px]">Now Let’s grow Yours</h2>
              <p className="text-white lg:text-sm text-[12px] lg:w-auto w-[350px] leading-[20px] tracking-[0.2px]">
                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
              </p>
              <button className="w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-10 gap-2 mt-6">
                <span className="text-white text-sm font-bold">Button</span>
              </button>
            </div>
          </div>
          <div className="w-[540px] md:w-1/2 h-full relative">
            <Image
              src="/About/unsplash_vjMgqUkS8q8.png"
              alt="Testimonial Background"
              className="absolute w-[570px] h-[640px] left-[150px] inset-0 object-cover"
              width={500}
              height={500}
            />
          </div>
        </section>

       
        <footer />
      </div>
      </div>
  );
}
