<script lang="ts">
    import { M as motion, AnimatePresence } from "svelte-motion";
    import { onMount } from "svelte";
    import CheckArrowIcon from "../assets/icons/CheckArrowIcon.svelte";
    import CloseIcon from "../assets/icons/CloseIcon.svelte";
    import RbeLogo from "../assets/logos/RbeLogo.svelte";
    export let isOpen = false;
    export let setIsOpen = (value) => {
        isOpen = value;
    };
</script>

<AnimatePresence show={isOpen}>
    <motion.div
        initial={{ opacity: 0, zIndex: 50 }}
        animate={{ opacity: 1, zIndex: 50 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
    >
        <dialog
            open={isOpen}
            class="w-full h-full bg-bgDarkTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center"
        >
            <div
                class="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50"
            >
                <div class="flex relative">
                    <div class="w-1/2 hidden lg:inline">
                        <h2
                            class="mt-6 mb-2 text-5xl font-bold tracking-normal text-primaryText"
                        >
                            Contact Us Now!
                        </h2>
                        <h2
                            class="text-3xl font-bold tracking-normal text-secondaryColor"
                        >
                            Get Your Presence Today!
                        </h2>

                        <ul class="mb-6 text-primaryText mt-12">
                            <li class="mb-4 flex">
                                <CheckArrowIcon />
                                <span>Free One Page Presence</span>
                            </li>
                            <li class="mb-4 flex">
                                <CheckArrowIcon />
                                <span>Free Accessibility</span>
                            </li>
                            <li class="mb-4 flex">
                                <CheckArrowIcon />
                                <span>Free Source Code</span>
                            </li>
                            <li class="mb-4 flex">
                                <CheckArrowIcon />
                                <span>Free Search Engine Optimization</span>
                            </li>
                            <li class="mb-4 flex">
                                <CheckArrowIcon />
                                <span>Free Automatic Deployments</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0"
                    >
                        <div
                            class="flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6"
                        >
                            <div class="text-white mr-2 text-8xl">
                                <RbeLogo
                                    class="w-16 h-16"
                                    backgroundColor="rgba(48, 49, 54, 1)"
                                />
                            </div>
                            <div
                                class="text-white font-['Inter'] font-bold text-3xl"
                            >
                                Rude Boy Enterprises
                            </div>
                        </div>

                        <h3
                            class="mb-7 text-2xl text-primaryText font-bold leading-snug text-center"
                        >
                            Watch your business grow with us!
                        </h3>
                        <form
                            action="https://yznbyxiwsnxcjpqztpex.supabase.co/functions/v1/resend"
                            class="infoForm"
                            novalidate
                            formmethod="dialog"
                        >
                            <div class="flex flex-wrap -m-2">
                                <div class="w-full sm:w-4/5 p-2 mx-auto">
                                    <input
                                        class="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 invalid:ring-red-300 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                        id="newsletterInputName"
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        required="required"
                                        novalidate
                                        pattern="\w+"
                                    />
                                </div>
                                <div class="w-full sm:w-4/5 p-2 mx-auto">
                                    <input
                                        class="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                        id="newsletterInputEmail"
                                        type="email"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{'{2,}'}$"
                                        name="email"
                                        placeholder="Your email address"
                                        required="required"
                                        novalidate
                                    />
                                </div>
                                <div class="w-full sm:w-4/5 p-2 mx-auto">
                                    <textarea
                                        class="px-4 py-4 w-full h-32 text-gray-500 font-medium placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 invalid:ring-red-300 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                                        id="newsletterInputMessage"
                                        type="text"
                                        name="message"
                                        rows="4"
                                        placeholder="What kind of presence would you like?"
                                        required="required"
                                        novalidate
                                        pattern="\w+"
                                    ></textarea>
                                </div>
                                <div class="w-full sm:w-4/5 p-2 mt-4 mx-auto">
                                    <button
                                        class="py-4 px-6 w-full text-primaryText font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#7274f3] transition ease-in-out duration-200 infoForm-invalid:pointer-events-none infoForm-invalid:opacity-30"
                                        type="submit"
                                        aria-label="Join now"
                                    >
                                        Contact Us!
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div
                        class="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition"
                        on:click={() => setIsOpen(false)}
                        on:keydown={(e) => {
                            if (e.key === "Enter") setIsOpen(false);
                        }}
                        aria-label="Close"
                        role="button"
                        tabindex="0"
                    >
                        <CloseIcon />
                    </div>
                </div>
            </div>
        </dialog>
    </motion.div>
</AnimatePresence>
