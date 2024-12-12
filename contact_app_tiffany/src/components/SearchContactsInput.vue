<script setup>
import { useContactsStore } from '@/stores/contacts';
const contactsStore = useContactsStore();
</script>

<template>
    <div class="flex items-center mb-4">
        <input
            type="text"
            placeholder="Search contacts..."
            class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            v-model="contactsStore.searchQuery.name"
        />
    </div>
</template>