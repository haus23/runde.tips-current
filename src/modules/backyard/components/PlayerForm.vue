<template>
  <h3 class="text-xl font-semibold border-b">Neuer Spieler</h3>
  <form @submit.prevent="save">
    <div>
      <label for="name">Name</label
      ><input id="name" type="text" placeholder="Name" />
    </div>
    <div>
      <label for="email">Email</label
      ><input id="email" type="email" placeholder="Name" />
    </div>
    <div>
      <button
        class="
          bg-pink-500
          text-white
          active:bg-pink-600
          font-bold
          uppercase
          text-sm
          px-6
          py-3
          rounded
          shadow
          hover:shadow-lg
          outline-none
          focus:outline-none
          mr-1
          mb-1
          ease-linear
          transition-all
          duration-150
        "
        type="submit"
      >
        Speichern
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  emits: ['save'],
  setup(props, context) {
    const name = ref('');
    const email = ref('');

    return {
      name,
      email,
      save() {
        context.emit('save', { name, email });
      },
    };
  },
};
</script>
