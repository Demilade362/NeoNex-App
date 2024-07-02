import Image from "next/image";
import Logo from "../logo2.jpg";

export default function page() {
  return (
    <>
      <section className="container mx-auto mt-10">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="flex-col lg:p-10">
            <h1 className="text-4xl mb-5 text-pretty bg-clip-text text-transparent text-center bg-gradient-to-r from-green-500 to-yellow-500">Contact NeoNex</h1>
            <div class="w-full max-w-full p-4 bg-white border border-gray-200 rounded-lg sm:p-6 text-black">
              <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl ">
                Social Links
              </h5>
              <p class="text-sm font-normal text-gray-500">Connect with one of our available wallet providers or create a new one.</p>
              <ul class="my-4 space-y-3">
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 hover:shadow">
                    <span class="flex-1 ms-3 whitespace-nowrap">Twitter</span>
                    <span class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">Popular</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                    <span class="flex-1 ms-3 whitespace-nowrap">Discord</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                    <span class="flex-1 ms-3 whitespace-nowrap">Telegram</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                    <span class="flex-1 ms-3 whitespace-nowrap">Whatsapp</span>
                  </a>
                </li>
              </ul>
              <div>
                <a href="#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline">
                  <svg class="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Why do I need to connect with my wallet?</a>
              </div>
            </div>

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
      <section>
        <div className="container mx-auto my-20">
          <h1 className="text-3xl mb-7 text-center">Send Us A Message</h1>
          <form className="max-w-xl mx-auto">
            <div className="mb-5">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
            </div>

            <div className="mb-5">
              <label for="title" className="block mb-2 text-sm font-medium text-gray-900">Your Message Title</label>
              <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title of Message" required />
            </div>

            <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Your message body</label>
            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-5" placeholder="Leave a comment..."></textarea>
            <button type="submit" class="text-white bg-green-400 w-full hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit Message</button>
          </form>
        </div>
      </section>
    </>
  )
}
