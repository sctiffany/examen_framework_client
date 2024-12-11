<script setup>

</script>

<template>
              <ul id="contacts-list" class="divide-y divide-gray-200">
            <!-- Example Contact Item -->
            <li class="md:flex items-center justify-between py-4">
              <div class="pb-4 md:pb-0">
                <h3 class="text-lg font-semibold">John Doe</h3>
                <p class="text-gray-500">johndoe@example.com</p>
                <p class="text-gray-500">+123 456 789</p>
              </div>
              <div class="flex gap-2">
                <button
                  class="bg-yellow-400 text-white px-4 py-2 rounded shadow hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  class="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
            <!-- Add more contacts here -->
            <li class="md:flex items-center justify-between py-4">
              <div class="pb-4 md:pb-0">
                <h3 class="text-lg font-semibold">John Doe</h3>
                <p class="text-gray-500">johndoe@example.com</p>
                <p class="text-gray-500">+123 456 789</p>
              </div>
              <div class="flex gap-2">
                <button
                  class="bg-yellow-400 text-white px-4 py-2 rounded shadow hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  class="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          </ul>
</template>