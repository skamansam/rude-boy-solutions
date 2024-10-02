<script lang="ts">
    import { M as motion } from "svelte-motion";

    import InvitationModal from "./InvitationModal.svelte";
    import CheckArrowIcon from "../assets/icons/CheckArrowIcon.svelte";

    const pricingData = [
        "Seamless integration",
        "Real-time data visualization",
        "Advanced predictive analytics",
        "Collaborative environment",
        "Responsive customer support",
    ];
    let isMonthly = true;
    const setIsMonthly = (value) => {
        console.log("Monthly", value);
        isMonthly = value;
    };
    let isModalOpen = true;
    const setIsModalOpen = (value) => {
        isModalOpen = value;
    };
    const handleChange = () => {
        console.info("isMonthly", isMonthly);
        setIsMonthly(!isMonthly);
    };
</script>

<section class="w-screen flex justify-center bg-bgDark2 relative">
    <div class="absolute -top-16" id="pricing" />
    <div class="pb-20 pt-12 bg-bgDark2 2xl:w-[1150px] lg:w-[1050px] md:w-4/5">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div class="container mx-auto px-4">
                <div class="max-w-2xl mx-auto text-center mb-16">
                    <span class="block-subtitle">Find Your Perfect Fit</span>
                    <h2
                        class="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText"
                    >
                        Choose your best plan
                    </h2>
                    <p class="mb-6 text-secondaryText">
                        Select the plan that suits your needs and benefit from
                        our analytics tools.
                    </p>
                    <label
                        class="mx-auto bg-bgDark3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            class="peer appearance-none"
                            checked={!isMonthly}
                            on:change={handleChange}
                        />
                        <span
                            class="h-8 w-[5.5rem] flex items-center pr-2 bg-bgDark3 after:rounded-lg duration-300 ease-in-out after:w-[30rem] after:h-10 after:bg-primaryColor after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"
                        ></span>
                        <div
                            class="flex absolute text-primaryText text-sm font-bold"
                        >
                            <div
                                class={isMonthly
                                    ? "mr-9 ml-3"
                                    : "mr-9 ml-3 text-gray-400"}
                            >
                                Monthly
                            </div>
                            <div class={isMonthly ? "text-gray-400" : ""}>
                                Yearly
                            </div>
                        </div>
                    </label>
                </div>
                <div
                    class="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20"
                >
                    <div
                        class="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0"
                    >
                        <div class="p-8 bg-bgDark3 rounded-3xl">
                            <h3
                                class="mb-2 text-xl font-bold font-heading text-primaryText text-left"
                            >
                                Beginner
                            </h3>
                            <div class="flex justify-start items-end">
                                <div
                                    class="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2"
                                >
                                    $0
                                </div>
                                <div class="text-gray-500">
                                    {isMonthly ? "/ month" : "/ year"}
                                </div>
                            </div>
                            <p
                                class="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left"
                            >
                                The perfect way to get started and get used to
                                our tools.
                            </p>
                            <ul class="mb-2 2xl:mb-6 text-primaryText">
                                {#each pricingData as text, index}
                                    <li
                                        class="mb-4 flex"
                                        key={`${text}-${index}`}
                                    >
                                        <CheckArrowIcon />
                                        <span>{text}</span>
                                    </li>
                                {/each}
                            </ul>
                            <button
                                class="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                                on:click={() => setIsModalOpen(true)}
                                aria-label="Get started"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div
                        class="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0"
                    >
                        <div class="px-8 py-8 bg-bgDark3 rounded-3xl">
                            <h3
                                class="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-primaryText text-left"
                            >
                                Standard
                            </h3>
                            <div class="flex justify-start items-end">
                                <div
                                    class="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2"
                                >
                                    {isMonthly ? "$19" : "$180"}
                                </div>
                                <div class="text-gray-500">
                                    {isMonthly ? "/ month" : "/ year"}
                                </div>
                            </div>
                            <p
                                class="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left"
                            >
                                Unlock more features and elevate your data
                                analysis.
                            </p>
                            <ul class="mb-14 text-primaryText">
                                {#each pricingData as text, index}
                                    <li
                                        class="mb-4 flex"
                                        key={`${text}-${index}`}
                                    >
                                        <CheckArrowIcon />
                                        <span>{text}</span>
                                    </li>
                                {/each}
                            </ul>
                            <button
                                class="inline-block text-center py-2 px-4 w-full contained-button leading-loose transition duration-200 mt-20"
                                on:click={() => setIsModalOpen(true)}
                                aria-label="Get started"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div
                        class="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0"
                    >
                        <div class="p-8 bg-bgDark3 rounded-3xl">
                            <h3
                                class="mb-2 text-xl font-bold font-heading text-primaryText text-left"
                            >
                                Premium
                            </h3>
                            <div class="flex justify-start items-end">
                                <div
                                    class="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2"
                                >
                                    {isMonthly ? "$36" : "$390"}
                                </div>
                                <div class="text-gray-500">
                                    {isMonthly ? "/ month" : "/ year"}
                                </div>
                            </div>
                            <p
                                class="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left"
                            >
                                Experience the full power of our analytic
                                platform
                            </p>
                            <ul class="mb-2 2xl:mb-6 text-primaryText">
                                {#each pricingData as text, index}
                                    <li
                                        class="mb-4 flex"
                                        key={`${text}-${index}`}
                                    >
                                        <CheckArrowIcon />
                                        <span>{text}</span>
                                    </li>
                                {/each}
                            </ul>
                            <button
                                class="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                                on:click={() => setIsModalOpen(true)}
                                aria-label="Get started"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
    {#if isModalOpen}
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    {/if}
</section>
