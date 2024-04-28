'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { signup } from '@/app/signup/actions'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { IconSpinner } from './ui/icons'
import { getMessageFromCode } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export default function SignupForm() {
  const router = useRouter()
  const [result, dispatch] = useFormState(signup, undefined)
  const [isConfigFormRequired, setIsConfigFormRequired] = useState<boolean>(false);

  const onConfigChange = () => {
    setIsConfigFormRequired(!isConfigFormRequired);
  }

  useEffect(() => {
    if (result) {
      if (result.type === 'error') {
        toast.error(getMessageFromCode(result.resultCode))
      } else {
        toast.success(getMessageFromCode(result.resultCode))
        router.refresh()
      }
    }
  }, [result, router])

  return (
    <form
      action={dispatch}
      className="flex flex-col items-center gap-4 space-y-3 overflow-y-auto"
    >
      <div className="w-full flex-1 rounded-xl border bg-white px-6 pb-4 pt-8 shadow-md md:w-96 dark:bg-zinc-950">
        <h1 className="mb-3 text-2xl font-bold">Sign up for an account!</h1>
        <div className="w-full flex flex-col gap-2">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-lg border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                id="name"
                type="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
              htmlFor="products"
            >
              Products
            </label>
            <div className="relative">
              <textarea
                className="peer block w-full rounded-lg border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                id="products"
                name="products"
                placeholder="Enter your products"
                required
              />
            </div>
          </div>
          <div className="flex gap-2">
            <label
              className="text-xs font-medium text-zinc-400"
              htmlFor="config"
            >
              Config
            </label>
            <div className="relative flex flex-col align-middle justify-center">
              <input
                className="peer rounded-lg border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                id="config"
                type="checkbox"
                name="config"
                onChange={onConfigChange}
              />
            </div>
          </div>

          {isConfigFormRequired ?
            <div>
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
                  htmlFor="salesperson_name"
                >
                  Salesperson Name
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-lg border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                    id="salesperson_name"
                    type="name"
                    name="salesperson_name"
                    placeholder="Enter salesperson name"
                    required={isConfigFormRequired}
                  />
                </div>
              </div>
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
                  htmlFor="salesperson_role"
                >
                  Salesperson Role
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-lg border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                    id="salesperson_role"
                    type="text"
                    name="salesperson_role"
                    placeholder="Enter salesperson role"
                    required={isConfigFormRequired}
                  />
                </div>
              </div>
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
                  htmlFor="company_name"
                >
                  Company Name
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-lg border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                    id="company_name"
                    type="name"
                    name="company_name"
                    placeholder="Enter company name"
                    required={isConfigFormRequired}
                  />
                </div>
              </div>
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
                  htmlFor="company_business"
                >
                  Company Business
                </label>
                <div className="relative">
                  <textarea
                    className="peer block w-full rounded-lg border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                    id="company_business"
                    name="company_business"
                    placeholder="Enter Company Business"
                    required={isConfigFormRequired}
                  />
                </div>
              </div>
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
                  htmlFor="company_values"
                >
                  Company Values
                </label>
                <div className="relative">
                  <textarea
                    className="peer block w-full rounded-lg border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                    id="company_values"
                    name="company_values"
                    placeholder="Enter Company Values"
                    required={isConfigFormRequired}
                  />
                </div>
              </div>
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
                  htmlFor="conversation_purpose"
                >
                  Conversation Purpose
                </label>
                <div className="relative">
                  <textarea
                    className="peer block w-full rounded-lg border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                    id="conversation_purpose"
                    name="conversation_purpose"
                    placeholder="Enter conversation purpose"
                    required={isConfigFormRequired}
                  />
                </div>
              </div>
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
                  htmlFor="conversation_type"
                >
                  Conversation Type
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-lg border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                    id="conversation_type"
                    type="text"
                    name="conversation_type"
                    placeholder="Enter conversation type"
                    required={isConfigFormRequired}
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <label
                  className="text-xs font-medium text-zinc-400"
                  htmlFor="use_custom_prompt"
                >
                  Use custom prompt
                </label>
                <div className="relative flex flex-col align-middle justify-center">
                  <input
                    className="peer rounded-lg border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                    id="use_custom_prompt"
                    type="checkbox"
                    name="use_custom_prompt"
                  />
                </div>
              </div>
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
                  htmlFor="custom_prompt"
                >
                  Custom Prompt
                </label>
                <div className="relative">
                  <textarea
                    className="peer block w-full rounded-lg border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                    id="custom_prompt"
                    name="custom_prompt"
                    placeholder="Enter custom prompt"
                    required={isConfigFormRequired}
                  />
                </div>
              </div>
            </div> : null
          }

          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-zinc-400"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-lg border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <LoginButton />
      </div>

      <Link href="/login" className="flex flex-row gap-1 text-sm text-zinc-400">
        Already have an account?
        <div className="font-semibold underline">Log in</div>
      </Link>
    </form>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <button
      className="my-4 flex h-10 w-full flex-row items-center justify-center rounded-lg bg-zinc-900 p-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      aria-disabled={pending}
    >
      {pending ? <IconSpinner /> : 'Create account'}
    </button>
  )
}
