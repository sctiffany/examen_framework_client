import { ref, computed, reactive, watch } from 'vue'
import { defineStore } from 'pinia'

export const useContactsStore = defineStore('contacts', () => {
  const contacts = reactive(JSON.parse(localStorage.getItem('contacts')) || []);

  const addContact = (contact) => {
    contacts.unshift(contact);
  };

  const deleteOneById = (id) => {
    contacts.splice(contacts.findIndex((contact) => contact.id === id), 1);
  }

  watch(contacts, (newValue, oldValue) => {
    localStorage.setItem('contacts', JSON.stringify(newValue));
  });
  return { contacts, addContact, deleteOneById };
});
