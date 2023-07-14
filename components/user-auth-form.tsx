"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { signIn, signOut, useSession } from 'next-auth/client'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    signIn(
      'credentials', { 
        username: event.currentTarget.username.value, 
        password: event.currentTarget.user_passowrd.value 
      }
    )

    // Call next-auth signin
    // const res = await fetch("/api/auth/signin", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: event.currentTarget.username.value,
    //     password: event.currentTarget.user_passowrd.value,
    //   }),
    // })

    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 10000)
  }

  return (
    <div className={cn("w-full  grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-3.5">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="not-sr-only" htmlFor="username">
              Username
            </Label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-0 pr-4">
                <span className="text-gray-900 sm:text-sm">
                  <Icons.user className="mr-2 h-4 w-10" />
                </span>
              </div>
              <Input
                id="username"
                placeholder="Username"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                className="py-1.5 pl-10 pr-20 text-gray-900"
              />
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label className="not-sr-only" htmlFor="user_passowrd">
              Password
            </Label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-0 pr-4">
                <span className="text-gray-900 sm:text-sm">
                  <Icons.lock className="mr-2 h-4 w-10" />
                </span>
              </div>
              <Input
                id="user_passowrd"
                placeholder="Password"
                type="password"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                className="py-1.5 pl-10 pr-20 text-gray-900"
              />
            </div>
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Login
          </Button>
        </div>
      </form>
      <Button variant="link" className="flow-root text-right text-xs text-muted-foreground">
        Forgot your password?{" "}
      </Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            
          </span>
        </div>
      </div>
      {/* <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button> */}
    </div>
  )
}