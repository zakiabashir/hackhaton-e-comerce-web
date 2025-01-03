import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="flex flex-col min-h-screen">
        {/* Header Section */}
        <div className="relative py-16 pl-8 lg:pl-44 bg-[#F6F5FF] space-y-2">
          <h1 className="text-4xl font-bold text-[#001F54]">About Page</h1>
          <div className="flex items-center gap-2">
            <Link href={"/"}>Home</Link>
            <span className="text-black mx-2">.</span>
            <span className="text-[#FB2E86]">About us</span>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-grow px-6 lg:px-20 py-10 font-sans text-[#151875] space-y-16">
          {/* Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-[1130px] mx-auto gap-8">
            <div className="max-w-[570px]">
              <Image
                src="/images/Group 73.png"
                alt="Ecommerce Meeting"
                width={500}
                height={500}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="max-w-[550px]">
              <h2 className="text-4xl font-bold mb-6">
                Know About Our Ecommerce Business, History
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
                ligula et libero sodales suscipit. Morbi arcu eros, tincidunt non
                turpis non, bibendum porttitor nisi.
              </p>
              <Link href="/contact-us">
                <button className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-600">
                  Contact Us
                </button>
              </Link>
            </div>
          </section>

          {/* Features Section */}
          <section className="text-center max-w-[1140px] m-auto">
            <h2 className="text-3xl font-bold mb-8">Our Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "/images/icon1.png", title: "Free Delivery" },
                { icon: "/images/icon2.png", title: "100% Cash Back" },
                { icon: "/images/icon3.png", title: "Quality Product" },
                { icon: "/images/icon4.png", title: "24/7 Support" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={60}
                    height={60}
                    className="mb-4 mx-auto"
                  />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="text-center px-4 mx-auto max-w-[689px]">
            <h2 className="text-3xl font-bold mb-8">Our Client Say!</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Selina Gomez", image: "/images/client1.png" },
                { name: "John Doe", image: "/images/client2.png" },
                { name: "Emma Watson", image: "/images/client3.png" },
              ].map((client, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={500}
                    height={500}
                    className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
                  />
                  <p className="text-[#151875] font-semibold">{client.name}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non odio
              eleifend nisl sollicitudin aliquet ut non felis. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quae possimus non voluptates
              vitae adipisci repudiandae, blanditiis a dolores architecto
              voluptatum, nulla similique amet ducimus, deserunt excepturi? Atque
              rem corporis eos?
            </p>
          </section>
        </main>

        
      </div>
    </>
  );
};

export default About;
