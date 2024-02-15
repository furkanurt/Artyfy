<template>
  <div>
    <div class="w-full py-5 pl-7">
      <p class="font-extrabold text-xl">Home</p>
    </div>
    <v-divider></v-divider>
    <v-textarea
      bg-color="white"
      label="What's Happening?"
      rows="3"
      class="px-7"
      variant="plain"
      clearable
      clear-icon="mdi-close-circle"
      no-resize
      hide-details
    >
    </v-textarea>
    <div id="file-input" class="px-7 flex justify-between">
      <v-file-input
        class="pr-7"
        accept="image/*"
        density="compact"
        variant="underlined"
        multiple
      ></v-file-input>
      <v-btn
        rounded="xl"
        class="w-10 text-white"
        style="background-color: #fa9392"
        >Post</v-btn
      >
    </div>
  </div>
</template>
