import { ref, computed, reactive, watch } from 'vue'
import { defineStore } from 'pinia'

export const useContactsStore = defineStore('contacts', () => {
  const contacts = reactive(JSON.parse(localStorage.getItem('contacts')) || []);

  const getContactById = (id) => {
    return contacts.find(contact => contact.id === id);
  };

  const contactsCount = computed(() => contacts.length);

  // Boutons ajouter/supprimer/modifier
  const addContact = (contact) => {
    contacts.unshift(contact);
  };

  const deleteOneById = (id) => {
    contacts.splice(contacts.findIndex((contact) => contact.id === id), 1);
  };

  const updateContact = (updatedContact) => {
    const index = contacts.findIndex(contact => contact.id === updatedContact.id);
    if (index !== -1) {
      contacts[index] = updatedContact;
    }
  };

  //
  watch(contacts, (newValue, oldValue) => {
    localStorage.setItem('contacts', JSON.stringify(newValue));
  });
  return { contacts, addContact, deleteOneById, updateContact, getContactById, contactsCount };
});
