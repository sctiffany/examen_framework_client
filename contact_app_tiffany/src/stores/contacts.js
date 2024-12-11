import { ref, computed, reactive, watch } from 'vue'
import { defineStore } from 'pinia'

export const useContactsStore = defineStore('contacts', () => {
  const contacts = reactive(JSON.parse(localStorage.getItem('contacts')) || []);

  watch(contacts, (newValue, oldValue) => {
    localStorage.setItem('contacts', JSON.stringify(newValue));
  });
  return { contacts };
})
