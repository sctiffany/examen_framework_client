<script setup>
import { useContactsStore } from '@/stores/contacts';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';


const router = useRouter();
const contactsStore = useContactsStore();
const props = defineProps({
    contact: Object,
});

const deleteId = (id) => {
  contactsStore.deleteOneById(id);
  toast.success("Contact supprimé avec succès !");
};

const update = (id) => {
    router.push(`/addContact/${id}`);
}
</script>

<template>
    <li data-id="contact.id" class="md:flex items-center justify-between py-4">
        <div class="pb-4 md:pb-0">
            <h3 class="text-lg font-semibold">{{ contact.name }}</h3>
            <p class="text-gray-500">{{ contact.email }}</p>
            <p class="text-gray-500">{{ contact.phone }}</p>
        </div>
        <div class="flex gap-2">
            <button
                class="bg-yellow-400 text-white px-4 py-2 rounded shadow hover:bg-yellow-500"
                @click.prevent="update(contact.id)"
            >
                Edit
            </button>
            <button
                class="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
                @click.prevent="deleteId(contact.id)"
            >
                Delete
            </button>
        </div>
    </li>
</template>