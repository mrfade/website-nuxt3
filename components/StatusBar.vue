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

<style lang="scss" scoped>
.statusbar {
  width: 100%;
  height: 3rem;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: rgba($bg-color, .8);
  backdrop-filter: blur(8px);
  color: #fff;
  border-top: 1px solid #444;

  &.spotify {
    background-color: #1ED760;
    border-top: 1px solid #ccc;

    .status {
      &.online {
        .icon {
          background: #fff;
        }
      }

      &.idle, &.dnd {
        .icon {
          >rect {
            fill: #fff;
          }
        }
      }
    }
  }

  .status {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #fff;
    text-transform: capitalize;
    user-select: none;
    height: 2rem;

    .icon {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      margin-right: .5rem;
    }

    &.online {
      .icon {
        background: #43B581;
      }
    }

    &.idle {
      .icon {
        >rect {
          fill: hsl(38, 95.7%, 54.1%);
        }
      }
    }

    &.dnd {
      .icon {
        >rect {
          fill: hsl(359, 82.6%, 59.4%);
        }
      }
    }

    &.offline {
      .icon {
        background: #aaa;
      }
    }
  }

  .activity {
    display: flex;
    align-items: center;
    overflow: hidden;

    .image {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
      overflow: hidden;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
