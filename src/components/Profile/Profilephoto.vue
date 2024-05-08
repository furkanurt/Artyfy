<template>
  <v-parallax src="https://source.unsplash.com/random/900x600">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">
        <v-avatar :size="120">
          <img :src="user.avatar" alt="User Avatar" />
        </v-avatar>
      </h1>
      <h4 class="subheading">{{ user.username }}</h4>
    </div>
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h4>Followers: {{ user.followers }}</h4>
    </div>
  </v-parallax>

  <div class="empty-container">
    <div class="left-container">
      <h4>{{ user.name }}</h4>
      <h5>Posts: {{ user.postCount }}</h5>
      <h5>Followers: {{ user.followers }}</h5>
    </div>
    <div class="right-container">
      <v-btn @click="dialog = true" append-icon="mdi-account">Edit Profile</v-btn>
      <v-dialog v-model="dialog" width="auto" style="background: none;">
        <v-card width="900" title="Edit Profile">
          <div class="input-box" style="width: 400px; padding: 1rem; margin: auto">
            <div class="input-item">

              <h1>Edit Name</h1>
              <v-text-field v-model="editedUser.name" density="compact"
               variant="outlined" placeholder="Change Name"></v-text-field>
            </div>
            <div class="input-item">
              <h1>Edit Mail</h1>


              <v-text-field v-model="editedUser.email" density="compact"   placeholder="Edit Mail" prepend-inner-icon="mdi-email-outline" variant="outlined" type="email"></v-text-field>
            </div>
            <div class="input-item">
              <h1>Edit Phone Number</h1>
              <v-text-field v-model="editedUser.phoneNumber" density="compact" 
               variant="outlined" placeholder="Change Phone Number"></v-text-field>
            </div>
            <div class="input-item">
              <h1>Edit Username</h1>
              <v-text-field v-model="editedUser.username" density="compact" variant="outlined" placeholder="Change Username"></v-text-field>
            </div>
            <div class="input-item">
              <h1>Edit Profile Picture</h1>
              <v-file-input placeholder="Change Your Profile Picture">


              </v-file-input>
            </div>
            <v-btn @click="updateUserProfile" append-icon="mdi-account" style="align-items: center;">Save Changes</v-btn>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useUserStore } from '@/store/user';

export default {
  setup() {
    const userStore = useUserStore();
    const dialog = ref(false);
    const user = ref({
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg', 
      username: '@glsmvrl', 
      name: 'Gülsüm Vural',
      followers: 45,
      postCount: 20 
    });
    const editedUser = ref({ ...user.value });

    const updateUserProfile = async () => {
      try {
        await userStore.updateUserProfile(editedUser.value);
        await userStore.fetchUserDetail();
        dialog.value = false;
      } catch (error) {
        console.error(error);
        
      }
    };

    return {
      dialog,
      user,
      editedUser,
      updateUserProfile
    };
  }
};
</script>

<style scoped>
.empty-container {
  height: 100px; 
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: space-between; 
  padding: 0 20px; 
}
.input-item{
  width: 250px;
  margin: 10px;
}
.input-box {
  width: 400px;
  align-items:center;
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
