import { createTestimonialCard } from "./createCards.js";
import { testimonialCards } from "./cards.js";

const testimonialWrapper = document.querySelector(".testimonialContainer");

// ------testimonial cards injection------
 if (testimonialWrapper) {
    testimonialCards.forEach((card) => {
        createTestimonialCard(card.img, card.name, card.description, testimonialWrapper);
    });
}