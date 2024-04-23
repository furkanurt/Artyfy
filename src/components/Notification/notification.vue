<template>
  <v-layout class="notification-layout">
    <div v-if="notifications.length" class="notification-list">
      <div v-for="(notification, index) in notifications" :key="notification.id" class="notification" :style="{ borderBottom: index !== notifications.length - 1 ? '1px solid #ccc' : 'none' }">
        <img :src="notification.profilePicture" alt="Profile" class="profile-picture">
        <div class="notification-content">
          <p>
            <strong>{{ notification.username }}</strong> {{ notification.message }}
          </p>
        </div>
      </div>
    </div>
  </v-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'; 

const notifications = ref([
  {
    id: 1,
    username: "Devon Lane",
    message: "New Post! Click and see the content."
  },
  {
    id: 2,
    username: "Darlene Roberts",
    message: "New Photo! Click and comment. 📸'"
  },
  {
    id: 3,
    username: "John Wick",
    message: "I have news for you. Are you curious?"
  },
  {
    id: 4,
    username: "Jordan Man",
    message: "Like your Post!"
  },
  {
    id: 5,
    username: "Jennifer Foreman",
    message: "Commend on your post! : I like it very much ❤"
  },
  {
    id: 6,
    username: "Michael Johnson",
    message: "Tagged you in a photo. Check it out!"
  },
  {
    id: 7,
    username: "Alice Smith",
    message: "Shared a post with you. Have a look!"
  },
  {
    id: 8,
    username: "Emily Brown",
    message: "Started following you. Follow back?"
  },
  {
    id: 9,
    username: "Chris Green",
    message: "Sent you a friend request."
  },
  {
    id: 10,
    username: "Alex Turner",
    message: "Liked your photo!"
  },
  {
    id: 11,
    username: "Sophia Martinez",
    message: "Commented on your post: Great content!"
  },
  {
    id: 12,
    username: "Ethan Johnson",
    message: "Mentioned you in a comment."
  },
  {
    id: 13,
    username: "Emma Wilson",
    message: "Replied to your comment: Thanks!"
  },
  {
    id: 14,
    username: "Olivia White",
    message: "Invited you to an event."
  },
  {
    id: 15,
    username: "Matthew Lee",
    message: "Shared a story with you."
  },
  {
    id: 16,
    username: "Daniel Clark",
    message: "Tagged you in a post."
  },
  {
    id: 17,
    username: "Sophie Turner",
    message: "Liked your comment."
  },
  {
    id: 18,
    username: "Lucas Martinez",
    message: "Added you as a collaborator."
  },
  {
    id: 19,
    username: "Grace Adams",
    message: "Started following you."
  },
  {
    id: 20,
    username: "Aaron Brown",
    message: "Shared a video with you."
  },
  {
    id: 21,
    username: "Isabella Harris",
    message: "Sent you a message."
  },
]);

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
  width: 100%;
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
</style>
