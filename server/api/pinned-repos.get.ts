import { defineEventHandler } from 'h3'
import pinnedRepos from '../../data/pinned-repos.json'

export default defineEventHandler(() => {
  return pinnedRepos
})
