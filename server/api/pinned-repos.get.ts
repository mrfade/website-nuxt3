import fs from 'fs'
import path from 'path'
import { defineEventHandler } from 'h3'
// import { $fetch, FetchError } from 'ofetch'
// import { Redis } from '@upstash/redis'

// const redis = Redis.fromEnv()

export default defineEventHandler(async (_event: any) => {
  let repos = []

  // read from file /data/pinned-repos.json asynchronously for serverless compatibility
  const filePath = path.join(process.cwd(), 'data/pinned-repos.json')
  try {
    const data = await fs.promises.readFile(filePath, 'utf8')
    repos = JSON.parse(data)
  } catch (error) {
    // ignore error
  }

  // const cachePinnedRepos: any[] | null = await redis.get('pinnedRepos')

  // if (cachePinnedRepos === null || cachePinnedRepos.length === 0) {
  //   const pinnedRepos: any[] = await $fetch('https://gh-pinned-repos.egoist.dev/?username=mrfade', {
  //     responseType: 'json'
  //   })
  //     .catch((_error: FetchError) => {
  //       throw new Error('Failed to fetch pinned repos', {
  //         cause: _error
  //       })
  //     })

  //   const _repos: string = JSON.stringify(pinnedRepos)
  //   await redis.set('pinnedRepos', _repos, {
  //     ex: 60 * 60 // 1 hours
  //   })

  //   repos = pinnedRepos
  // }

  // if (repos.length === 0)
  //   repos = cachePinnedRepos as any[]

  return repos
})
