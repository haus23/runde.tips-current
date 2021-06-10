<template>
<div class="flex flex-col items-center">
    <div class="flex flex-col space-y-8 items-center justify-center max-w-md w-full">
      <h2 class="text-3xl">Anmeldung</h2>
      <form class="w-full space-y-4" @submit.prevent="logIn">
        <div class="rounded-md -space-y-px">
          <div>
            <label for="email" class="sr-only">Email</label>
            <input v-model="email" id="email" type="text" placeholder="Email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 dark:bg-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
          </div>
          <div>
            <label for="password" class="sr-only">Passwort</label>
            <input v-model="password" id="password" type="password" placeholder="Passwort" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 dark:bg-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
          </div>
        </div>
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 dark:bg-indigo-800 hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Anmelden
          </button>
        </div>
        <div v-if="hasError" class="text-center">
          <span class="text-red-500 font-semibold">Fehler bei der Anmeldung.</span>
        </div>
      </form>
    </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { LockClosedIcon } from "@heroicons/vue/outline";
import { auth } from "../../api/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useRouter } from "vue-router";
import { useStore } from 'vuex';

export default {
  name: "FohLogIn",
  components: { LockClosedIcon },
  setup() {

    const store = useStore();
    const router = useRouter();

    const email = ref('');
    const password = ref('');
    const hasError = ref(false);

    const logIn = () => {
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
          store.commit('signIn');
          router.replace('/hinterhof');
        })
        .catch(() => hasError.value = true);
    };

    return {
      email,
      password,
      hasError,
      logIn
    };
  },
}
</script>
