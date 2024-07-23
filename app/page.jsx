import Image from "next/image";
import Link from "next/link";
import Logo from "./logo2.jpg";
import Neo from "./neo.png";

export default function Home() {
  return (
    <>
      <div className="container flex flex-col-reverse lg:flex-row justify-between gap-3 items-center p-5">
        <div className="flex-col text-center md:p-5 md:text-start">
          <h3 className="text-5xl text-pretty bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">
            Let's Make Internet Accessible with Crypto
          </h3>
          <p className=" mt-3 mb-10 text-gray-400">
            Making Internet Connection accessible to underserved communities
          </p>
          <Link href={"/"} className="text-white bg-green-400 p-4 rounded hover:bg-green-500">
            Participate in Presale
          </Link>
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

      <div className="container mx-auto my-5 p-5">
        <h3 className="text-4xl text-center mb-2 text-pretty bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">
          What's Our Mission
        </h3>
        <div className="lg:mx-40">
          <p className="text-center p-10">
            Our token aims to bridge the digital divide by supporting global initiatives that provide internet access and digital education to underserved communities. By enhancing connectivity, we empower individuals and foster equal opportunities for growth and learning
          </p>
        </div>
      </div>
      <div className="container mx-auto my-5 p-5">
        <h3 className="text-4xl text-center mb-10 text-pretty bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">
          People Behind NeoNex
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-3">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-10">
            <div className="flex flex-col items-center pb-10">
              <img className="w-24 h-24 mb-3 rounded-full" src="https://avatars.githubusercontent.com/u/68753229?v=4" alt="CEO" />
              <h5 className="mb-1 text-xl font-medium text-gray-900">Oluwademilade Abatan</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">CEO, NeoNex</span>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-10">
            <div className="flex flex-col items-center pb-10">
              <img className="w-24 h-24 mb-3 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="COO" />
              <h5 className="mb-1 text-xl font-medium text-gray-900">Emmaunel Salau</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">COO, NeoNex</span>
            </div>
          </div>
          <div className="w-full max-w-sm md:max-w-lg bg-white border border-gray-200 rounded-lg shadow p-10">
            <div className="flex flex-col items-center pb-10">
              <img className="w-24 h-24 mb-3 rounded-full" src="https://avatars.githubusercontent.com/u/109282365?v=4" alt="CTO" />
              <h5 className="mb-1 text-xl font-medium text-gray-900">Adeniji Olajide</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">CTO, NeoNex</span>
            </div>
          </div>
        </div>
      </div>
      <section className="my-20">
        <div className="container mx-auto flex  lg:flex-row justify-center gap-6">
          <form>
            <h1 className="text-3xl text-center mb-10 text-pretty bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">
              Participate in Airdrop
            </h1>
            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@email.com" required />
            </div>
            <div class="mb-5">
              <label for="Wallet" class="block mb-2 text-sm font-medium text-gray-900">Your Wallet Address</label>
              <input type="test" id="Wallet" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <button type="submit" class="text-white bg-green-400 hover:bg-green-500 w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit Wallet Address</button>
          </form>
        </div>
      </section>
      <section className="my-20">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center text-pretty bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">
            NeoNex RoadMap
          </h1>
        </div>
      </section>
    </>
  );
}
