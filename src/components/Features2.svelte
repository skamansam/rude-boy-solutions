<script lang="ts">
    import { M as motion } from "svelte-motion";
    import Icon from "@iconify/svelte";
    import web_dev from "../assets/images/undraw_pair_programming.svg";
    import web_search from "../assets/images/undraw_version_control.svg";
    import CheckArrowIcon from "../assets/icons/CheckArrowIcon.svelte";
</script>

<section class="w-full bg-bgDark2 mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4">
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
    >
        <div
            class="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16"
        >
            <div
                class="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first"
            >
                <div
                    class="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8"
                >
                    <div class="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
                        <img
                            src={web_dev.src}
                            alt="Feature image 5"
                            class="rounded-xl main-border-gray"
                        />
                    </div>
                    <div class="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded">
                        <img
                            src={web_search.src}
                            alt="Feature image 6"
                            class="rounded-xl main-border-gray"
                        />
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
                <div
                    class="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset"
                >
                    <span class="block-subtitle">Driven By Open Source</span>
                    <h2 class="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                        How is this possible?
                    </h2>
                    <p class="mb-12 text-secondaryText leading-loose">
                        We believe in the power of open source. We are a small
                        team of developers who are passionate about creating
                        software and most of the software on the web is open
                        source. We have 25 years of open source experience, with
                        contributions across a wide range of projects.
                    </p>
                    <ul class="mb-6 text-primaryText">
                        <li class="mb-4 flex">
                            <CheckArrowIcon />
                            <span
                                >GitHub Project and Source Management.
                                Transferrable to you.</span
                            >
                        </li>
                        <li class="mb-4 flex">
                            <CheckArrowIcon />
                            <span
                                >Free web assets via a range of projects. AI art
                                generation is possible.</span
                            >
                        </li>
                        <li class="mb-4 flex">
                            <CheckArrowIcon />
                            <span
                                >Many open source frameworks and starters
                                available for use.</span
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="">
            <h2 class="block-subtitle">Open Source Tools We Use:</h2>
            <ul
                class="text-white [&>li]:inline-flex [&>li]:items-center [&>li]:mr-1 [&>li]:px-4 [&>li]:py-2 [&>li]:rounded-lg [&>li]:border [&>li>svg]:mr-1"
            >
                <li><Icon icon="devicon:svelte" />Svelte</li>
                <li><Icon icon="devicon:svelte" />SvelteKit</li>
                <li><Icon icon="devicon:vuejs" />Vue</li>
                <li><Icon icon="devicon:vitejs" />Vite</li>
                <li><Icon icon="logos:parcel-icon" />Parcel</li>
                <li><Icon icon="devicon:nuxtjs" />Nuxt</li>
                <li><Icon icon="devicon:react" />React</li>
                <li><Icon icon="devicon:bootstrap" />Bootstrap</li>
                <li><Icon icon="devicon:vitest" />Vitest</li>
                <li><Icon icon="devicon:storybook" />Storybook</li>
                <li><Icon icon="devicon:playwright" />Playwright</li>
                <li><Icon icon="catppuccin:histoire" />Histoire</li>
                <li><Icon icon="devicon:rust" />Rust</li>
                <li><Icon icon="devicon:kubernetes" />Kubernetes</li>
                <li><Icon icon="devicon:bun" />Bun</li>
                <li><Icon icon="devicon:denojs" />Deno</li>
            </ul>
            <div class="">
                <h2 class="block-subtitle">
                    Tools We Use Which Are Supported by Open Source:
                </h2>
                <ul
                    class="text-white [&>li]:inline-flex [&>li]:items-center [&>li>svg]:mr-1 [&>li]:mr-1 [&>li]:px-4 [&>li]:py-2 [&>li]:rounded-lg [&>li]:border"
                >
                    <li><Icon icon="devicon:github" />GitHub</li>
                    <li><Icon icon="devicon:algolia" />Algolia</li>
                    <li><Icon icon="devicon:firebase" />Firebase</li>
                    <li><Icon icon="devicon:googlecloud" />Google Cloud</li>
                </ul>
            </div>
        </div></motion.div
    >
</section>
