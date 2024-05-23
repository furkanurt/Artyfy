<template>
  <v-layout class="block p-0">
    <v-stepper v-model="e1">
      <template v-slot:default="{ prev, next }">
        <v-stepper-header>
          <template v-for="(step, n) in steps" :key="`${n}-step`">
            <v-stepper-item
              :complete="e1 > step.id"
              :step="`Step {{ step.name }}`"
              :value="step.id"
              :title="step.name"
              editable
            ></v-stepper-item>

            <v-divider v-if="n !== steps" :key="n"></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-window>
          <v-stepper-window-item
            v-for="(step, n) in steps"
            :key="`${n}-content`"
            :value="step.id"
          >
            <Component :is="currentStepComponent" />
          </v-stepper-window-item>
        </v-stepper-window>

        <v-stepper-actions
          :disabled="disabled"
          @click:next="next"
          @click:prev="prev"
        ></v-stepper-actions>
      </template>
    </v-stepper>
  </v-layout>
</template>

<script setup>
import { ref, computed } from 'vue';
import Products from './Products.vue';
import AddressForm from './AddressForm.vue';
import Payment from './Payment.vue';

const e1 = ref(1);
const steps = ref([
  {
    id: 1,
    name: 'Sepet',
  },
  {
    id: 2,
    name: 'Adres',
  },
  {
    id: 3,
    name: 'Ödeme',
  },
]);

const disabled = computed(() => {
  return e1.value === 1
    ? 'prev'
    : e1.value === steps.value
      ? 'next'
      : undefined;
});

const pages = ref({
  1: Products,
  2: AddressForm,
  3: Payment,
});

const currentStepComponent = computed(() => {
  return pages.value[e1.value];
});
</script>

<style lang="scss" scoped></style>
