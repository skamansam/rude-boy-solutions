<script lang="ts">
    let isVisible = false;
    const setIsVisible = (value) => {
        isVisible = value;
    };

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setIsVisible(true);
        } else if (scrolled <= 300) {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
</script>

<svelte:window on:scroll={toggleVisible} />
{#if isVisible}
    <button
        class="w-12 h-12 fixed bottom-6 right-6 main-border-gray rounded-xl bg-bgDark2 hover:bg-bgDark3 cursor-pointer flex justify-center items-center transition z-50"
        on:click={scrollToTop}
        aria-label="Scroll to top"
    >
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 20 20"
        >
            <path
                d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                stroke="rgb(99, 102, 241)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
        </svg>
    </button>
{/if}
