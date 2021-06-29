<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <transition-root as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        static
        class="fixed inset-0 flex z-40 md:hidden"
        @close="sidebarOpen = false"
        :open="sidebarOpen"
      >
        <transition-child
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </transition-child>
        <transition-child
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
            <transition-child
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  class="
                    ml-1
                    flex
                    items-center
                    justify-center
                    h-10
                    w-10
                    rounded-full
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
                  "
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </transition-child>
            <div class="flex-shrink-0 flex items-center px-4">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
              />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2 space-y-1">
                <sidenav-link @click="sidebarOpen = false" :icon="HomeIcon" to="/hinterhof/dashboard">Dashboard</sidenav-link>
                <sidenav-link @click="sidebarOpen = false" :icon="ClipboardListIcon" to="/hinterhof/turniere"
                  >Turniere</sidenav-link
                >
                <sidenav-link @click="sidebarOpen = false" :icon="UsersIcon" to="/hinterhof/spieler">Spieler</sidenav-link>
              </nav>
            </div>
          </div>
        </transition-child>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </transition-root>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <div class="flex flex-col flex-grow border-r border-gray-200 py-4 bg-white overflow-y-auto">
          <div class="flex items-center flex-shrink-0 px-4">
            <router-link to="/" class="flex items-center gap-x-2">
              <svg class="fill-current h-8" viewBox="0 0 3160 2610">
                <g>
                  <path
                    d="m 1155,2469 c -108,-16 -165,-32 -165,-45 0,-8 41,-141 91,-296 50,-156 101,-314 113,-352 26,-84 46,-98 41,-29 -2,26 -6,140 -9,253 -7,211 -17,475 -20,476 0,0 -23,-3 -51,-7 z"
                  />
                  <path
                    d="m 1454,2452 c -4,-15 -51,-189 -105,-387 -62,-229 -94,-364 -88,-370 6,-6 14,-2 23,10 8,11 124,173 259,360 135,187 243,343 238,348 -9,9 -205,52 -273,61 -46,5 -48,4 -54,-22 z"
                  />
                  <path
                    d="m 770,2336 c -62,-37 -130,-89 -129,-100 0,-6 120,-134 267,-283 182,-186 271,-270 280,-265 9,6 -41,98 -183,336 -107,181 -196,330 -197,331 -2,1 -19,-8 -38,-19 z"
                  />
                  <path
                    d="m 1701,1978 c -340,-255 -400,-303 -388,-315 11,-12 82,9 458,132 244,81 494,162 554,182 61,20 113,39 117,42 12,11 -152,141 -284,225 l -56,35 z"
                  />
                  <path
                    d="m 498,2083 c -20,-24 -81,-133 -77,-138 2,-2 123,-51 269,-110 146,-59 307,-125 359,-146 92,-38 120,-43 90,-15 -24,23 -608,426 -617,426 -5,0 -16,-8 -24,-17 z"
                  />
                  <path
                    d="m 356,1715 c -9,-68 -8,-165 3,-165 7,0 376,25 676,46 50,4 93,11 97,17 4,6 6,13 4,14 -1,2 -163,30 -359,63 -196,33 -369,63 -385,66 -28,6 -29,4 -36,-41 z"
                  />
                  <path
                    d="m 2510,1700 c -52,-5 -140,-11 -195,-14 -55,-4 -127,-9 -160,-12 -78,-6 -785,-54 -807,-54 -30,0 -9,-27 25,-33 18,-3 358,-60 755,-127 398,-67 726,-119 729,-116 11,10 -48,168 -99,269 l -50,97 -51,-1 c -29,-1 -95,-5 -147,-9 z"
                  />
                  <path
                    d="m 758,1466 c -201,-66 -370,-124 -373,-128 -9,-9 27,-129 65,-213 22,-50 33,-65 43,-58 6,6 157,119 334,251 233,175 321,246 317,257 -4,8 -9,15 -13,14 -3,-1 -171,-56 -373,-123 z"
                  />
                  <path
                    d="m 1323,1564 c -3,-8 -4,-16 -2,-18 2,-2 81,-57 174,-122 181,-125 295,-205 545,-379 258,-180 424,-295 565,-393 l 134,-92 40,69 c 64,109 126,313 99,324 -7,2 -215,87 -463,187 -1072,435 -1086,440 -1092,424 z"
                  />
                  <path
                    d="m 1137,1508 c -13,-18 -71,-98 -129,-178 C 951,1250 844,1103 772,1003 699,903 640,817 640,811 c 0,-6 53,-64 117,-130 109,-109 168,-159 177,-150 5,6 266,972 266,986 0,9 -21,23 -35,23 -2,0 -15,-15 -28,-32 z"
                  />
                  <path
                    d="m 1300,1531 c 0,-6 172,-299 381,-653 210,-354 386,-653 392,-665 9,-20 15,-22 51,-16 119,18 356,110 356,138 0,6 -17,28 -37,47 -21,19 -168,170 -328,334 -159,164 -375,387 -480,494 -104,107 -219,225 -255,263 -63,65 -80,77 -80,58 z"
                  />
                  <path
                    d="m 1244,1403 c 3,-65 8,-201 11,-303 3,-102 7,-237 10,-300 3,-63 8,-198 11,-300 3,-102 7,-186 9,-188 19,-21 401,-130 413,-118 2,2 -51,174 -118,382 -67,209 -153,478 -191,599 -117,367 -108,345 -131,345 -19,0 -20,-4 -14,-117 z"
                  />
                </g>
              </svg>
              <span class="font-medium">runde.tips</span>
            </router-link>
          </div>
          <div class="mt-5 flex-grow flex flex-col">
            <nav class="flex-1 px-2 bg-white space-y-1">
              <sidenav-link :icon="HomeIcon" to="/hinterhof/dashboard">Dashboard</sidenav-link>
              <sidenav-link :icon="ClipboardListIcon" to="/hinterhof/turniere"
                >Turniere</sidenav-link
              >
              <sidenav-link :icon="UsersIcon" to="/hinterhof/spieler">Spieler</sidenav-link>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="relative z-10 flex-shrink-0 flex h-12 bg-white shadow">
        <button
          @click="sidebarOpen = true"
          class="
            px-4
            border-r border-gray-200
            text-gray-500
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500
            md:hidden
          "
        >
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <main class="flex-1 relative overflow-y-auto focus:outline-none">
        <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 md:px-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script type="ts">
import {ref} from "vue";
import { Dialog, DialogOverlay, TransitionRoot, TransitionChild } from "@headlessui/vue";
import { MenuAlt2Icon, HomeIcon, ClipboardListIcon, UsersIcon, XIcon } from "@heroicons/vue/outline";
import SidenavLink from "@/components/layouts/backyard/SidenavLink.vue";

export default {
  components: {
    Dialog,
    DialogOverlay,
    MenuAlt2Icon,
    SidenavLink,
    TransitionChild,
    TransitionRoot,
    XIcon
  },
  name: "BackyardLayout",
  setup() {
    const sidebarOpen = ref(false);
    return {
      sidebarOpen,
      HomeIcon,
      ClipboardListIcon,
      UsersIcon
    }
  }
}
</script>
