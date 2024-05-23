<template>
  <v-layout class="notification-layout">
    <div v-if="notifications.length" class="notification-list">
      <div
        v-for="(notification, index) in notifications"
        :key="notification.id"
        class="notification"
        :style="{
          borderBottom:
            index !== notifications.length - 1 ? '1px solid #ccc' : 'none',
        }"
      >
        <img
          :src="notification.profilePicture"
          alt="Profile"
          class="profile-picture"
        />
        <div class="notification-content">
          <p>
            <strong>{{ notification.username }}</strong>
            {{ notification.message }}
          </p>
        </div>
      </div>
    </div>
    <div v-else class="no-notification">Bildirim yok</div>
  </v-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePostStore } from '@/store/post';

const notifications = ref([]);
const postStore = usePostStore();
const sendNotification = async (userId) => {
  try {
    const userAppId = localStorage.getItem('reduxState');
    const response = await postStore.notificationPage(userAppId);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
onMounted(async () =>  {
 await sendNotification(userId);
});

const fetchRandomProfilePicture = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data.results[0].picture.large;
  } catch (error) {
    console.error('Error fetching profile picture:', error);
    return '';
  }
};

onMounted(async () => {
  for (let i = 0; i < notifications.value.length; i++) {
    notifications.value[i].profilePicture = await fetchRandomProfilePicture();
  }
});
</script>

<style lang="scss" scoped>
.notification-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.notification-list {
  width: 100%;
  margin-top: 35px;
  padding: 0 10px;
}

.notification {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
}

.profile-picture {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.notification-content {
  flex: 1;
  font-size: 17px;
}

.no-notification {
  font-size: 18px;
  color: #888;
}
</style>
