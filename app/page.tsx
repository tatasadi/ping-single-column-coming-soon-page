"use client"
import Image from "next/image"
import logo from "../public/images/logo.svg"
import illustration from "../public/images/illustration-dashboard.png"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import { z } from "zod"
import { useState } from "react"
import Reference from "./components/Reference"

const emailSchema = z.object({
  email: z
    .string()
    .min(1, "Whoops! It looks like you forgot to add your email")
    .email("Please provide a valid email address"),
})

export default function Home() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSuccess(false)
    setEmail(e.target.value)
    if (error) setError("")
  }

  function handlSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const result = emailSchema.safeParse({ email })
    if (!result.success) {
      setError(result.error.errors[0].message)
      return
    } else {
      setSuccess(true)
      setEmail("")
    }
  }

  return (
    <main className="flex h-full min-h-screen max-w-4xl flex-col items-center p-11 md:min-h-0">
      <Image src={logo} alt="logo" />
      <h1 className="text-neutral-gray mt-8 text-center text-[1.375rem] font-light leading-8 md:text-[3rem] md:leading-[3.75rem]">
        We are launching{" "}
        <span className="text-neutral-very-dark-blue font-bold">soon!</span>
      </h1>
      <p
        className={`mt-4 text-center text-xs font-light leading-normal md:text-xl ${
          success ? "text-green-600" : ""
        }`}
      >
        {success
          ? "Thank you for your subscription!"
          : "Subscribe and get notified"}
      </p>
      <form
        className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-start"
        onSubmit={handlSubmit}
      >
        <div className="w-full sm:w-2/3">
          <input
            className={` placeholder-neutral-blue rounded-full border px-8 py-[0.63rem] text-xs leading-5 shadow-[0_0_7px_3px_rgba(0,0,0,0.00)] md:text-base ${
              error
                ? "border-secondary-light-red"
                : "border-secondary-pale-blue"
            }`}
            type="text"
            placeholder="Your email address..."
            onChange={handleEmailChange}
            value={email}
          />
          {error && (
            <p className="text-secondary-light-red text-center text-[0.625rem] italic leading-5 tracking-[0.00781rem] sm:ml-8 sm:text-left">
              {error}
            </p>
          )}
        </div>
        <button
          className="bg-primary-blue w-full cursor-pointer rounded-full px-8 py-3 text-xs font-semibold leading-4 text-white shadow-[0_5px_10px_2px_rgba(76,123,243,0.23)] hover:opacity-80 sm:w-1/3 md:text-base"
          type="submit"
        >
          Notify Me
        </button>
      </form>
      <div>
        <Image src={illustration} alt="illustration" className="mt-[4.5rem]" />
      </div>
      <div className="mb-20 mt-auto flex flex-col items-center gap-6 md:mt-20">
        <div className="flex gap-3">
          <a
            className="border-secondary-pale-blue text-primary-blue text-md hover:bg-primary-blue focus:bg-primary-blue grid h-8 w-8 cursor-pointer place-content-center rounded-full border px-3 py-2 hover:text-white focus:text-white"
            href="https://facebook.com"
            aria-label="facebook"
          >
            <FaFacebookF />
          </a>
          <a
            className="border-secondary-pale-blue text-primary-blue text-md hover:bg-primary-blue focus:bg-primary-blue grid h-8 w-8 place-content-center rounded-full border px-3 py-2 hover:text-white focus:text-white"
            href="https://twitter.com"
            aria-label="twitter"
          >
            <FaTwitter />
          </a>
          <a
            className="border-secondary-pale-blue text-primary-blue text-md hover:bg-primary-blue focus:bg-primary-blue grid h-8 w-8 place-content-center rounded-full border px-3 py-2 hover:text-white focus:text-white"
            href="https://instagram.com"
            aria-label="instagram"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-neutral-gray text-[0.625rem] font-light md:text-xs">
          © Copyright Ping. All rights reserved.
        </p>
      </div>
      <Reference />
    </main>
  )
}
