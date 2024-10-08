<script lang="ts">
    import { M as motion } from "svelte-motion";
    import FAQBox from "./FAQBox.svelte";
    const FAQData = [
        {
            question: "Can I upgrade or downgrade my plan at any time?",
            answer: "Yes, you can easily upgrade or downgrade your plan at any time. Simply navigate to the account settings in your dashboard and choose the desired plan. The changes will be reflected immediately, and any adjustments in pricing will be applied on your next billing cycle. Our support team is more than happy to provide guidance and recommendations.",
        },
        {
            question: "How to claim your 25% discount offer?",
            answer: "To claim your 25% discount, simply sign up for an account and enter the promotional code at checkout. The discount will be applied automatically to your purchase.",
        },
        {
            question: "What's your refund policy?",
            answer: "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied with our product, simply contact our support team within 30 days of purchase for a full refund.",
        },
        {
            question: "How to get support for the product?",
            answer: "Our dedicated support team is here to help. You can reach out to us through the contact form on our website, send an email, or engage with us via live chat. We'll be happy to assist you with any questions or concerns you may have",
        },
    ];
</script>

<section
    class="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden"
>
    <div class="absolute -top-10" id="FAQ" />
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
    >
        <div
            class="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full"
        >
            <div class="md:max-w-4xl mx-auto">
                <p class="mb-7 block-subtitle text-center">
                    Have any questions?
                </p>
                <h2 class="mb-16 block-big-title text-center">
                    Frequently Asked Questions
                </h2>
                <div class="mb-11 flex flex-wrap -m-1">
                    {#each FAQData as item, index (`${item.question}-${index}`)}
                        <div class="w-full p-1">
                            <FAQBox
                                title={item.question}
                                content={item.answer}
                                defaultOpen={index === 0}
                            />
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </motion.div>
</section>
