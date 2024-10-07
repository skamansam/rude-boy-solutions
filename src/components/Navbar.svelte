<script lang="ts">
    import { M as motion, AnimatePresence } from "svelte-motion";

    import RbeLogo from "../assets/logos/RbeLogo.svelte";
    import GithubIcon from "../assets/icons/GithubIcon.svelte";

    const navbarLinks = [
        { label: "Home", href: "/rude-boy-solutions/#home", ariaLabel: "Home" },
        {
            label: "Features",
            href: "/rude-boy-solutions/#features",
            ariaLabel: "Features",
        },
        {
            label: "Pricing",
            href: "/rude-boy-solutions/#pricing",
            ariaLabel: "Pricing",
        },
        {
            label: "Feedback",
            href: "/rude-boy-solutions/#feedback",
            ariaLabel: "Feedback",
        },
        { label: "FAQ", href: "/rude-boy-solutions/#FAQ", ariaLabel: "FAQ" },
    ];
    let isOpen = false;
    const setIsOpen = (value) => {
        isOpen = value;
    };
</script>

<nav
    class="w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl"
    aria-label="Main navigation"
>
    <div
        class="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative"
    >
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
        >
            <a href="/rude-boy-solutions/#home" aria-label="Home">
                <div class="flex justify-start items-center grow basis-0">
                    <div class="mr-2 text-6xl">
                        <RbeLogo class="w-6 h-6" />
                    </div>
                    <div class="text-white font-['Inter'] font-bold text-xl">
                        Rude Boy Solutions
                    </div>
                </div>
            </a>
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
        >
            <div class="hidden lg:flex h-full pl-12 pb-2">
                {#each navbarLinks as { href, label, ariaLabel }}
                    <a
                        class="text-white lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2"
                        {href}
                        aria-label={ariaLabel}
                        key={label}
                    >
                        {label}
                    </a>
                {/each}
            </div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
        >
            <div class="grow basis-0 justify-end hidden lg:flex">
                <a
                    class="text-white main-border-gray rounded-xl
        bg-bgDark2 hover:bg-bgDark3 border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                    href="https://github.com/matt765/Tidestream"
                    target="_blank"
                    aria-label="source code"
                >
                    <GithubIcon />
                    <span class="pt-px">Source code</span>
                </a>
            </div>
        </motion.div>
        <div
            class="lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2"
            on:click={setIsOpen(!isOpen)}
        >
            <div class="w-5 h-0.5 bg-gray-500 mb-1"></div>
            <div class="w-5 h-0.5 bg-gray-500 mb-1"></div>
            <div class="w-5 h-0.5 bg-gray-500"></div>
        </div>
    </div>
    <!-- Mobile navbar -->
    <AnimatePresence>
        {#if isOpen}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
            >
                <div
                    class="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-bgDark1 z-50 w-full
    items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10
    "
                >
                    {#each navbarLinks as { label, href, ariaLabel }}
                        <a
                            key={href}
                            class="text-white lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                            {href}
                            on:click={() => setIsOpen(false)}
                            aria-label={ariaLabel}
                        >
                            {label}
                        </a>
                    {/each}
                    <a
                        class="outlined-button pl-6 pr-8 pt-2 pb-2 flex"
                        href="https://github.com/matt765/Tidestream"
                        target="_blank"
                    >
                        <GithubIcon />
                        Source code
                    </a>
                </div>
            </motion.div>
        {/if}
    </AnimatePresence>
</nav>
