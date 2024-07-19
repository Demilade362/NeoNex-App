import Image from "next/image";
import Logo from "../logo2.jpg";

export default function page() {
  return (
    <>
      <section className="container mx-auto mt-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="flex-col lg:text-center lg:p-10">
            <h1 className="text-4xl mb-5 text-pretty bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">About NeoNex</h1>
            <p className="text-gray-400">Our token aims to bridge the digital divide by supporting global initiatives that provide internet access and digital education to underserved communities. By enhancing connectivity, we empower individuals and foster equal opportunities for growth and learning</p>
          </div>
          <div className="flex-col">
            <Image
              src={Logo}
              width={1000}
              alt="NeoNex Logo"
              quality={100}
              placeholder="blur"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  )
}
