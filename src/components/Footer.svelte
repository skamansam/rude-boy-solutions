<script lang="ts">
    import FacebookIcon from "../assets/icons/FacebookIcon.svelte";
    import InstagramIcon from "../assets/icons/InstagramIcon.svelte";
    import RbeLogo from "../assets/logos/RbeLogo.svelte";
    import TwitterIcon from "../assets/icons/TwitterIcon.svelte";

    const footerData = [
        {
            title: "Products",
            items: ["Services", "About Us", "News and Stories", "Roadmap"],
        },
        {
            title: "Important Links",
            items: [
                "Organization Team",
                "Our Journeys",
                "Pricing Plans",
                "Roadmap",
                "Terms & Conditions",
                "Privacy Policy",
            ],
        },
        {
            title: "Company",
            items: ["About Us", "Jobs", "Press", "Contact Us"],
        },
    ];
</script>

<footer aria-label="Site footer">
    <div class="pt-10 lg:pt-20 lg:pb-16 bg-bgDark1 radius-for-skewed">
        <div
            class="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3"
        >
            <div class="flex flex-wrap">
                <div class="w-full lg:w-1/3 mb-16 lg:mb-0">
                    <div
                        class="flex justify-center lg:justify-start items-center grow basis-0"
                    >
                        <div class="mr-2 text-6xl">
                            <RbeLogo class="w-12 h-12" />
                        </div>
                        <div
                            class="text-white font-['Inter'] font-bold text-xl"
                        >
                            Rude Boy Solutions
                        </div>
                    </div>
                    <p
                        class="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0"
                    >
                        Dashboard images were made using free Dark Admin
                        dashboard that you can find
                        <a
                            href="https://bootstrapious.com/p/bootstrap-4-dark-admin"
                            target="_blank"
                            class="text-gray-100 ml-1.5"
                            aria-label="Dark Admin Dashboard"
                        >
                            here.
                        </a>
                    </p>
                    <div class="w-36 mx-auto lg:mx-0">
                        <a
                            class="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] outlined-button"
                            href="#"
                            aria-label="Facebook"
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            class="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                            href="#"
                            aria-label="Twitter"
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            class="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                            href="#"
                            aria-label="Instagram"
                        >
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
                <div
                    class="w-full lg:w-2/3 lg:pl-16 hidden lg:flex flex-wrap justify-between"
                >
                    <div class="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                        <h3 class="mb-6 text-2xl font-bold text-primaryText">
                            Products
                        </h3>
                        <ul>
                            {#each footerData[0].items as item, index}
                                <li key={`${item}-${index}`} class="mb-4">
                                    <a
                                        class="text-gray-400 hover:text-gray-300"
                                        href="#"
                                        aria-label={item}
                                    >
                                        {item}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                    <div class="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                        <h3 class="mb-6 text-2xl font-bold text-primaryText">
                            Important Links
                        </h3>
                        <ul>
                            {#each footerData[1].items as item, index}
                                <li key={`${item}-${index}`} class="mb-4">
                                    <a
                                        class="text-gray-400 hover:text-gray-300"
                                        href="#"
                                        aria-label={item}
                                    >
                                        {item}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                    <div class="w-full md:w-1/3 lg:w-auto">
                        <h3 class="mb-6 text-2xl font-bold text-primaryText">
                            Company
                        </h3>
                        <ul>
                            {#each footerData[2].items as item, index}
                                <li key={`${item}-${index}`} class="mb-4">
                                    <a
                                        class="text-gray-400 hover:text-gray-300"
                                        href="#"
                                        aria-label={item}
                                    >
                                        {item}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
