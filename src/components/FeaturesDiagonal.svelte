<script lang="ts">
    import { M as motion } from "svelte-motion";

    import InvitationModal from "./InvitationModal.svelte";
    import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
    export let isModalOpen = false;
    export let setIsModalOpen = (value) => {
        isModalOpen = value;
    };
</script>

<section
    class="lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1"
>
    <div class="shape-divider-bottom-1665696614">
        <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            class="bg-bgDark2 fill-bgDark2"
        >
            <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                class="bg-bgDark1 fill-bgDark1"
            ></path>
        </svg>
    </div>
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
    >
        <div
            class=" 2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-center bg-bgDark1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col"
        >
            <div class="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
                <span class="block-subtitle">Accelerate Your Success</span>
                <h2 class="mt-10 mb-8 text-4xl lg:text-5xl block-big-title">
                    Build &amp; Launch without problems
                </h2>
                <p class="mb-16 text-secondaryText leading-loose">
                    Our platform enables you to launch your data-driven projects
                    with ease. Boost productivity and achieve better results.
                    Empower your decision-making with advanced analytics
                </p>
                <button
                    class="w-[210px] h-12 contained-button mr-10"
                    on:click={() => setIsModalOpen(true)}
                    aria-label="Get started"
                >
                    Get Started
                </button>
            </div>
            <div
                class="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0"
            >
                <img
                    src={featuresdiagonal.src}
                    alt="Feature image"
                    class="rounded-xl main-border-gray"
                />
            </div>
        </div>
    </motion.div>
    <div class="shape-divider-top-1665696661 w-full">
        <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            class="bg-bgDark2 fill-bgDark2"
        >
            <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                class="bg-bgDark1 fill-bgDark1"
            ></path>
        </svg>
    </div>
    {#if isModalOpen}
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    {/if}
</section>
