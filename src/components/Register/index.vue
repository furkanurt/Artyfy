<template>
  <v-container class="w-full">
    <v-row no-gutters>
      <v-col cols="5" class="flex justify-center col-1">
        <v-sheet width="500" class="sheet-1">
          <div class="mobile-logo hidden w-full justify-center">
            <v-img :width="300" cover src="@/assets/logo.svg"></v-img>
          </div>
          <v-form ref="form">
            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              {{ $t('register.name') }}
            </div>

            <v-text-field
              v-model="user.name"
              density="compact"
              :placeholder="$t('register.name')"
              variant="outlined"
              type="name"
            ></v-text-field>

            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              {{ $t('register.surname') }}
            </div>

            <v-text-field
              v-model="user.surname"
              density="compact"
              :placeholder="$t('register.surname')"
              variant="outlined"
              type="name"
            ></v-text-field>

            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              {{ $t('register.username') }}
            </div>

            <v-text-field
              v-model="user.username"
              density="compact"
              :placeholder="$t('register.username')"
              variant="outlined"
              type="name"
            ></v-text-field>

            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              {{ $t('register.email') }}
            </div>

            <v-text-field
              v-model="user.email"
              density="compact"
              :placeholder="$t('register.email')"
              variant="outlined"
              type="email"
            ></v-text-field>

            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              {{ $t('register.password') }}
            </div>

            <v-text-field
              v-model="user.password"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              :type="showPassword ? 'text' : 'password'"
              density="compact"
              :placeholder="$t('register.password')"
              variant="outlined"
              @click:append-inner="showPassword = !showPassword"
            ></v-text-field>

            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              {{ $t('register.confirmPassword') }}
            </div>

            <v-text-field
              v-model="user.confirmPassword"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              :type="showPassword ? 'text' : 'password'"
              density="compact"
              :placeholder="$t('register.confirmPassword')"
              variant="outlined"
              @click:append-inner="showPassword = !showPassword"
            ></v-text-field>

            <v-btn
              class="mb-8"
              color="#fa9392"
              size="large"
              variant="flat"
              block
              @click="register"
            >
              <span class="text-white">{{ $t('register.title') }}</span>
            </v-btn>
          </v-form>
          <div class="text-center">
            {{ $t('register.haveAccount') }}
            <a
              class="text-[#fa9392] text-decoration-none"
              href="#"
              rel="noopener noreferrer"
              @click="router.push('/login')"
            >
              {{ $t('register.login') }}
            </a>
          </div>
          <div class="absolute bottom-0">
            <v-alert
              v-if="showAlert"
              type="error"
              class="mb-10"
              transition="slide-y-transition"
            >
              {{ $t('register.checkInfo') }}
            </v-alert>
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
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import router from '@/router';
import { useVuelidate } from '@vuelidate/core';
import { minLength, required, email, sameAs } from '@vuelidate/validators';

const user = reactive({
  name: '',
  surname: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
});
const showPassword = ref(false);
const showAlert = ref(false);

const rules = computed(() => {
  return {
    name: { required, minLength: minLength(3) },
    surname: { required, minLength: minLength(3) },
    username: { required, minLength: minLength(3) },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(3),
    },
    confirmPassword: {
      required,
      sameAs: sameAs(user.password),
    },
  };
});

const v$ = useVuelidate(rules, user);

const register = async () => {
  const result = await v$.value.$validate();
  console.log(v$.value);
  if (!result) {
    showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
    }, 3000);
    return;
  } else {
    console.log(user.value);
    localStorage.setItem('token', '12345');
    router.push('/login');
  }
};
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 100%;
  padding: 0px;

  .col-1 {
    padding-top: 10rem !important;
  }
}

@media screen and (max-width: 768px) {
  .v-container {
    .col-1 {
      padding-top: 10rem !important;
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
