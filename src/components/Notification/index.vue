<template>
  <v-layout class="notification-layout">
    <div class="notification-list" v-if="notifications.length > 0">
      <div
        v-for="(notification, index) in notifications"
        :key="index"
        class="notification"
        :style="{
          borderBottom:
            index !== notifications.length - 1 ? '1px solid #ccc' : 'none',
        }"
      >
        <img
          :src="`https://mst-images.com.tr/artyfy/${notification.imageUrl}`"
          alt="Profile"
          class="profile-picture"
        />
        <div
          class="notification-content cursor-pointer"
          @click="router.push(`/post-detail/${notification.postId}`)"
        >
          <p>
            <strong>{{ notification.userFullName }}</strong>
            <span v-if="notification.notificationType === 1">
              postunuzu beğendi.
            </span>
            <span v-if="notification.notificationType === 2">
              postunuza yorum yaptı.
            </span>
            <span v-if="notification.notificationType === 3">
              postunuzu kaydetti.
            </span>
          </p>
        </div>
      </div>
    </div>
    <div v-else>Bildirim yok</div>
  </v-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePostStore } from '@/store/post';

const notifications = ref([]);
const postStore = usePostStore();

const fetchNotificationsUsers = async () => {
  try {
    const res = await postStore.fetchNotification(
      localStorage.getItem('reduxState'),
    );
    notifications.value = res;
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  fetchNotificationsUsers();
});
</script>

<style lang="scss" scoped>
.notification-layout {
  display: flex;
  justify-content: center;
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
