import { defineEventHandler } from 'h3'
import { $fetch, FetchError } from 'ohmyfetch'
import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export default defineEventHandler(async (_event) => {
  let repos = []

  const cachePinnedRepos: any[] = await redis.get('pinnedRepos')

  if (!cachePinnedRepos) {
    const pinnedRepos: any[] = await $fetch('https://gh-pinned-repos.egoist.dev/?username=mrfade', {
      responseType: 'json'
    })
      .catch((_error: FetchError) => {
        throw new Error('Failed to fetch pinned repos', {
          cause: _error
        })
      })

    const _repos: string = JSON.stringify(pinnedRepos)
    await redis.set('pinnedRepos', _repos, {
      ex: 60 * 60 // 1 hours
    })

    repos = pinnedRepos
  }

  if (repos.length === 0)
    repos = cachePinnedRepos

  return repos
})
