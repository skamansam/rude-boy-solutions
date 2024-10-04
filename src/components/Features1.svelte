<script lang="ts">
    import { M as motion } from "svelte-motion";

    import feature1 from "../assets/images/feature1.jpg";
    import feature2 from "../assets/images/feature2.jpg";
    import feature3 from "../assets/images/feature3.jpg";
    import feature4 from "../assets/images/feature4.jpg";
    import CheckArrowIcon from "../assets/icons/CheckArrowIcon.svelte";
</script>

<section
    class="w-full bg-bgDark2 pt-24 -mt-8 mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-16"
    id="features"
>
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
    >
        <div
            class="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16"
        >
            <div class="w-full lg:w-1/2 mb-12 lg:mb-0">
                <div
                    class="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset"
                >
                    <span class="block-subtitle">Embrace Open Source</span>
                    <h2 class="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                        Is this really free?
                    </h2>
                    <p class="mb-10 text-secondaryText leading-loose">
                        YES! This service is really free. We believe that by
                        offering this service for free, we can help more people
                        to make a better web for others. We also believe that by
                        offering this service for free, you will be more likely
                        to hire us for more serious projects in the future.
                    </p>
                    <ul class="mb-6 text-primaryText">
                        <li class="mb-4 flex">
                            <CheckArrowIcon />
                            <span>Free single-page web site.</span>
                        </li>
                        <li class="mb-4 flex">
                            <CheckArrowIcon />
                            <span
                                >Free source code via GitHub. Your site, your
                                code.</span
                            >
                        </li>
                        <li class="mb-4 flex">
                            <CheckArrowIcon />
                            <span>Free Search Engine Optimization (SEO).</span>
                        </li>
                        <li class="mb-4 flex">
                            <CheckArrowIcon />
                            <span>Free Social Media Optimizations.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8"
            >
                <div class="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
                    <div class="mb-4 py-3 pl-3 pr-2 rounded">
                        <img
                            src={feature1.src}
                            alt="Feature image 1"
                            class="rounded-xl main-border-gray mx-auto sm:mx-unset"
                            aria-label="Feature image 1"
                        />
                    </div>
                    <div class="py-3 pl-3 pr-2 rounded">
                        <img
                            src={feature2.src}
                            alt="Feature image 2"
                            class="rounded-xl main-border-gray mx-auto sm:mx-unset"
                            aria-label="Feature image 2"
                        />
                    </div>
                </div>
                <div
                    class="w-1/2 lg:mt-20 pt-12 lg:pt-0 px-2 hidden sm:inline-block"
                >
                    <div class="mb-4 py-3 pl-3 pr-2 rounded-lg">
                        <img
                            src={feature3.src}
                            alt="Feature image 3"
                            class="rounded-xl main-border-gray"
                            aria-label="Feature image 3"
                        />
                    </div>
                    <div class="py-3 pl-3 pr-2 rounded-lg">
                        <img
                            src={feature4.src}
                            alt="Feature image 4"
                            class="rounded-xl main-border-gray"
                            aria-label="Feature image 4"
                        />
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
</section>
