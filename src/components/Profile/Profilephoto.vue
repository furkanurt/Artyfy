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
                  : 'https://randomuser.me/api/portraits/women/50.jpg'
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
      <div class="inner-box">
        <h4>{{ userInfo.fullName }}</h4>
        <h5> {{ userInfo.city }}</h5>
      </div>
      </div>
      <div class="right-container">
        <v-btn @click="dialog = true" append-icon="mdi-account"
          >Edit Profile</v-btn
        >
        <v-dialog v-model="dialog" max-width="50%">
  <v-card>
    <v-img src="https://picjj.com/images/2024/05/09/s0irz.png" width="140px"></v-img>
    <div class="input-box">
      <div class="input-item" style=" display: flex; margin-bottom: 10%; margin-top: 0%">
        <v-avatar :size="90">
          <img :src="userInfo.image ? userInfo.image : 'https://randomuser.me/api/portraits/women/50.jpg'" alt="User Avatar" />
        </v-avatar>
      </div>
      <div class="input-item">
        <h1>Profile Picture</h1>
        <v-file-input v-model="editedUser.image" density="compact" variant="outlined" placeholder="Change Your Profile Picture"></v-file-input>
      </div>
      <div class="input-item">
        <h1>Username</h1>
        <v-text-field v-model="editedUser.userName" density="compact" variant="outlined" placeholder="You cant change your username" disabled></v-text-field>
      </div>
      <div class="input-item">
        <h1>Name</h1>
        <v-text-field v-model="editedUser.fullName" density="compact" variant="outlined" placeholder="Change Name"></v-text-field>
      </div>
      <div class="input-item">
        <h1>Email</h1>
        <v-text-field v-model="editedUser.email" density="compact" placeholder="Edit Mail" prepend-inner-icon="mdi-email-outline" variant="outlined" type="email"></v-text-field>
      </div>
      <div class="input-item">
        <h1>Phone Number</h1>
        <v-text-field v-model="editedUser.phoneNumber" density="compact" variant="outlined" placeholder="Change Phone Number"></v-text-field>
      </div>
      <div class="input-item">
        <h1>City</h1>
        <v-text-field v-model="editedUser.city" density="compact" variant="outlined" placeholder="Change City"></v-text-field>
      </div>
      <div class="input-item">
      <v-btn @click="updateUserProfile" append-icon="mdi-account">Save Changes</v-btn>
      </div>
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
.left-container{
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
</style>
