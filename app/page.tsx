import Image from "next/image"
import logo from "../public/images/logo.svg"
import illustration from "../public/images/illustration-dashboard.png"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Home() {
  return (
    <main className="flex h-full min-h-screen max-w-3xl flex-col items-center p-11">
      <Image src={logo} alt="logo" />
      <h1 className="text-neutral-gray mt-8 text-center text-[1.375rem] font-light leading-8 md:text-[3rem] md:leading-[3.75rem]">
        We are launching{" "}
        <span className="text-neutral-very-dark-blue font-bold">soon!</span>
      </h1>
      <p className="mt-4 text-center text-xs font-light leading-normal md:text-xl">
        Subscribe and get notified
      </p>
      <form className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <input
          className="border-secondary-pale-blue placeholder-neutral-blue w-full rounded-full border px-8 py-[0.63rem] text-xs leading-5 shadow-[0_0_7px_3px_rgba(0,0,0,0.00)] sm:w-2/3 md:text-base"
          type="email"
          placeholder="Your email address..."
        />
        <button
          className="bg-primary-blue w-full rounded-full px-8 py-3 text-xs font-semibold leading-4 text-white shadow-[0_5px_10px_2px_rgba(76,123,243,0.23)] sm:w-1/3 md:text-base"
          type="submit"
        >
          Notify Me
        </button>
      </form>
      <div>
        <Image src={illustration} alt="illustration" className="mt-[4.5rem]" />
      </div>
      <div className="mb-20 mt-auto flex flex-col items-center gap-6">
        <div className="flex gap-3">
          <a
            className="border-secondary-pale-blue grid h-8 w-8 place-content-center rounded-full border px-3 py-2"
            href="https://facebook.com"
          >
            <FaFacebookF className="text-primary-blue text-md" />
          </a>
          <a
            className="border-secondary-pale-blue grid h-8 w-8 place-content-center rounded-full border px-3 py-2"
            href="https://twitter.com"
          >
            <FaTwitter className="text-primary-blue text-md" />
          </a>
          <a
            className="border-secondary-pale-blue grid h-8 w-8 place-content-center rounded-full border px-3 py-2"
            href="https://instagram.com"
          >
            <FaInstagram className="text-primary-blue text-md" />
          </a>
        </div>
        <p className="text-neutral-gray text-[0.625rem] font-light md:text-xs">
          © Copyright Ping. All rights reserved.
        </p>
      </div>
    </main>
  )
}
