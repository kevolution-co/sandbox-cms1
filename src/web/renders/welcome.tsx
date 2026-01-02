import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { TypedUser } from 'payload'

import { Button } from '@/components/ui/button'

export const Welcome = ({ user }: { user: TypedUser }) => (
  <section className="py-32">
    <div className="container mx-auto flex flex-col items-center justify-center gap-4 h-[50vh]">
      <Image
        alt="Kevolution Logo"
        className="size-24"
        height={512}
        src="/kevin.png"
        width={512}
      />
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        {user ? `Welcome back, ${user.email}` : 'Welcome to your new project.'}
      </h1>
      <p className="text-muted-foreground text-xl text-center">
        Get started by editing the landing page in the admin site. <br />
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          Admin &gt; Web &gt; Landing Page
        </code>
      </p>
      <Button asChild={true}>
        <Link href="/admin" target="admin">
          Go to Admin Site
          <ArrowRightIcon className="size-5" />
        </Link>
      </Button>
    </div>
  </section>
)
