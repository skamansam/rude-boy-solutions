<script lang="ts">
    export let title = "";
    export let content = "";
    export let defaultOpen = false;
    let isOpen = defaultOpen;
    const setIsOpen = (value) => {
        isOpen = value;
    };
</script>

<div
    class="pt-2 sm:pt-6 pb-2 px-3 sm:px-8 rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
    on:click={() => setIsOpen(!isOpen)}
    role="button"
>
    <div class="flex flex-col p-2 justify-center items-start">
        <h3 class=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
            class={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
                isOpen ? "max-h-96" : "max-h-0"
            }`}
        >
            {content}
        </p>
    </div>
    <div class="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
            width="28px"
            height="30px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class={`transition-all duration-500  ${
                isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
            }`}
        >
            <path
                d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                stroke="#4F46E5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
        </svg>
    </div>
</div>
