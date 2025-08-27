<script setup lang="ts">
import type { Ref } from 'vue'
import type { LanyardData } from '~~/@types/lanyard'
import { useLanyard } from '~~/composables/useLanyard'

const status: Ref<LanyardData> = ref<LanyardData>({
  discord_status: 'offline',
  spotify: null,
  listening_to_spotify: false
})

onMounted(async () => {
  const socket = await useLanyard({
    userId: '398833415077625856',
    socket: true
  })

  socket.addEventListener('message', ({ data }: MessageEvent) => {
    const { d: _status } = JSON.parse(data) as { d: LanyardData }
    status.value = _status
  })
})
</script>

<template>
  <div class="statusbar" :class="{ spotify: status.listening_to_spotify }">
    <div
      v-tippy="{content: 'Discord Status', placement: 'top'}"
      class="status"
      :class="status.discord_status"
    >
      <div v-if="['online', 'offline'].includes(status.discord_status)" class="icon"></div>
      <svg v-if="['idle', 'dnd'].includes(status.discord_status)" class="icon" width="20" height="20" viewBox="0 0 10 10">
        <rect
          width="10"
          height="10"
          x="0"
          y="0"
          :mask="'url(#svg-mask-status-' + status.discord_status + ')'"
        ></rect>
        <mask id="svg-mask-status-idle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
          <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
          <circle fill="black" cx="0.25" cy="0.25" r="0.375"></circle>
        </mask>
        <mask id="svg-mask-status-dnd" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
          <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
          <rect
            fill="black"
            x="0.125"
            y="0.375"
            width="0.75"
            height="0.25"
            rx="0.125"
            ry="0.125"
          ></rect>
        </mask>
      </svg>

      {{ status.discord_status }}
    </div>

    <div
      v-if="status.listening_to_spotify && status.spotify"
      v-tippy="{ content: 'Listening to Spotify', placement: 'top-start' }"
      class="activity"
    >
      <div class="image">
        <img :src="status.spotify.album_art_url" :alt="status.spotify.album">
      </div>
      <div class="text">
        <a :href="'https://open.spotify.com/track/' + status.spotify.track_id" target="_blank">
          {{ status.spotify.song }} by {{ status.spotify.artist }}
        </a>
      </div>
    </div>
  </div>
</template>
