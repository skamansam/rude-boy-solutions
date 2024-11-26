<script lang="ts">
    import { M as motion } from "svelte-motion";

    import InvitationModal from "./InvitationModal.svelte";
    import CheckArrowIcon from "../assets/icons/CheckArrowIcon.svelte";

    const pricingData = [
        {
            name: 'Basic Website',
            items: [
                { service: 'Single-page Website', price: 'FREE!' },
                { service: 'SEO Tags', price: 'FREE!' },
                { service: 'Social Media Integrations', price: 'FREE!' },
                { service: 'Contact Form (email-only)', price: 'FREE!' },
                { service: 'Progress Monitoring', price: 'FREE!' }
            ]
        },
        {
            name: 'Add-ons',
            items: [
                { service: 'Google Analytics', price: '100 USD' },
                { service: 'Wordpress Site', price: '300 USD' },
                { service: 'Setup Google Services', price: 'Starting at 72 USD/year' },
                { service: 'Web Domain', price: 'Varies' },
                { service: 'Web Hosting on the Edge!', price: 'FREE!' }
            ]
        }
    ];
    let isModalOpen = false;
    const setIsModalOpen = (value) => {
        isModalOpen = value;
    };
</script>

<section class="w-screen flex justify-center bg-bgDark2 relative">
    <div class="absolute -top-16" id="pricing"></div>
    <div class="pb-20 pt-12 bg-bgDark2 2xl:w-[1150px] lg:w-[1050px] md:w-4/5">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div class="container mx-auto px-4">
                <div class="max-w-2xl mx-auto text-center mb-16">
                    <span class="block-subtitle">Transparent Pricing</span>
                    <h2 class="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
                        Our Services & Pricing
                    </h2>
                    <p class="mb-6 text-secondaryText">
                        We build your website for FREE because we want to show the world what we can do for you!
                    </p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-8 mt-12">
                    {#each pricingData as category}
                        <div class="bg-bgDark3 rounded-3xl p-8">
                            <h3 class="text-2xl font-bold text-primaryText mb-6">{category.name}</h3>
                            <div class="space-y-4">
                                {#each category.items as item}
                                    <div class="flex justify-between items-center text-secondaryText">
                                        <span class="flex-1">{item.service}</span>
                                        <span class="font-semibold text-primaryText ml-4">{item.price}</span>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    {/each}
                </div>
                
                <div class="mt-12 text-center text-secondaryText">
                    <p class="mb-4">All payments handled securely through CashApp</p>
                    <p class="text-sm">Third-party services requiring credit card information will be set up via secure phone or video call</p>
                </div>
            </div>
        </motion.div>
    </div>
    {#if isModalOpen}
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    {/if}
</section>
