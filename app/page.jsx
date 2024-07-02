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
            Let's Build Crypto Commerce with Nex Crypto
          </h3>
          <p className="my-10 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam illo natus dolore repudiandae dignissimos.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed nostrum aspernatur enim corrupti rem animi totam tempora doloremque in!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor modi perferendis quam deserunt illum facilis incidunt, consectetur ipsa ducimus! Doloribus tempore, error numquam et temporibus suscipit at earum commodi, culpa quisquam assumenda nulla maiores molestias hic sit voluptatem. Unde, delectus!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse corporis quisquam error beatae et quaerat accusantium repellat dolorem veniam. Recusandae alias vero repellendus autem non. Ducimus impedit eveniet maxime sequi?
          </p>
        </div>
      </div>
      <div className="container mx-auto my-5 p-5">
        <h3 className="text-4xl text-center mb-10 text-pretty bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">
          People Behind NeoNex
        </h3>
        <div className="grid grid-cols-3 justify-center items-center gap-3">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-10">
            <div className="flex flex-col items-center pb-10">
              <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://neonex-dc7af.web.app/ceo.jpg" alt="Bonnie image" />
              <h5 className="mb-1 text-xl font-medium text-gray-900">Oluwademilade Abatan</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">CEO, NeoNex</span>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-10">
            <div className="flex flex-col items-center pb-10">
              <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
              <h5 className="mb-1 text-xl font-medium text-gray-900">Mr P</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">COO, NeoNex</span>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-10">
            <div className="flex flex-col items-center pb-10">
              <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://avatars.githubusercontent.com/u/89690781?v=4" alt="Bonnie image" />
              <h5 className="mb-1 text-xl font-medium text-gray-900">Adeniji Olajide</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">CTO, NeoNex</span>
            </div>
          </div>
        </div>
      </div>
      <section className="my-10">
        <div className="container">
          <h1 className="text-2xl text-center">
            Participate in Airdrop
          </h1>
        </div>
      </section>
    </>
  );
}
