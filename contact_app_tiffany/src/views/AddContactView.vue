<script setup>
import ContactForm from '@/components/ContactForm.vue';

</script>
<template>
    <main class="container mx-auto px-4 mt-6 flex-grow">
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Contact Form Section -->
        <section class="w-full lg:w-1/3 bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Add / Edit Contact</h2>
          <ContactForm />
        </section>
      </div>
    </main>
</template>