<script lang="ts">
    import { M as motion } from "svelte-motion";

    import InvitationModal from "./InvitationModal.svelte";
    import dashboard from "../assets/images/dashboard.jpg";
    import MobileImage from "../assets/images/undraw_apps.svg";
    import DesktopImage from "../assets/images/undraw_website.svg";
    import RbeLogo from "../assets/logos/RbeLogo.svelte";

    export let isModalOpen = false;
    export let setIsModalOpen = (value) => {
        isModalOpen = value;
    };
</script>

<section
    class="w-screen flex justify-center items-center bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
    id="home"
>
    <div
        class="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center"
    >
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <RbeLogo
                color="#ccc"
                backgroundColor="rgb(31, 32, 35)"
                class="sm:mt-32 mt-16 w-52 h-52"
            />
            <h3 class="text-secondaryColor text-sm sm:text-base mb-6 font-bold">
                Solutions for a Problematic World
            </h3>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
        >
            <div
                class="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-primaryText px-8 sm:px-8 md:px-20 lg:px-4"
            >
                <h1 class="inline md:hidden">Free Web Site</h1>
                <h1 class="hidden md:inline">
                    Free Web Site For Your Business!
                </h1>
            </div>
            <h1
                class="md:hidden mt-2 sm:mt-2 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-primaryText px-8 sm:px-20 md:px-24 lg:px-24"
            >
                for your business!
            </h1>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            <h2
                class="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48"
            >
                Rude Boy Solutions will create your next web presence for free!
                You heard that right - get a single page web presence for
                absolutely nothing!
            </h2>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
        >
            <div
                class="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center"
            >
                <button
                    class="contained-button w-64 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0 md:px-0"
                    on:click={() => setIsModalOpen(true)}
                    aria-label="Get started"
                >
                    Contact Us to Get Started
                </button>
            </div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 10, zIndex: 20 }}
            animate={{ opacity: 1, y: 0, zIndex: 20 }}
            transition={{ duration: 0.5, delay: 0.15 }}
        >
            <!-- <div class="relative w-screen flex justify-center">
                <img
                    src={mobile.src}
                    alt="Dashboard image"
                    class="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
                />
            </div> -->
            <div class="relative w-screen flex justify-center mb-3 h-32">
                <img
                    src={MobileImage.src}
                    alt="Dashboard image"
                    class="block md:hidden w-4/5 max-h-56 mx-auto absolute z-10 top-20"
                />
                <img
                    src={DesktopImage.src}
                    alt="Dashboard image"
                    class="hidden md:block w-3/5 2xl:w-[1200px] mx-auto absolute z-10 lg:top-6 xl:top-0"
                />
            </div>
        </motion.div>
        <div class="relative w-screen flex justify-center">
            <div
                class="shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block"
            >
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    class="bg-bgDark2"
                >
                    <path
                        d="M1200 0L0 0 598.97 114.72 1200 0z"
                        class="shape-fill bg-bgDark1 fill-bgDark1"
                    ></path>
                </svg>
            </div>
        </div>
    </div>
    <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
</section>
