<template>
  <v-container class="w-full" v-if="!loading">
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
              :error-messages="v$.name.$errors.map((e) => e.$message)"
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
              :error-messages="v$.username.$errors.map((e) => e.$message)"
            ></v-text-field>

            <div
              class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
            >
              Phone Number
            </div>

            <v-text-field
              v-model="user.phoneNumber"
              density="compact"
              placeholder="Phone Number"
              variant="outlined"
              type="number"
              :error-messages="v$.phoneNumber.$errors.map((e) => e.$message)"
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
              :error-messages="v$.email.$errors.map((e) => e.$message)"
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
              :error-messages="v$.password.$errors.map((e) => e.$message)"
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
              :error-messages="
                v$.confirmPassword.$errors.map((e) => e.$message)
              "
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
              {{ resgisterErr ? resgisterErr : $t('register.checkInfo') }}
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
  <div class="flex justify-center w-screen h-screen items-center" v-else>
    <img src="@/assets/images/tube-spinner.svg" class="w-20 h-20" />
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import router from '@/router';
import { useVuelidate } from '@vuelidate/core';
import {
  minLength,
  required,
  email,
  sameAs,
  helpers,
} from '@vuelidate/validators';
import { useUserStore } from '@/store/user';

const user = reactive({
  name: '',
  username: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
});
const userStore = useUserStore();
const showPassword = ref(false);
const showAlert = ref(false);
const resgisterErr = ref('');
const loading = ref(false);
const mustBeLength = (value) => value.length === 11;
const mustBeStartWith = (value) => value.charAt(0) === '0';
const mustBePassword = (value) => /[A-Z]/.test(value) || /[a-z]/.test(value);

const rules = computed(() => {
  return {
    name: { required, minLength: minLength(3) },
    username: { required, minLength: minLength(3) },
    phoneNumber: {
      required,
      mustBeLength: helpers.withMessage(
        'The phone number must consist of 11 characters',
        mustBeLength,
      ),
      mustBeStartWith: helpers.withMessage(
        'The phone number start with 0',
        mustBeStartWith,
      ),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
      mustBePassword: helpers.withMessage(
        'The password must be include upper and lower case',
        mustBePassword,
      ),
    },
    confirmPassword: {
      required,
      sameAs: sameAs(user.password),
    },
  };
});

const v$ = useVuelidate(rules, user);

const payload = computed(() => {
  return {
    fullName: user.name,
    email: user.email,
    password: user.password,
    phoneNumber: user.phoneNumber,
    userName: user.username,
  };
});

const register = async () => {
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
    const res = await userStore.userRegister(payload.value);
    if (res.data.error) {
      loading.value = false;
      resgisterErr.value = res.data.error.errors[0];
      showAlert.value = true;
      setTimeout(() => {
        showAlert.value = false;
      }, 3000);
    } else {
      router.push('/login');
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
