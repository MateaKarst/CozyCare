// testimonial cards
export function createTestimonialCard(img, name, description, wrapper) {
    let code = `
      <div class="testimonialCard">
        <div class="testimonialImage">
          <img src="${img}" alt="">
        </div>
        <div class="testimonialInfo">
          <h2 class="testimonialName">${name}</h2>
          <p class="testimonialDescription">${description}</p>
        </div>
      </div>
    `;
    wrapper.innerHTML += code;
  }
