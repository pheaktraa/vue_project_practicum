<template>
  <!-- Desktop Navigation -->
  <div
    class="hs-dropdown [--strategy:absolute] [--flip:false] hs-dropdown-example relative inline-flex"
  >
    <button
      id="hs-dropdown-example"
      type="button"
      class="hs-dropdown-toggle py-3  inline-flex items-center gap-x-2 text-[15px] font-medium"
      aria-haspopup="menu"
      aria-expanded="false"
      aria-label="Dropdown"
    >
      <div
        class="text-gray-700 hover:text-purple-600 transition-colors font-bold lg:text-[11px] xl:text-[14px]"
      >
        Face
      </div>
      <svg
        class="hs-dropdown-open:rotate-180 size-4 text-gray-600 dark:text-neutral-600"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    </button>
    <div
      class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-[200px] hidden z-10 mt-2 bg-white "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="hs-dropdown-example"
    >
      <a
        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-[14px] font-bold text-gray-700 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100  dark:hover:bg-neutral-180 dark:focus:bg-neutral-500"
        href="#"
      >
        Cleansers
      </a>
      <a
        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-[14px] font-bold text-gray-700 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100  dark:hover:bg-neutral-180 dark:focus:bg-neutral-500"
        href="#"
      >
        Toners
      </a>
      <a
        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-[14px] font-bold text-gray-700 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100  dark:hover:bg-neutral-180 dark:focus:bg-neutral-500"
        href="#"
      >
        Serums
      </a>
      <a
        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-[14px] font-bold text-gray-700 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100  dark:hover:bg-neutral-180 dark:focus:bg-neutral-500"
        href="#"
      >
        Moisturizer
      </a>
      <a
        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-[14px] font-bold text-gray-700 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100  dark:hover:bg-neutral-180 dark:focus:bg-neutral-500"
        href="#"
      >
        Exfollators & Masks
      </a>
      <a
        class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-[14px] font-bold text-gray-700 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100  dark:hover:bg-neutral-180 dark:focus:bg-neutral-500"
        href="#"
      >
        Eye Care
      </a>
    </div>
  </div>
</template>