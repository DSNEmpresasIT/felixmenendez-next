'use client'
import React from 'react'
import { BlogRouter } from './BlogRouter'
import { BlogAsideSection } from './BlogAsideSection'
import { Keys } from '@/app/util/types'
import { BlogContextProvider } from '@/app/context/blog-context'

export const BlogComponent = ({ keys }: { keys: Keys }) => {
  return (
    <BlogContextProvider>
      <div className="row justify-content-center flex-row pt-4">
        <BlogRouter keys={keys} />
        <BlogAsideSection keys={keys} />
      </div>
    </BlogContextProvider>
  )
}
