import Image from "next/image";
import Navbar from "./_components/Navbar";
import { Plus } from "lucide-react";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero bg-[#0c0c0c]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-0 h-[600px] md:h-auto lg:h-auto items-center px-5 lg:p-0">
          <div className="lg:pl-32">
            <h1 className="text-white text-[22px] lg:text-4xl font-bold lg:pr-14 lg:leading-[47px]">Save Big on Optimum Plans Bundle Fiber Internet + Mobile Starting from $45/Month</h1>
            <p className="text-white text-sm pt-2">Experience 8 Gig Fiber Internet that’s 4x faster than Verizon and 60% faster than Frontier.</p>
            <a
              className="rounded-full bg-primary px-5 py-4 text-1xl font-bold text-white shadow-sm sm:hidden relative top-4 block w-52 mx-auto items-center text-center justify-center"
              href="tel:+1-877-451-0051"
            >
              Call +1-877-451-0051
            </a>
          </div>
          <div className="">
            <img src="/hero.png" alt="hero" />
          </div>
        </div>
      </section>


      <section className="py-10 px-14 lg:px-32 bg-white">
        <h2 className="text-center font-bold text-2xl text-black">Start Your Savings with Optimum Today!</h2>
        <p className="text-center pt-3 text-gray-800">Get 99.9% network reliability and greater whole home WiFi coverage.</p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3 lg:gap-60 mt-10 items-center mx-auto justify-center">
          <div className="rounded-full bg-primary text-center w-64 h-64 items-center justify-center mx-auto">
            <Image src="/net.webp" alt="5G" width={90} height={50} className="mx-auto mt-10" />
            <h3 className="text-white font-bold text-[18px] pt-5">Internet with 99.9% network reliability</h3>
          </div>
          <div className="rounded-full bg-primary text-center w-64 h-64 items-center justify-center mx-auto">
            <Image src="/5G.webp" alt="5G" width={50} height={50} className="mx-auto mt-10" />
            <h3 className="text-white font-bold text-[18px] pt-5">5G Mobile Network with the latest phones</h3>
          </div>
          <div className="rounded-full bg-primary text-center w-64 h-64 items-center justify-center mx-auto">
            <Image src="/money.webp" alt="5G" width={90} height={50} className="mx-auto mt-10" />
            <h3 className="text-white font-bold text-[18px] pt-5">The more Mobile lines, the more you save</h3>
          </div>
        </div>
      </section>


      <section className="bg-[#f2f2f2] py-10 px-5 lg:px-32">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 mx-auto items-center">
          <div className="items-center">
            <h2 className="text-3xl font-bold lg:pr-80 text-black">Get <span className="text-primary">WiFi 6E FREE</span> with 1 Gig Internet</h2>
            <ul className="mt-3">
              <li className="flex gap-2 text-gray-800"><Plus className="text-primary w-4" /> Powers 100+ devices with greater performance and less lag</li>
              <li className="flex gap-2 text-gray-800 py-5"><Plus className="text-primary w-4" /> Reliable connection in busy households</li>
              <li className="flex gap-2 text-gray-800"><Plus className="text-primary w-4" /> Conserves battery life by reducing unnecessary activity</li>
            </ul>
          </div>
          <div className="items-center">
            <Image src="/wifi.webp" alt="wifi" width={350} height={100} className="mx-auto" />
          </div>
        </div>
      </section>


      <section className="bg-white lg:px-32">
        <div className="px-4 py-8 sm:py-12 lg:py-16 bg-white">
          <h2 className="text-center font-bold text-2xl text-black">Optimum Fiber Internet has next-level speed.</h2>
          <p className="text-center pt-3 text-gray-800">Get 99.9% network reliability and greater whole home WiFi coverage.</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-2 md:gap-8 lg:px-32 my-10">
            <div className="bg-white divide-y divide-gray-200 rounded-1xl shadow-2xl">
              <div className="p-6 sm:px-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  300 Mbps
                </h2>
                <h2 className="text-2xl font-bold text-gray-900">
                  Fiber Internet
                </h2>
                <p className="mt-2 sm:mt-4 text-primary text-2xl">
                  $
                  <strong className="text-3xl font-bold text-primary lg:text-8xl px-1">40</strong>
                  /mo
                </p>
                <p className="mt-2 text-gray-800 mb-5">w/Auto Pay & Paperless Bill plus taxes & fees</p>
                <a
                  className="mt-4 rounded-full bg-[#0c0c0c] px-5 py-4 text-center text-sm font-medium text-white sm:mt-6"
                  href="tel:+1-877-451-0051"
                >
                  Call +1-877-451-0051
                </a>
              </div>
              <div className="p-6 sm:px-8">
                <ul className="mt-2 space-y-3 sm:mt-4">
                  <li className="flex items-start gap-3">
                    <Image src={'/Wifi-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700"> Equipment included. </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src={'/mobile-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700"> Stay connected with Optimum Mobile for as low as $15/mo. </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src={'/dollar-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700 pb-5"> FREE Professional Installationavailable to customers without self-installation option.
                    </span>
                  </li>
                  <hr className="pt-3" />
                  <p className="text-[13px] text-gray-700">Not available in all areas. Advertised max speed for wired connection. Actual speeds, including over WiFi, may vary and are not guaranteed.</p>
                </ul>
              </div>
            </div>
            <div className="bg-white divide-y divide-gray-200 rounded-1xl shadow-2xl">
              <div className="p-6 sm:px-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  500 Mbps
                </h2>
                <h2 className="text-2xl font-bold text-gray-900">
                  Fiber Internet
                </h2>
                <p className="mt-2 sm:mt-4 text-primary text-2xl">
                  $
                  <strong className="text-3xl font-bold text-primary lg:text-8xl px-1">60</strong>
                  /mo
                </p>
                <p className="mt-2 text-gray-800 mb-5">w/Auto Pay & Paperless Bill plus taxes & fees</p>
                <a
                  className="mt-4 rounded-full bg-[#0c0c0c] px-5 py-4 text-center text-sm font-medium text-white sm:mt-6"
                  href="tel:+1-877-451-0051"
                >
                  Call +1-877-451-0051
                </a>
              </div>
              <div className="p-6 sm:px-8">
                <ul className="mt-2 space-y-3 sm:mt-4">
                  <li className="flex items-start gap-3">
                    <Image src={'/Wifi-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700"> Equipment included. </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src={'/Gift-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-800 font-bold"> $50 Optimum Prepaid Mastercard®</span>Terms apply.
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src={'/mobile-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700"> Stay connected with Optimum Mobile for as low as $15/mo. </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src={'/dollar-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700 pb-5"> FREE Professional Installationavailable to customers without self-installation option.
                    </span>
                  </li>
                  <hr className="pt-3" />
                  <p className="text-[13px] text-gray-700">Not available in all areas. Advertised max speed for wired connection. Actual speeds, including over WiFi, may vary and are not guaranteed.</p>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8 px-1 lg:px-5">
            <div className="bg-white divide-y divide-gray-200 rounded-1xl shadow-2xl">
              <div className="p-6 sm:px-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  1 Gig
                </h2>
                <h2 className="text-2xl font-bold text-gray-900">
                  Fiber Internet
                </h2>
                <p className="mt-2 sm:mt-4 text-primary text-2xl">
                  $
                  <strong className="text-3xl font-bold text-primary lg:text-8xl px-1">80</strong>
                  /mo
                </p>
                <p className="mt-2 text-gray-800 mb-5">w/Auto Pay & Paperless Bill plus taxes & fees</p>
                <a
                  className="mt-4 rounded-full bg-[#0c0c0c] px-5 py-4 text-center text-sm font-medium text-white sm:mt-6"
                  href="tel:+1-877-451-0051"
                >
                  Call +1-877-451-0051
                </a>
              </div>
              <div className="p-6 sm:px-8">
                <ul className="mt-2 space-y-3 sm:mt-4">
                  <li className="flex items-start gap-3">
                    <Image src={'/Wifi-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700"> Equipment included. </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src={'/Gift-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-800 font-bold"> $200 Optimum Prepaid Mastercard®
                      Terms apply. </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src={'/mobile-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700"> Stay connected with Optimum Mobile for as low as $15/mo. </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src={'/dollar-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700 pb-5"> FREE Professional Installationavailable to customers without self-installation option.
                    </span>
                  </li>
                  <hr className="pt-3" />
                  <p className="text-[13px] text-gray-700">Not available in all areas. Advertised max speed for wired connection. Actual speeds, including over WiFi, may vary and are not guaranteed.</p>
                </ul>
              </div>
            </div>
            <div className="bg-white divide-y divide-gray-200 rounded-1xl shadow-2xl">
              <div className="p-6 sm:px-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  2 Gig
                </h2>
                <h2 className="text-2xl font-bold text-gray-900">
                  Fiber Internet
                </h2>
                <p className="mt-2 sm:mt-4 text-primary text-2xl">
                  $<strong className="text-3xl font-bold text-primary lg:text-8xl px-1">120</strong>
                  /mo
                </p>
                <p className="mt-2 text-gray-800 mb-5">w/Auto Pay & Paperless Bill plus taxes & fees</p>
                <a
                  className="mt-4 rounded-full bg-[#0c0c0c] px-5 py-4 text-center text-sm font-medium text-white sm:mt-6"
                  href="tel:+1-877-451-0051"
                >
                  Call +1-877-451-0051
                </a>
              </div>
              <div className="p-6 sm:px-8">
                <ul className="mt-2 space-y-3 sm:mt-4">
                  <li className="flex items-start gap-3">
                    <Image src={'/Wifi-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700"> Equipment included. </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src={'/Gift-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-800 font-bold"> $200 Optimum Prepaid Mastercard®
                      Terms apply. </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src={'/mobile-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700"> Stay connected with Optimum Mobile for as low as $15/mo. </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src={'/dollar-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700 pb-5"> FREE Professional Installationavailable to customers without self-installation option.
                    </span>
                  </li>
                  <hr className="pt-3" />
                  <p className="text-[13px] text-gray-700">Not available in all areas. Advertised max speed for wired connection. Actual speeds, including over WiFi, may vary and are not guaranteed.</p>
                </ul>
              </div>
            </div>
            <div className="bg-white divide-y divide-gray-200 rounded-1xl shadow-2xl">
              <div className="p-6 sm:px-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  5 Gig
                </h2>
                <h2 className="text-2xl font-bold text-gray-900">
                  Fiber Internet
                </h2>
                <p className="mt-2 sm:mt-4 text-primary text-2xl">
                  $
                  <strong className="text-3xl font-bold text-primary lg:text-8xl px-1">180</strong>
                  /mo
                </p>
                <p className="mt-2 text-gray-800 mb-5">w/Auto Pay & Paperless Bill plus taxes & fees</p>
                <a
                  className="mt-4 rounded-full bg-[#0c0c0c] px-5 py-4 text-center text-sm font-medium text-white sm:mt-6"
                  href="tel:+1-877-451-0051"
                >
                  Call +1-877-451-0051
                </a>
              </div>
              <div className="p-6 sm:px-8">
                <ul className="mt-2 space-y-3 sm:mt-4">
                  <li className="flex items-start gap-3">
                    <Image src={'/Wifi-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700"> Equipment included. </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src={'/Gift-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-800 font-bold"> $200 Optimum Prepaid Mastercard®
                      Terms apply. </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src={'/mobile-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700"> Stay connected with Optimum Mobile for as low as $15/mo. </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Image src={'/dollar-icon.webp'} alt="" width={40} height={40} />
                    <span className="text-gray-700 pb-5"> FREE Professional Installationavailable to customers without self-installation option.
                    </span>
                  </li>
                  <hr className="pt-3" />
                  <p className="text-[13px] text-gray-700">Not available in all areas. Advertised max speed for wired connection. Actual speeds, including over WiFi, may vary and are not guaranteed.</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>




      <div className="pb-10 px-5 bg-white">
        <h2 className="text-center font-bold text-2xl text-black">Optimum’s Commitment</h2>
        <p className="text-center pt-3 text-gray-800">Call us today and snag a custom bundle with crazy fast speeds up to 8 Gig</p>
      </div>
      <section className="bg-[#0c0c0c] py-20 items-center px-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-8 items-center mx-auto max-w-screen-xl">
          <div className="items-center">
            <Image src={'/99-percent.svg'} alt="" width={120} height={80} className="mx-auto" />
            <p className="text-white text-center font-bold text-[20px] py-5 lg:px-20">99.9% network reliability & fast speed</p>
          </div>
          <div className="items-center">
            <Image src={'/award.svg'} alt="" width={120} height={80} className="mx-auto" />
            <p className="text-white text-center font-bold text-[20px] py-5 lg:px-20">60-day money-back guarantee</p>
          </div>
          <div className="items-center">
            <Image src={'/search.svg'} alt="" width={120} height={80} className="mx-auto" />
            <p className="text-white text-center font-bold text-[20px] py-5 lg:px-20">No annual contract & transparent pricing</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-0 items-center mx-auto max-w-screen-xl mt-10 lg:px-40">
          <div className="items-center">
            <Image src={'/equipment.svg'} alt="" width={120} height={80} className="mx-auto" />
            <p className="text-white text-center font-bold text-[20px] py-5 lg:px-20">Equipment included</p>
          </div>
          <div className="items-center">
            <Image src={'/support.svg'} alt="" width={120} height={80} className="mx-auto" />
            <p className="text-white text-center font-bold text-[20px] py-5 lg:px-20">24/7 support</p>
          </div>
        </div>
      </section>


      <section className="bg-white py-10 px-5 lg:px-32">
        <div className="text-center lg:px-20">
          <h2 className="text-center font-bold text-2xl text-black">Ready to get Started?</h2>
          <p className="text-center pt-3 text-black">Call us today and snag a custom bundle with crazy fast speeds up to 8 Gig*, and a TV package and total home experience like only Optimum can bring you.</p>
          <p className="text-center pt-3 mb-10 font-bold text-black">*Not available in all areas.</p>
          <a href="tel:+1-877-451-0051" className="bg-[#0c0c0c] text-white px-5 py-4 rounded-full">Call +1-877-451-0051</a>
        </div>
      </section>


      <section className="bg-[#f2f2f2] py-10 px-5 lg:px-32">
        <div className="">
          <h2 className="font-bold text-4xl pb-2 text-[#0c0c0c]">Why Optimum Services?</h2>
          <p className="text-black">Choosing Optimum services ensures you get the best in high-speed internet, mobile connectivity, and cable TV. Optimum Internet offers blazing fast speeds and unlimited data plans, providing a seamless online experience for streaming, gaming, and working. With Optimum Mobile, you benefit from extensive coverage and flexible plans that fit your lifestyle, along with the latest devices and easy upgrade options. Optimum Cable transforms your home entertainment with a vast channel lineup, premium content, and advanced DVR capabilities. Moreover, Optimum WiFi delivers robust and secure coverage throughout your home, keeping all your devices connected. Coupled with exceptional 24/7 customer service, Optimum stands out as the reliable, comprehensive solution for all your connectivity needs. Trust Best Service Pros LLC to bring these outstanding Optimum services to your doorstep, ensuring superior performance and satisfaction.</p>

          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">What is Altice, Suddenlink, and Optimum?</h3>
          <p className="text-black">Altice, Suddenlink, and Optimum are prominent names in the telecommunications industry, each offering distinct services tailored to meet diverse consumer needs.</p>

          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Altice USA: Innovation in Telecommunications</h3>
          <p className="text-black">Altice USA is a leading provider of telecommunications, media, and entertainment services. Known for its innovative approach, Altice USA serves residential and business customers across 21 states, delivering high-speed internet, cable TV, and digital phone services. The company focuses on enhancing connectivity through advanced technology and a commitment to customer satisfaction. Altice USA continues to expand its network and service offerings to provide reliable and fast communication solutions in an evolving digital landscape.</p>

          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Suddenlink: Connecting Communities with Reliable Service</h3>
          <p className="text-black">Suddenlink, a subsidiary of Altice USA, specializes in providing broadband services to communities across the United States. With a strong emphasis on customer service and community involvement, Suddenlink offers high-speed internet, digital TV, and home phone services. Suddenlink is dedicated to connecting customers with reliable and affordable telecommunications solutions, ensuring seamless connectivity for both residential and business users. The company’s commitment to technological advancement and customer satisfaction makes it a trusted choice for reliable communication services.</p>

          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Optimum: Seamless Connectivity and Superior Entertainment</h3>
          <p className="text-black">Optimum, another subsidiary of Altice USA, is renowned for its comprehensive suite of services designed to deliver seamless connectivity and superior entertainment options. Optimum provides high-speed internet with speeds tailored to meet the demands of modern households and businesses. Additionally, Optimum offers a wide range of cable TV packages featuring diverse channels, premium content, and advanced DVR capabilities. With a focus on customer experience and technological innovation, Optimum ensures that customers have access to reliable communication and entertainment solutions that enhance their daily lives.</p>
          <p className="text-black">Together, Altice USA, Suddenlink, and Optimum represent a commitment to innovation, customer satisfaction, and community connectivity in the telecommunications industry. Whether you’re looking for robust internet connectivity, extensive entertainment options, or reliable phone services, these brands are dedicated to meeting your needs with cutting-edge technology and exceptional service.</p>

          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Optimum Internet: Fast, Reliable Connectivity</h3>
          <p className="text-black">Discover the unparalleled speed and reliability of Optimum Internet, designed to meet the needs of both residential and business users alike. Optimum Internet provides robust solutions that ensure seamless connectivity for streaming, gaming, working from home, and more. With Optimum’s advanced infrastructure and technology, you can enjoy consistently high-speed internet access throughout your home or office, supported by Optimum WiFi for reliable coverage in every room.</p>

          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Internet Plans, Options, and Pricing</h3>
          <p className="text-black">Optimum offers a diverse range of Internet plans tailored to suit various usage patterns and preferences. Whether you’re a light internet user who needs basic browsing capabilities or a heavy user requiring maximum speeds for simultaneous streaming and gaming, Optimum has a plan to fit your needs. Optimum’s plans include options for high-speed superfast internet fulfilling bandwidth requirements with precision for all your online activities. Pricing is competitive and transparent, with no surprise fees, and customers can save more by bundling internet with Optimum’s cable TV and phone services.</p>

          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Optimum WiFi: Seamless Coverage and Security</h3>
          <p className="text-black">Optimum WiFi enhances your connectivity experience by providing seamless coverage throughout your home. Powered by advanced technology, Optimum WiFi ensures that you stay connected from the basement to the attic, with strong signals that minimize dead zones and maximize speed. Enjoy the convenience of secure WiFi connections for all your devices, including smartphones, tablets, laptops, and smart home gadgets. Optimum WiFi also offers additional security features to protect your network from unauthorized access and cyber threats, giving you peace of mind while browsing, streaming, or shopping online.</p>

          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Why Customers Should Choose Optimum Internet</h3>
          <p className="text-black">Optimum Internet stands out as the preferred choice for those seeking reliable, high-speed internet access with excellent customer support. By choosing Optimum, customers benefit from:</p>
          <br />
          <p className="text-black">Speed and Reliability: Experience blazing fast speeds and consistent performance, ideal for streaming HD content and gaming online without interruptions.</p>
          <br />
          <p className="text-black">Flexibility: Choose from a variety of plans tailored to your specific needs and budget, with options to bundle internet, TV, and phone services for added convenience.</p>
          <br />
          <p className="text-black">Exceptional Customer Service: Access 24/7 customer support from knowledgeable representatives who are ready to assist with any questions or issues.</p>
          <br />
          <p className="text-black">Secure Connectivity: Enjoy peace of mind with Optimum WiFi’s robust security features that protect your network and devices from cyber threats.</p>
          <br />
          <p className="text-black">Optimum Internet is more than just a service; it’s a commitment to providing reliable connectivity that enhances your digital lifestyle. Whether you’re upgrading your home network or setting up a business connection, Optimum Internet delivers the speed, reliability, and support you need to stay connected effortlessly.</p>

          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Optimum Cable: Comprehensive Entertainment Solutions</h3>
          <p className="text-black">Explore the world of Optimum Cable, offering a diverse range of entertainment options designed to elevate your viewing experience. Optimum Cable provides extensive channel lineups, premium content, and advanced features that cater to the preferences of every viewer. Whether you’re a sports enthusiast, movie buff, or reality TV fan, Optimum TV ensures there’s always something to watch with crystal-clear picture quality and immersive sound.</p>

          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">TV Plans, Options, and Pricing</h3>
          <p className="text-black">Optimum offers flexible TV plans that cater to a variety of viewing preferences and budgets. Choose from a selection of packages that include local channels, sports networks, news channels, and more. Optimum TV plans also feature options for premium channels like HBO, Showtime, and Cinemax, providing access to exclusive movies, original series, and special events. Pricing is transparent, with competitive rates and the ability to bundle TV services with internet and phone for added savings.</p>

          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Why Customers Should Choose Optimum Cable</h3>
          <p className="text-black">Optimum Cable stands out as the preferred choice for those seeking comprehensive entertainment solutions with exceptional value and quality. By choosing Optimum, customers benefit from:</p>
          <br />
          <p className="text-black">Extensive Channel Selection: Access a wide range of channels with options to add premium content and international programming to suit diverse tastes.</p>
          <br />
          <p className="text-black">HD and 4K Programming: Enjoy stunning high-definition and 4K programming for a cinematic viewing experience in the comfort of your home.</p>
          <br />
          <p className="text-black">Advanced DVR Features: Record your favorite shows, pause live TV, and manage your viewing schedule with Optimum’s advanced DVR capabilities.</p>
          <br />
          <p className="text-black">User-friendly Interface: Navigate through channels, On-Demand content, and streaming apps effortlessly with Optimum’s intuitive TV interface.</p>
          <br />
          <p className="text-black">Optimum Cable delivers more than just TV; it provides an immersive entertainment experience that enhances your home entertainment setup. Whether you’re catching up on the latest episodes, hosting a movie night, or keeping up with sports events, Optimum TV ensures you never miss a moment of your favorite programming.</p>


          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Optimum Mobile: Stay Connected Wherever You Go</h3>
          <p className="text-black">Experience the convenience and reliability of Optimum Mobile, designed to keep you connected whether you’re at home or on the go. Optimum Mobile offers flexible plans, extensive coverage, and the latest smartphone options, making it easy to stay connected with family, friends, and colleagues wherever life takes you.</p>


          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Mobile Plans, Options, and Pricing</h3>
          <p className="text-black">Optimum Mobile provides a range of plans tailored to meet your specific needs and budget. Choose from options that include unlimited talk and text, along with varying data allowances to suit your usage habits. Optimum Mobile plans are designed to offer flexibility and affordability, with competitive pricing and the ability to customize your plan with add-ons such as international calling or additional data. Plus, you can save more by bundling Optimum Mobile with other Optimum services like internet and TV.</p>


          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Why Customers Should Choose Optimum Mobile</h3>
          <p className="text-black">Optimum Mobile stands out as the preferred choice for those seeking reliable mobile phone service with exceptional value and coverage. By choosing Optimum Mobile, customers benefit from:</p>
          <br />
          <p className="text-black">Extensive Coverage: Access a reliable network that provides coverage across the country, ensuring you stay connected wherever you travel.</p>
          <br />
          <p className="text-black">Flexibility: Choose from a variety of plans that fit your communication needs, whether you’re a frequent caller, avid texter, or heavy data user.</p>
          <br />
          <p className="text-black">Latest Devices: Enjoy access to the latest smartphones and devices with options to purchase outright or through installment plans.</p>
          <br />
          <p className="text-black">Exceptional Customer Support: Receive 24/7 support from knowledgeable representatives who are dedicated to ensuring you have a seamless mobile experience.</p>
          <br />
          <p className="text-black">Optimum Mobile combines affordability, reliability, and convenience, making it the ideal choice for staying connected with friends, family, and colleagues. Whether you’re looking for a simple plan with basic features or a comprehensive package with unlimited everything, Optimum Mobile offers solutions that fit your lifestyle and keep you connected on your terms.</p>


          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Optimum Customer Service: Your Partner in Connectivity</h3>
          <p className="text-black">Experience unparalleled support with Optimum Customer Service, dedicated to ensuring your satisfaction across all Optimum services, including internet, mobile, and cable. Our commitment is to provide reliable assistance whenever you need it, enhancing your connectivity experience. Optimum Internet Customer Service: Reliable Technical Support</p>
          <br />
          <p className="text-black">Optimum Internet Customer Service is your go-to resource for resolving technical issues swiftly and effectively. Whether you’re experiencing connectivity problems, slow speeds, or need assistance with setting up your modem/router, our knowledgeable technicians are available 24/7 to provide expert guidance and solutions. We prioritize minimizing downtime and optimizing your internet experience to keep you connected seamlessly.
            Optimum Mobile Customer Service: Personalized Assistance</p>
          <br />
          <p className="text-black">Optimum Mobile Customer Service offers personalized assistance to ensure you get the most out of your mobile services. From helping you activate new devices to troubleshooting network coverage or billing inquiries, our customer service team is dedicated to providing solutions that fit your mobile communication needs. Whether you’re managing individual plans or family accounts, we’re here to make your mobile experience effortless and reliable.
            Optimum Cable Customer Service: Enhancing Your Viewing Experience</p>
          <br />
          <p className="text-black">Optimum Cable Customer Service is committed to enhancing your entertainment experience with comprehensive support tailored to your cable TV needs. Whether you’re exploring new channel options, troubleshooting picture or sound quality issues, or adding premium channels to your lineup, our representatives are ready to assist. We strive to ensure your viewing experience is seamless and enjoyable.
            Optimum Customer Service Number: Direct Access to Assistance</p>
          <br />
          <p className="text-black">For immediate support, contact Optimum Customer Service at +1-877-451-0051. Our dedicated team is available to address your inquiries, technical issues, or account management needs promptly. Whether you prefer phone support, live chat, or visiting a local service center, we’re here to provide convenient access to reliable assistance.</p>

          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Optimum Customer Service is Available 24/7</h3>
          <p className="text-black">Optimum Customer Service sets the standard for exceptional support in the telecommunications industry. Our commitment to customer satisfaction means delivering prompt, knowledgeable, and courteous service at every interaction. Whether you’re troubleshooting technical issues, managing your account, or seeking advice on service upgrades, Optimum Customer Service ensures you receive the attention and solutions you deserve. Trust us to be your partner in connectivity, providing reliable support that enhances your Optimum experience.</p>

          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Optimum Services Near You: Enhancing Connectivity Locally</h3>
          <p className="text-black">Discover Optimum’s reliable services conveniently located near you. Whether you’re searching for Optimum Internet, need to contact Optimum customer service, or want to explore available plans, we’re here to ensure you stay connected with seamless support and exceptional service. Optimum Internet in Your Area: Reliable and Fast Connectivity</p>
          <br />
          <p className="text-black">Experience Optimum Internet in your area with high-speed options designed to meet your specific needs. Our local support team can assist you in choosing the right plan, checking coverage availability, and optimizing your internet setup for optimal performance. Stay connected effortlessly with reliable speeds and responsive customer service. Contact Optimum: Easy Access to Support</p>
          <br />
          <p className="text-black">Contacting Optimum is simple and convenient. Reach us directly at +1-877-451-0051 to speak with a knowledgeable representative who can assist with any inquiries, technical support needs, or service upgrades. Whether you prefer to call, chat online, or visit a nearby Optimum location, we’re committed to providing personalized support that enhances your Optimum experience.</p>


          <h3 className="font-bold text-2xl pt-5 pb-2 text-black">Why Choose Optimum Services Near Me?</h3>
          <p className="text-black">Optimum Services near you offer more than just connectivity; they provide a local commitment to excellence. With a focus on responsive customer service, reliable internet options, and convenient support channels, Optimum ensures you receive the assistance you need, right where you are. Trust Optimum to be your local partner in connectivity, delivering seamless solutions that keep you connected and satisfied.</p>
        </div>
      </section>


      <section className="bg-white py-16 px-5 lg:px-32">
        <div className="">
          <p className="text-sm mb-2 text-black">General Disclaimers:</p>
          <p className="text-sm mb-2 text-black">99.9% reliability claim excludes outages caused by external events and scheduled maintenance.</p>
          <p className="text-sm mb-2 text-black">Optimum TV:-</p>
          <p className="text-sm mb-2 text-black">Movies On Demand titles available at an additional charge. Service availability, equipment needed, and pricing may vary. VOD is not available in all areas. Not all programs available in VOD format. Check local system for details. An SD or HD digital cable box is required. On Demand is not available on certain devices such as Cable CARDs or Digital Tuning Adapters (DTA).</p>
          <p className="text-sm mb-2 text-black">Disney, All Rights Reserved, Disney Entertainment</p>
          <p className="text-sm mb-2 text-black">© 2024 Showtime Networks Inc., a Paramount Company. SHOWTIME and related marks are trademarks of Showtime Networks Inc. Paramount+ and related marks are trademarks of Paramount Pictures Corporation. Individual programs, devices and marks are the property of their respective owners. All Rights Reserved.</p>
          <p className="text-sm mb-2 text-black">Starz® and related channels and service marks are the property of Starz Entertainment, LLC. Visit starz.com for airdates/times. Mary & George ©2023 Sky Studios Limited. All rights reserved.</p>
          <p className="text-sm mb-2 text-black">Max subscription includes access to Max app, HBO channels and On Demand. For specific technical requirements for devices, go to help.max.com. Max is used under license. Use of Max is subject to its own terms and conditions, see max.com/terms-of-use/en-us for details. Programming and content subject to change.</p>
          <p className="text-sm mb-2 text-black">**Offer valid for new customers only. Cloud DVR (25 hours) included in select 1 Gig Internet + TV and 1 Gig Internet + TV + phone packages at no extra cost. Restrictions apply.</p>
          <p className="text-sm mb-2 text-black">Must be an Optimum TV customer to enjoy built-in apps.</p>
          <p className="text-sm mb-2 text-black">News 12 and News12+ are not available in all areas.</p>
          <p className="text-sm mb-2 text-black">Programming, pricing, terms and offers subject to change and discontinuance without notice. Optimum, the Optimum family of marks and Optimum logos are registered trademarks of CSC Holdings, LLC</p>
          <p className="text-sm mb-2 text-black">Optimum Internet:-</p>
          <p className="text-sm mb-2 text-black">99.9% reliability claim excludes outages caused by external events and scheduled maintenance.</p>
          <p className="text-sm mb-2 text-black">8 Gig Fiber Internet is currently available in portions of NY, NJ & CT. Fiber Internet is not available in all areas. In some areas, Internet is delivered over cable network with different speeds. Enter your address to see availability in your area.</p>
          <p className="text-sm mb-2 text-black">Smart WiFi 6 claim based on comparison of maximum theoretical speeds for Optimum’s Smart WiFi 6 (802.11ax) and Smart WiFi 5 (802.11ac) gateways.</p>
          <p className="text-sm mb-2 text-black">INTERNET EQUIP, TAXES & FEES: For online orders, standard rates for professional installation may apply where free self-install is available. 1 free Gateway included. Limit 1 per household. 1 free WiFi extender available if recommended by your Optimum technician. WiFi extender(s) may be needed in order to connect wirelessly throughout Subscriber’s residence. For other services and supplies (add’l equip., install, paper bill, device protection, misc. services, etc.) taxes may apply. Min system req’s & equip configs apply.</p>
          <p className="text-sm mb-2 text-black">OPTIMUM PREPAID MASTERCARD: Offer is not available to individuals who have previously participated in a Prepaid/Gift Card or Snappy Gift promotion within the past 12 months. Must maintain promotion and remain in good standing with no past due or returned payments throughout first 90 days after account activation in order to receive Prepaid Mastercard. Card will be mailed 4-6 weeks after 90-day period or customer may elect to receive virtually. Limit 1 per customer. Prepaid Mastercard cannot be used to pay Optimum monthly bill. Card/Virtual card is issued by Pathward®, N.A., Member FDIC, pursuant to license by Mastercard International Incorporated. Mastercard and the circles design are registered trademarks of Mastercard International Incorporated. No cash access or recurring payments. Card can be used where Debit Mastercard is accepted. Virtual card can be used where Debit Mastercard is accepted online, for phone/mail orders or in stores that accept mobile wallet. Card/Virtual card valid for up to 12 months; unused funds will forfeit after the valid thru date. Terms and conditions apply.</p>
          <p className="text-sm mb-2 text-black">MAX: Max offer req’s Optimum Internet 500 Mbps for 6 months or 1 Gig & above for 12 months. Customer must maintain promotion and remain in good standing throughout promotional period to maintain included Max. After promotional period, Max auto renews at the then prevailing rate (currently $15.99/mo.). Pricing subject to change. Cancel any time at 877-694-9474. Cancellation effective at end of then-current billing period. Offer available for a limited time. Max and related elements are property of Home Box Office, Inc. All other networks, devices, titles, related trademarks and service marks are the property of their respective owners. Use of Max is subject to its own terms and conditions, see max.com/terms-of-use for details. Programming and content subj. to change.</p>
          <p className="text-sm mb-2 text-black">Optimum Mobile:-</p>


          <p className="text-sm mb-2 text-black mt-10">BYOD Offer: Bring Your Own Device (“BYOD”) and get $120 in credits per line ($10 per line) when you activate a new Unlimited Max line or $60 per line in credits ($5 per line) when you activate a new Unlimited line, up to 4 BYOD activations. Number must be transferred to Optimum within 14 days. BYOD device must remain on Unlimited or Unlimited Max line and account must remain in good standing with no past due or returned payments to receive credits. Credits start within 3 bill cycles. Cannot be combined with other offers. Limited time offer.</p>
          <p className="text-sm mb-2 text-black">Offer details: iPhone 15 on us with trade-in. For well-qualified new or existing customers on a current Unlimited or Unlimited Max plan. Savings applied as 36-monthly bill credits toward the purchase or finance of an iPhone 15 128 GB or 512 GB. Trade-in value of $175 or higher is required. Trade-in conditions apply. Trade-in must be shipped within 21 days of iPhone 15 purchase. Monthly trade-in credits (trade-in value) and ‘iPhone on us’ credits start within 3 bill cycles once trade-in is complete. ‘iPhone on us’ credits will not be displayed in check-out. Max 2 per account. Changes in phone or plan may result in cancellation of remaining credits. Tax on pre-credit price due at sale. Returns allowed within 21 days of service subject to restocking fee. Offer subject to discontinuance or change at any time. While supplies last.</p>
          <p className="text-sm mb-2 text-black">Offer details: Samsung Galaxy S24 128 GB on us with trade-in. For well-qualified new or existing customers on a current Unlimited or Unlimited Max plan. Savings applied as 36-monthly bill credits toward the purchase or finance of a Samsung Galaxy S24 128 GB. Trade-in value of $175 or higher is required. Trade-in conditions apply. Trade-in must be shipped within 21 days of Samsung Galaxy S24 128 GB purchase. Monthly trade-in credits (trade-in value) and ‘Phone on us’ credits start within 3 bill cycles once trade-in is complete. ‘Phone on us’ credits will not be displayed in check-out. Max 2 per account. Changes in phone or plan may result in cancellation of remaining credits. Tax on pre-credit price due at sale. Returns allowed within 21 days of service subject to restocking fee. Offer subject to discontinuance or change at any time. While supplies last.</p>
          <p className="text-sm mb-2 text-black">Offer details: Motorola moto g stylus Only $5/mo. with current Unlimited or Unlimited Max plan. Get $80 OFF with promo code SAVE80. For well-qualified new and existing customers. Savings applied via 36-monthly bill credits toward the finance of moto g stylus 5G. Monthly bill credits start in within 2 bill cycles. Tax on pre-credit price due at sale. Changes in phone or plan may result in cancellation of remaining credits. Five device maximum within the first 90 days for new customers. Returns allowed within 21 days of service subject to restocking fee. Offer subject to discontinuance or change at any time. While supplies last.</p>
          <p className="text-sm mb-2 text-black">Visa® Reward Card: Offer is not available to individuals who have previously participated in an Optimum Visa® Reward Card promotion within the past 12 months. Visa Reward Card will be mailed to customers who maintain promotion and remain in good standing with no past due or returned payments throughout first 90 days after account activation. Allow 4-6 weeks for delivery. Limit 1 per customer. Visa Reward Card cannot be used to pay Optimum monthly bill. Card value expires in 12 mos. Visa Reward Card may be used when making purchases from merchants in the U.S. and District of Columbia everywhere Visa debit cards are accepted. No ATM access. Terms and Conditions apply to Reward Cards. See Cardholder Agreement for details.</p>
          <p className="text-sm mb-2 text-black">8 Gig Fiber Internet is currently available in portions of NY, NJ & CT. Fiber Internet is not available in all areas. In some areas, Internet is delivered over cable network with different speeds. Call to see availability in your area.</p>
          <p className="text-sm mb-2 text-black">Smart WiFi 6 claim based on comparison of maximum theoretical speeds for Optimum’s Smart WiFi 6 (802.11ax) and Smart WiFi 5 (802.11ac) gateways.</p>
          <p className="text-sm mb-2 text-black">Optimum Mobile: $15/mo. per line for 1 GB data, unlimited talk & text. Auto-pay required. Other monthly charges apply per line, including $20 activation fee, and may include roaming charges, taxes, government fees and other Optimum Mobile fees and surcharges apply.</p>
          <p className="text-sm mb-2 text-black">Not available in all areas. First set top box is included, additional equipment will be charged at regular monthly rates. Taxes apply, plus certain add’l fees will be added to bill and are subject to change during and after promotion period. Min system req’s & equip configs apply.</p>
          <p className="text-sm mb-2 text-black">Movies On Demand titles available at an additional charge. Service availability, equipment needed, and pricing may vary. VOD is not available in all areas. Not all programs available in VOD format. Check local system for details. An SD or HD digital cable box is required. On Demand is not available on certain devices such as CableCARDs or Digital Tuning Adapters (DTA).</p>
          <p className="text-sm mb-2 text-black">Must be an Optimum TV customer to enjoy built-in apps.</p>
          <p className="text-sm mb-2 text-black">News 12 and News12+ are not available in all areas.</p>
          <p className="text-sm mb-2 text-black">Programming, pricing, terms and offers subject to change and discontinuance without notice. Optimum, the Optimum family of marks and Optimum logos are registered trademarks of CSC Holdings, LLC, ©2024 CSC Holdings, LLC.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
