import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/user-auth-form"


export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col items-center justify-center space-y-6 sm:w-[350px]">
            <div className="flex justify-center">
              <Image
                  src="/logos/nmb_logo_simple.png"
                  alt="Bank Logo"
                  className="dark:invert mr-4 text-center"
                  width={150}
                  height={24}
                  priority
              />
            </div>
            <div className="flex flex-col space-y-2 text-center">              
              <h1 className="text-2xl font-semibold tracking-tight">
                Reliable Customer Manager
              </h1>
              {/* <p className="text-sm text-muted-foreground italic">
                "A customer you keep is a customer you don't have to find"
              </p> */}
            </div>
            <UserAuthForm />
            <div className="pt-25 flex space-y-2 text-center justify-center items-center sm:w-[350px]">
              <Image
                  src="/logos/logo_blue_circle.png"
                  alt="Yaape Compnay LTD"
                  className="dark:invert mr-2"
                  width={30}
                  height={24}
                  priority
              />
              <p className="pb-2 text-center text-xs text-muted-foreground">
                Yaape Company Limited
              </p>
            </div>
          </div>
        </div>     
      </div>
    </>
  )
}