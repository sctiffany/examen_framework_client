<script setup>
import { reactive, onMounted } from 'vue';
import { useContactsStore } from '@/stores/contacts';
import { useRouter, useRoute } from 'vue-router';

const contactsStore = useContactsStore();
const router = useRouter();
const route = useRoute();

const newContact = reactive({ id: null, name: '', email: '', phone: ''});
const errors = reactive({ name: '', email: '', phone: '' });

const validateName = (name) => name.trim() !== '';
const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
const validatePhone = (phone) => {
  const phonePattern = /^\d+$/;
  return phonePattern.test(phone);
};

const validateForm = () => {
  let isValid = true;

  if (!validateName(newContact.name)) {
    errors.name = 'Le champ Nom ne peut pas être vide';
    isValid = false;
  } else {
    errors.name = '';
  }

  if (!validateEmail(newContact.email)) {
    errors.email = 'Email non valide';
    isValid = false;
  } else {
    errors.email = '';
  }

  if (!validatePhone(newContact.phone)) {
    errors.phone = 'Le numéro de téléphone doit être un numéro';
    isValid = false;
  } else {
    errors.phone = '';
  }

  return isValid;
};

const add = () => {
  if (!validateForm()) {
    return;
  }

  if (newContact.id) {
    contactsStore.updateContact({ ...newContact });
  } else {
    newContact.id = Date.now();
    contactsStore.addContact({ ...newContact });
  }

  newContact.name = '';
  newContact.email = '';
  newContact.phone = '';
  newContact.id = null;

  router.push('/');
};

onMounted(() => {
  const contactId = route.params.id;
  if (contactId) {
    const contactToEdit = contactsStore.getContactById(Number(contactId));
    if (contactToEdit) {
      newContact.id = contactToEdit.id;
      newContact.name = contactToEdit.name;
      newContact.email = contactToEdit.email;
      newContact.phone = contactToEdit.phone;
    }
  }
});
</script>

<template>
    <form id="contact-form" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          v-model="newContact.name"
          class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@example.com"
          v-model="newContact.email"
          class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium">Phone</label>
        <input
          type="tel"
          id="phone"
          placeholder="0123456789"
          v-model="newContact.phone"
          class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</p>
      </div>

      <button
        type="submit"
        @click.prevent="add()"
        class="w-full bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
      >
        Save Contact
      </button>
    </form>
  </template>
  