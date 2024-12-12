import { ref, computed, reactive, watch } from 'vue'
import { defineStore } from 'pinia'

export const useContactsStore = defineStore('contacts', () => {
  const contacts = reactive(JSON.parse(localStorage.getItem('contacts')) || []);

  const searchQuery = reactive({ name: '', email: '' });

  const filteredContacts = computed(() => {
    return contacts.filter((contact) => {
      return (
        searchQuery.name === '' ||
        contact.name.toLowerCase().startsWith(searchQuery.name.toLowerCase()) ||
        contact.email.toLowerCase().startsWith(searchQuery.name.toLowerCase())
      );
    });
  });

  const contactsCount = computed(() => filteredContacts.value.length);

  const getContactById = (id) => {
    return contacts.find(contact => contact.id === id);
  };


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
  return { contacts, addContact, deleteOneById, updateContact, getContactById, contactsCount, searchQuery, filteredContacts  };
});
