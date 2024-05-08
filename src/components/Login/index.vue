<template>
  <v-container class="w-full" v-if="!loading">
    <v-row no-gutters>
      <v-col cols="5" class="flex justify-center col-1">
        <v-sheet width="500" class="sheet-1">
          <div class="mobile-logo hidden w-full justify-center">
            <v-img :width="300" cover src="@/assets/logo.svg"></v-img>
          </div>
          <h3 class="login-title text-3xl font-bold text-[#fa9392]">
            {{ $t('login.title') }}
          </h3>
          <v-form class="mt-10" ref="form">
            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              {{ $t('login.email') }}
            </div>

            <v-text-field
              v-model="user.email"
              density="compact"
              :placeholder="$t('login.enterEmail')"
              prepend-inner-icon="mdi-email-outline"
              variant="outlined"
              type="email"
            ></v-text-field>

            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              {{ $t('login.password') }}

              <a
                class="text-caption text-decoration-none text-[#fa9392]"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                {{ $t('login.forgotPassword') }}</a
              >
            </div>

            <v-text-field
              v-model="user.password"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              :type="showPassword ? 'text' : 'password'"
              density="compact"
              :placeholder="$t('login.enterPassword')"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              @click:append-inner="showPassword = !showPassword"
            ></v-text-field>

            <v-btn
              class="mb-8"
              color="#fa9392"
              size="large"
              variant="flat"
              block
              @click="login"
            >
              <span class="text-white">{{ $t('login.login') }}</span>
            </v-btn>
          </v-form>
          <div class="text-center">
            {{ $t('login.dontHaveAccount') }}
            <a
              class="text-[#fa9392] text-decoration-none"
              href="#"
              rel="noopener noreferrer"
              @click="router.push('/register')"
            >
              {{ $t('login.signUp') }}
            </a>
          </div>
          <div class="absolute bottom-0">
            <v-alert
              v-if="showAlert"
              type="error"
              class="mb-10"
              transition="slide-y-transition"
              >{{ loginErr ? loginErr : $t('login.checkInfo') }}</v-alert
            >
          </div>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="login-bg h-screen">
          <div class="h-full flex items-center bg-[#fbf5e6]">
            <v-img cover src="@/assets/images/login-bg.svg"></v-img>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <div class="flex justify-center w-screen h-screen items-center" v-else>
    <img src="@/assets/images/tube-spinner.svg" class="w-20 h-20" />
  </div>
</template>

<script setup>
import router from '@/router';
import { ref, reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { minLength, required, email } from '@vuelidate/validators';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
const loginErr = ref('');
const user = reactive({
  email: '',
  password: '',
});
const showPassword = ref(false);
const showAlert = ref(false);
const loading = ref(false);
const rules = computed(() => {
  return {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  };
});

const v$ = useVuelidate(rules, user);

const login = async () => {
  const result = await v$.value.$validate();
  loading.value = true;
  if (!result) {
    loading.value = false;
    showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
    }, 3000);
    return;
  } else {
    const res = await userStore.userLogin(user);
    loading.value = false;
    if (res.data.error) {
      loginErr.value = res.data.error.errors[0];
      showAlert.value = true;
      setTimeout(() => {
        showAlert.value = false;
      }, 3000);
    } else {
      await userStore.fetchUserDetail();

      setTimeout(() => {
        router.push('/');
      }, 300);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 100%;
  padding: 0px;

  .col-1 {
    align-items: center;
  }
}

@media screen and (max-width: 768px) {
  .v-container {
    .col-1 {
      align-items: center;
    }
    .v-row {
      padding: 0px 20px;
      .v-col-5 {
        flex: none;
        max-width: 100%;
        .mobile-logo {
          display: flex;
        }
        .login-title {
          margin-top: 2rem;
        }
      }
      .login-bg {
        display: none;
      }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 1300px) {
  .v-container {
    .v-row {
      .sheet-1 {
        padding: 0px 30px;
      }
      .v-col-5 {
        flex: none;
        max-width: 45%;
      }
    }
  }
}
</style>
