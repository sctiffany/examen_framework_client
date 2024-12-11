<script setup>
import ContactsList from '@/components/ContactsList.vue';
import ContactsListHeader from '@/components/ContactsListHeader.vue';
import SearchContactsInput from '@/components/SearchContactsInput.vue';
import { useContactsStore } from '@/stores/contacts';
const contactsStore = useContactsStore();

</script>

<template>
<main class="container mx-auto px-4 mt-6 flex-grow">
    <div class="flex flex-col lg:flex-row gap-6">
        <!-- Contact List Section -->
        <section class="w-full lg:w-2/3 bg-white rounded-lg shadow p-6">
            <ContactsListHeader />
            <SearchContactsInput />
            <ContactsList :contacts="contactsStore.contacts"/>
        </section>
    </div>
</main>
</template>