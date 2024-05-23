<template>
  <div
    class="flex justify-center h-screen items-center"
    v-if="editedUser.userName === '' || userInfo.userName === ''"
  >
    <img src="@/assets/images/tube-spinner.svg" class="w-20 h-20" />
  </div>
  <div v-else>
    <div class="parallax">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white"
      >
        <h1 class="text-h4 font-weight-thin mb-4">
          <v-avatar :size="100">
            <img
              v-if="userInfo.image"
              :src="userInfo.image"
              alt="profilPhoto"
            />
            <v-img
              v-else
              src="@/assets/profile.png"
              class="bg-white"
              alt="profilPhoto"
            ></v-img>
          </v-avatar>
        </h1>
        <h4 class="subheading">@{{ userInfo.userName }}</h4>
      </div>
    </div>

    <div class="empty-container">
      <div class="left-container">
        <div class="inner-box">
          <h4>{{ userInfo.fullName }}</h4>
          <h5>{{ userInfo.city }}</h5>
        </div>
      </div>
      <div class="right-container">
        <v-btn @click="dialog = true" append-icon="mdi-account"
          >Profil Düzenle</v-btn
        >
        <v-dialog v-model="dialog" max-width="50%">
          <v-card class="py-7">
            <div class="input-box">
              <div
                class="input-item"
                style="display: flex; margin-bottom: 10%; margin-top: 0%"
              >
                <v-avatar :size="90">
                  <img
                    v-if="userInfo.image"
                    :src="userInfo.image"
                    alt="profilephoto"
                  />
                  <v-img
                    v-else
                    src="@/assets/profile.png"
                    alt="profilephoto"
                  ></v-img>
                </v-avatar>
              </div>
              <div class="input-item">
                <h1>Profil Fotoğrafı</h1>
                <v-file-input
                  v-model="editedUser.image"
                  density="compact"
                  variant="outlined"
                  placeholder="Profil Fotoğrafınızı Değiştirin"
                ></v-file-input>
              </div>
              <div class="input-item">
                <h1>Kullanıcı Adı</h1>
                <v-text-field
                  v-model="editedUser.userName"
                  density="compact"
                  variant="outlined"
                  placeholder="Kullanıcı Adınızı Değiştirin"
                  disabled
                ></v-text-field>
              </div>
              <div class="input-item">
                <h1>İsim Soyisim</h1>
                <v-text-field
                  v-model="editedUser.fullName"
                  density="compact"
                  variant="outlined"
                  placeholder="Adınızı Değiştirin"
                ></v-text-field>
              </div>
              <div class="input-item">
                <h1>E-posta</h1>
                <v-text-field
                  v-model="editedUser.email"
                  density="compact"
                  placeholder="e-posta adresinizi değiştirin"
                  prepend-inner-icon="mdi-email-outline"
                  variant="outlined"
                  type="email"
                ></v-text-field>
              </div>
              <div class="input-item">
                <h1>Telefon Numarası</h1>
                <v-text-field
                  v-model="editedUser.phoneNumber"
                  density="compact"
                  variant="outlined"
                  placeholder="Telefon Numaranızı Değiştirin"
                ></v-text-field>
              </div>
              <div class="input-item">
                <h1>Şehir</h1>
                <v-text-field
                  v-model="editedUser.city"
                  density="compact"
                  variant="outlined"
                  placeholder="Şehir Değiştirin"
                ></v-text-field>
              </div>
              <div class="input-item">
                <v-btn @click="updateUserProfile" append-icon="mdi-account"
                  >Değişiklikleri Kaydet</v-btn
                >
              </div>
            </div>
            <v-card-actions>
              <v-btn text="KAPAT" @click="dialog = false"></v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
const dialog = ref(false);
const userInfo = ref([]);
const editedUser = ref([]);

onMounted(async () => {
  await userStore.fetchUserDetail();
  userInfo.value = userStore.userDetail;
  editedUser.value = userStore.userDetail;
});

const updateUserProfile = async () => {
  try {
    await userStore.updateUserProfile(editedUser.value);
    await userStore.fetchUserDetail();
    dialog.value = false;
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped>
.inner-box {
  margin: 10px;
  width: fit-content;
}
.empty-container {
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.left-container {
  background-color: #ededed;
  height: 70%;
  width: fit-content;
  text-align: justify;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(8, 8, 8, 0.1);
  margin-right: 50px;
}
.inner-box h1 {
  padding: 10%;
  text-shadow: 50%;
}
.input-item {
  width: 300px;
  margin: 10px;
  align-items: center;
  justify-content: center;
}
.input-box {
  width: auto;
  align-items: center;
  padding: 0%;
  text-align: justify;
}
.v-card {
  background-color: white;
  align-items: center;
  width: 500px;
}
h4 {
  font-size: large;
  font-weight: 500;
}
.left-container {
  width: auto;
  margin-right: 10px;
}
.right-container {
  width: auto;
}
.parallax {
  height: 400px;
  background: rgb(252, 147, 148);
  background: linear-gradient(
    344deg,
    rgba(252, 147, 148, 1) 0%,
    rgba(244, 220, 158, 1) 50%,
    rgba(252, 147, 148, 1) 100%
  );
}
</style>
