<template>
    <section class="text-white mt-10 px-4" id="testimonial" >
        <h2 class="text-2xl font-bold">Testimonials</h2>
        <div class="px-4 xl:px-16">
            <Carousel v-bind="carouselSettings" :breakpoints="breakpoints">
                <Slide v-for="(testimonial, index) in testimonials" :key="index">
                    <div class="p-4 carousel_item">
                        <div class="w-full mx-auto bg-[#111a3a] shadow-lg border border-[#1f1641] p-5 text-white font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border-gray-200">
                                    <img
                                        src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                                        alt="Testimonial"
                                        class="object-cover w-full h-full"
                                        loading="lazy"
                                    />
                                    
                                </div>
                                <h6 class="ml-4 font-bold text-ms uppercase text-amber-50">PlaceHolder Name</h6>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight">
                                    <span class="text-lg leading-none italic font-bold text-white mr-1">"</span>
                                    PlaceHolder Text
                                    <span class="text-lg leading-none italic font-bold text-white mr-1">"</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { useLanguageStore } from '../stores/language';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const languageStore = useLanguageStore();

//carosel  setings 
const carouselSettings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
});
//breakpoints
const breakpoints = ref({
    640: {
        itemsToShow: 2.5,
    },
    1024: {
        itemsToShow: 3,
    },
});

const testimonials = ref([
    {
        text: 'This is a fantastic product!',
        author: 'John Doe',
    },
    {
        text: 'I had a great experience with this service.',
        author: 'Jane Smith',
    },
    {
        text: 'Highly recommend to everyone!',
        author: 'Alice Johnson',
    },
    {
        text: 'Exceptional quality and support.',
        author: 'Michael Brown',
    },
    {
        text: 'Amazing experience from start to finish.',
        author: 'Emily Davis',
    },
]);

</script>
<style scoped>
.carousel {
  --vc-nav-color: white;
}

</style>