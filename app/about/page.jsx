import Image from "next/image";
import Logo from "../logo2.jpg";

export default function page() {
  return (
    <>
      <section className="container mx-auto mt-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="flex-col lg:text-center lg:p-10">
            <h1 className="text-4xl mb-5 text-pretty bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">About NeoNex</h1>
            <p className="text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus rem cumque, aliquid vero et beatae natus modi accusantium sint optio quidem eos praesentium expedita ex esse asperiores autem unde?</p>
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
