<template>
  <div
    class="flex justify-center h-screen items-center"
    v-if="editedUser.userName === '' || userInfo.userName === ''"
  >
    <img src="@/assets/images/tube-spinner.svg" class="w-20 h-20" />
  </div>
  <div v-else>
    <v-parallax src="https://source.unsplash.com/random/900x600">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white"
      >
        <h1 class="text-h4 font-weight-thin mb-4">
          <v-avatar :size="120">
            <img
              :src="
                userInfo.image
                  ? userInfo.image
                  : 'https://randomuser.me/api/portraits/women/4.jpg'
              "
              alt="User Avatar"
            />
          </v-avatar>
        </h1>
        <h4 class="subheading">@{{ userInfo.userName }}</h4>
      </div>
    </v-parallax>

    <div class="empty-container">
      <div class="left-container">
        <h4>{{ userInfo.fullName }}</h4>
      </div>
      <div class="right-container">
        <v-btn @click="dialog = true" append-icon="mdi-account"
          >Edit Profile</v-btn
        >
        <v-dialog v-model="dialog" width="auto" style="background: none">
          <v-card width="900" title="Edit Profile">
            <div
              class="input-box"
              style="width: 400px; padding: 1rem; margin: auto"
            >
              <div class="input-item">
                <h1>Username</h1>
                <v-text-field
                  v-model="editedUser.userName"
                  density="compact"
                  variant="outlined"
                  placeholder="Change Username"
                  disabled
                ></v-text-field>
              </div>
              <div class="input-item">
                <h1>Name</h1>
                <v-text-field
                  v-model="editedUser.fullName"
                  density="compact"
                  variant="outlined"
                  placeholder="Change Name"
                ></v-text-field>
              </div>
              <div class="input-item">
                <h1>Email</h1>

                <v-text-field
                  v-model="editedUser.email"
                  density="compact"
                  placeholder="Edit Mail"
                  prepend-inner-icon="mdi-email-outline"
                  variant="outlined"
                  type="email"
                ></v-text-field>
              </div>
              <div class="input-item">
                <h1>Phone Number</h1>
                <v-text-field
                  v-model="editedUser.phoneNumber"
                  density="compact"
                  variant="outlined"
                  placeholder="Change Phone Number"
                ></v-text-field>
              </div>
              <div class="input-item">
                <h1>City</h1>
                <v-text-field
                  v-model="editedUser.city"
                  density="compact"
                  variant="outlined"
                  placeholder="Change Username"
                ></v-text-field>
              </div>
              <div class="input-item">
                <h1>Profile Picture</h1>
                <v-file-input
                  v-model="editedUser.image"
                  density="compact"
                  variant="outlined"
                  placeholder="Change Your Profile Picture"
                >
                </v-file-input>
              </div>
              <v-btn
                @click="updateUserProfile"
                append-icon="mdi-account"
                style="align-items: center"
                >Save Changes</v-btn
              >
            </div>
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
  editedUser.value = userStore.userDetail;
  userInfo.value = userStore.userDetail;
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
.empty-container {
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.input-item {
  width: 250px;
  margin: 10px;
}
.input-box {
  width: 400px;
  align-items: center;
  padding: 20px;
  text-align: justify;
}
.v-card {
  background-color: white;
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
</style>
