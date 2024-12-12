<script setup>
import { useContactsStore } from '@/stores/contacts';
const contactsStore = useContactsStore();
</script>

<template>
    <h2 class="text-xl mb-4 flex justify-between">
    <span class="font-semibold">Contacts</span>
    <span class="text-sm">{{ contactsStore.contactsCount }} item(s)</span>
    </h2>
</template>