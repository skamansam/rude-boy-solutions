<script lang="ts">
    import { M as motion } from "svelte-motion";
    import FAQBox from "./FAQBox.svelte";
    const FAQData = [
        {
            question: "Why do you offer free website development?",
            answer: "We build your website for FREE because we want to show the world what we can do for you! With nearly 30 years of web development experience, we're confident that our work will speak for itself and potentially lead to future collaborations.",
        },
        {
            question: "How do you handle payments and sensitive information?",
            answer: "We handle all payments securely through CashApp. For any third-party services requiring credit card information, we set up a secure phone or video call with screen sharing. This ensures your sensitive information is never written down or stored anywhere, keeping your data completely secure.",
        },
        {
            question: "What's included in the free single-page website?",
            answer: "Our free single-page website package includes SEO tags for better visibility, social media integrations, an email-only contact form, and progress monitoring. We ensure you get a professional, modern website that meets your needs without any hidden costs.",
        },
        {
            question: "How does web hosting and domain registration work?",
            answer: "We prefer Vercel for hosting, which offers basic hosting for free. For domain registration, we use Squarespace domains, and we'll work with you to find a suitable domain name and price. Some domains (like .dev) may require special certificates and setup, which might incur additional fees, but our work fees won't exceed 100 USD.",
        },
        {
            question: "What are your Google Workspace setup services?",
            answer: "We'll help set up a new Google account for your business at no cost. The Google Workspace subscription starts at 72 USD/year per user, which is billed directly by Google. We'll guide you through the setup process and ensure everything is configured correctly.",
        },
    ];
</script>

<section
    class="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden"
>
    <div class="absolute -top-10" id="FAQ"></div>
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
