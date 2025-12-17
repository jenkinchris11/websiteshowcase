<template>
  <ul class="lightrope">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
      <li class="mobilehide"></li>
    </ul>
  <main class="parent">
    <div class="div1">
      <HeroCanvas />
    </div>
    <section id="projects" class="div3" aria-label="Website projects">
      <div class="grid">
        <ProjectCard v-for="project in projects" :key="project.url" :project="project" />
      </div>
    </section>
    <section class="div2" aria-label="Codepen recreation">
      <div class="codepen-card">
        <div class="codepen-scene" aria-hidden="true">
          <div class="grid-overlay"></div>
          <div class="particle-field">
            <span class="particle" aria-hidden="true"></span>
            <span class="particle" aria-hidden="true"></span>
            <span class="particle" aria-hidden="true"></span>
            <span class="particle" aria-hidden="true"></span>
            <span class="particle" aria-hidden="true"></span>
            <span class="particle" aria-hidden="true"></span>
            <div class="particle-message">View my work below</div>
          </div>
        </div>
      </div>
    </section>
    <section class="div4" aria-label="Layered starfield scene">
      <div class="skyline" ref="skylineRef" aria-label="Layered starfield">
        <div class="layer layer--stars-back" aria-hidden="true">
          <span class="star star--tiny" aria-hidden="true"></span>
          <span class="star star--tiny" aria-hidden="true"></span>
          <span class="star star--tiny" aria-hidden="true"></span>
          <span class="star star--tiny" aria-hidden="true"></span>
          <span class="star star--tiny" aria-hidden="true"></span>
        </div>
        <div class="layer layer--nebula" aria-hidden="true">
          <div class="nebula nebula--one"></div>
          <div class="nebula nebula--two"></div>
        </div>
        <div class="layer layer--stars-mid" aria-hidden="true">
          <span class="star star--small" aria-hidden="true"></span>
          <span class="star star--small" aria-hidden="true"></span>
          <span class="star star--small" aria-hidden="true"></span>
          <span class="star star--small" aria-hidden="true"></span>
          <span class="star star--small" aria-hidden="true"></span>
        </div>
        <div class="layer layer--stars-foreground" aria-hidden="true">
          <span class="star star--bright" aria-hidden="true"></span>
          <span class="star star--bright" aria-hidden="true"></span>
          <span class="shooting-star" aria-hidden="true"></span>
        </div>
      </div>
      <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
      </div>
    </section>
    <section class="div6" aria-label="Layered starfield scene">
      <div class="skyline" ref="skylineRef" aria-label="Layered starfield">
        <div class="layer layer--stars-back" aria-hidden="true">
          <span class="star star--tiny" aria-hidden="true"></span>
          <span class="star star--tiny" aria-hidden="true"></span>
          <span class="star star--tiny" aria-hidden="true"></span>
          <span class="star star--tiny" aria-hidden="true"></span>
          <span class="star star--tiny" aria-hidden="true"></span>
        </div>
        <div class="layer layer--nebula" aria-hidden="true">
          <div class="nebula nebula--one"></div>
          <div class="nebula nebula--two"></div>
        </div>
        <div class="layer layer--stars-mid" aria-hidden="true">
          <span class="star star--small" aria-hidden="true"></span>
          <span class="star star--small" aria-hidden="true"></span>
          <span class="star star--small" aria-hidden="true"></span>
          <span class="star star--small" aria-hidden="true"></span>
          <span class="star star--small" aria-hidden="true"></span>
        </div>
        <div class="layer layer--stars-foreground" aria-hidden="true">
          <span class="star star--bright" aria-hidden="true"></span>
          <span class="star star--bright" aria-hidden="true"></span>
          <span class="shooting-star" aria-hidden="true"></span>
        </div>
      </div>
      <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
      </div>
    </section>
        <section class="div8" aria-label="Layered starfield scene">
      <div class="skyline" ref="skylineRef" aria-label="Layered starfield">
        <div class="layer layer--stars-back" aria-hidden="true">
          <span class="star star--tiny" aria-hidden="true"></span>
          <span class="star star--tiny" aria-hidden="true"></span>
          <span class="star star--tiny" aria-hidden="true"></span>
          <span class="star star--tiny" aria-hidden="true"></span>
          <span class="star star--tiny" aria-hidden="true"></span>
        </div>
        <div class="layer layer--nebula" aria-hidden="true">
          <div class="nebula nebula--one"></div>
          <div class="nebula nebula--two"></div>
        </div>
        <div class="layer layer--stars-mid" aria-hidden="true">
          <span class="star star--small" aria-hidden="true"></span>
          <span class="star star--small" aria-hidden="true"></span>
          <span class="star star--small" aria-hidden="true"></span>
          <span class="star star--small" aria-hidden="true"></span>
          <span class="star star--small" aria-hidden="true"></span>
        </div>
        <div class="layer layer--stars-foreground" aria-hidden="true">
          <span class="star star--bright" aria-hidden="true"></span>
          <span class="star star--bright" aria-hidden="true"></span>
          <span class="shooting-star" aria-hidden="true"></span>
        </div>
      </div>
      <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
      </div>
    </section>
    <section class="div7" aria-label="Website pricing">
      <div class="pricing">
        <h2>Website &amp; Software Services – Affordable Pricing</h2>
        <div class="pricing-grid">
          <article class="pricing-card">
            <header class="pricing-card__header">
              <span aria-hidden="true" class="pricing-card__emoji">🌐</span>
              <div>
                <h3>Starter Website</h3>
                <p class="pricing-card__subtitle">Essential Presence</p>
              </div>
              <p class="pricing-card__price">£200 – £350</p>
            </header>
            <ul>
              <li>1–3 pages (Home, About, Contact)</li>
              <li>Mobile-friendly design</li>
              <li>Contact form</li>
              <li>Basic SEO setup</li>
              <li>Fast, modern build</li>
              <li>Hosting &amp; domain guidance</li>
            </ul>
          </article>

          <article class="pricing-card">
            <header class="pricing-card__header">
              <span aria-hidden="true" class="pricing-card__emoji">🌐</span>
              <div>
                <h3>Small Business Website</h3>
              </div>
              <p class="pricing-card__price">£400 – £700</p>
            </header>
            <ul>
              <li>Up to 5 pages</li>
              <li>Clean, custom layout</li>
              <li>Mobile &amp; tablet optimised</li>
              <li>Contact form + map</li>
              <li>Social links</li>
              <li>SEO-friendly structure</li>
            </ul>
          </article>

          <article class="pricing-card">
            <header class="pricing-card__header">
              <span aria-hidden="true" class="pricing-card__emoji">🌐</span>
              <div>
                <h3>Larger / Custom Website</h3>
              </div>
              <p class="pricing-card__price">£800 – £1,500</p>
            </header>
            <ul>
              <li>More pages as needed</li>
              <li>Custom design &amp; branding</li>
              <li>Animations or interactive elements</li>
              <li>Better SEO setup</li>
              <li>Performance optimisation</li>
            </ul>
          </article>

          <article class="pricing-card">
            <header class="pricing-card__header">
              <span aria-hidden="true" class="pricing-card__emoji">🛒</span>
              <div>
                <h3>E-Commerce Websites</h3>
                <p class="pricing-card__subtitle">Small Online Shop</p>
              </div>
              <p class="pricing-card__price">£700 – £1,200</p>
            </header>
            <ul>
              <li>Product listings</li>
              <li>Cart &amp; checkout</li>
              <li>Secure payments (Stripe / PayPal)</li>
              <li>Mobile-friendly</li>
              <li>Basic product management walkthrough</li>
            </ul>
          </article>

          <article class="pricing-card">
            <header class="pricing-card__header">
              <span aria-hidden="true" class="pricing-card__emoji">🛍</span>
              <div>
                <h3>Larger / Custom Shop</h3>
              </div>
              <p class="pricing-card__price">£1,500 – £3,000</p>
            </header>
            <ul>
              <li>Larger catalogues</li>
              <li>Custom checkout logic</li>
              <li>Stock/order management</li>
              <li>Scalable setup</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
    <section class="div9" aria-label="Frequently Asked Questions">
      <div class="faq">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-visual" aria-hidden="true">
          <DotLottieVue
            src="https://lottie.host/8649139c-771c-4af0-b04f-300e7efc2d57/NVCwrDYwPM.lottie"
            style="width: 420px; height: 420px"
            autoplay
            loop
          />
        </div>
        <div class="faq-grid">
          <details class="faq-item">
            <summary>
              <h3>How much does a website cost?</h3>
              <span aria-hidden="true" class="faq-toggle" role="presentation"></span>
            </summary>
            <div class="faq-content">
              <p>Prices depend on what you need, but most websites fall between £200 and £1,500.</p>
              <p>I always agree a clear price before starting — no hidden costs or surprise charges.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary>
              <h3>How long does a website take to build?</h3>
              <span aria-hidden="true" class="faq-toggle" role="presentation"></span>
            </summary>
            <div class="faq-content">
              <p>Most projects take 1–3 weeks, depending on size and how quickly content is supplied.</p>
              <p>Small websites can often be completed sooner.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary>
              <h3>Do I need to provide the text and images?</h3>
              <span aria-hidden="true" class="faq-toggle" role="presentation"></span>
            </summary>
            <div class="faq-content">
              <p>Ideally, yes — but I can help if you’re unsure. I’m happy to:</p>
              <ul>
                <li>Tidy up your text</li>
                <li>Help structure pages</li>
                <li>Advise on images and layout</li>
              </ul>
            </div>
          </details>

          <details class="faq-item">
            <summary>
              <h3>Will my website work on phones and tablets?</h3>
              <span aria-hidden="true" class="faq-toggle" role="presentation"></span>
            </summary>
            <div class="faq-content">
              <p>Yes. All websites are mobile-friendly and work across phones, tablets, and desktops as standard.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary>
              <h3>Can I update the website myself?</h3>
              <span aria-hidden="true" class="faq-toggle" role="presentation"></span>
            </summary>
            <div class="faq-content">
              <p>Yes, if that’s something you want. I can build the site so you can:</p>
              <ul>
                <li>Edit text</li>
                <li>Change images</li>
                <li>Add pages</li>
              </ul>
              <p>Or I can handle updates for you.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary>
              <h3>What happens after the website is finished?</h3>
              <span aria-hidden="true" class="faq-toggle" role="presentation"></span>
            </summary>
            <div class="faq-content">
              <p>Once the site is complete:</p>
              <ul>
                <li>You approve the final version</li>
                <li>The site is launched</li>
                <li>I provide support if needed</li>
              </ul>
              <p>Ongoing maintenance is optional, not required.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary>
              <h3>Who will I be dealing with?</h3>
              <span aria-hidden="true" class="faq-toggle" role="presentation"></span>
            </summary>
            <div class="faq-content">
              <p>You’ll deal directly with me from start to finish — no hand-offs or middlemen.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary>
              <h3>Are there any ongoing costs?</h3>
              <span aria-hidden="true" class="faq-toggle" role="presentation"></span>
            </summary>
            <div class="faq-content">
              <p>Possibly, but I’ll explain everything upfront.</p>
              <p>Typical ongoing costs (paid directly to providers):</p>
              <ul>
                <li>Domain name</li>
                <li>Hosting (often low cost)</li>
                <li>Optional maintenance or SEO</li>
              </ul>
              <p>No surprise subscriptions.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary>
              <h3>Do you require a deposit?</h3>
              <span aria-hidden="true" class="faq-toggle" role="presentation"></span>
            </summary>
            <div class="faq-content">
              <p>Yes, usually a small deposit to secure the work, with the remainder due on completion.</p>
              <p>For larger projects, payment can be split into stages.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary>
              <h3>Can I pay in instalments?</h3>
              <span aria-hidden="true" class="faq-toggle" role="presentation"></span>
            </summary>
            <div class="faq-content">
              <p>Yes — especially for larger projects. We can agree a payment plan that works for both sides.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary>
              <h3>Do you work with local businesses and trades?</h3>
              <span aria-hidden="true" class="faq-toggle" role="presentation"></span>
            </summary>
            <div class="faq-content">
              <p>Yes — that’s a big focus. I work with sole traders, tradespeople, creatives, and small businesses, especially those wanting fair, straightforward pricing.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary>
              <h3>Do you only build websites?</h3>
              <span aria-hidden="true" class="faq-toggle" role="presentation"></span>
            </summary>
            <div class="faq-content">
              <p>No. I also build:</p>
              <ul>
                <li>Custom web tools</li>
                <li>Automation &amp; admin systems</li>
                <li>Software tailored to specific needs</li>
              </ul>
              <p>If you’re unsure, just ask.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary>
              <h3>What if I don’t know exactly what I need?</h3>
              <span aria-hidden="true" class="faq-toggle" role="presentation"></span>
            </summary>
            <div class="faq-content">
              <p>That’s very common. You can explain your idea in plain English and I’ll help shape the solution — no technical knowledge required.</p>
            </div>
          </details>

          <details class="faq-item">
            <summary>
              <h3>How do I get started?</h3>
              <span aria-hidden="true" class="faq-toggle" role="presentation"></span>
            </summary>
            <div class="faq-content">
              <p>Just get in touch via the contact page or email. I’ll reply, ask a few questions, and we can go from there — no obligation.</p>
            </div>
          </details>
        </div>
      </div>
    </section>
    <section id="contact" class="div10 contact" aria-label="Contact form">
      <div class="contact-card">
        <div class="contact-header">
          <p class="eyebrow">Get in touch</p>
          <h2>Tell me about your project</h2>
          <p>Use the form below to send a message directly via EmailJS. I’ll reply as soon as I can.</p>
        </div>
        <div class="contact-reassurance">
          <p class="contact-reassurance__heading">No obligation enquiry</p>
          <p>I usually reply within 24–48 hours.</p>
          <p>Feel free to ask questions or talk through ideas.</p>
        </div>
        <form class="contact-form" @submit.prevent="handleContactSubmit">
          <label class="field">
            <span>Your name</span>
            <input
              v-model="contactName"
              name="from_name"
              type="text"
              autocomplete="name"
              required
            />
          </label>
          <label class="field">
            <span>Email address</span>
            <input
              v-model="contactEmail"
              name="reply_to"
              type="email"
              autocomplete="email"
              required
            />
          </label>
          <label class="field">
            <span>Project details</span>
            <textarea
              v-model="contactMessage"
              name="message"
              rows="5"
              required
              placeholder="What do you need help with?"
            ></textarea>
          </label>
          <button class="submit" type="submit" :disabled="isSending">
            <span v-if="isSending">Sending…</span>
            <span v-else>Send message</span>
          </button>
          <p v-if="formStatus === 'error'" class="status status--error">{{ formMessage }}</p>
          <p v-else-if="formStatus === 'success'" class="status status--success">{{ formMessage }}</p>
        </form>
      </div>
    </section>
    <section class="div5 about" aria-label="About me">
      <div class="about-card">
        <div class="about-visual" aria-hidden="true">
          <DotLottieVue
            src="https://lottie.host/d36f0e8d-5dab-487b-aba9-b7acf3507191/MlDPs023r2.lottie"
            style="width: 600px; height: 600px"
            autoplay
            loop
            :speed="0.5"
          />
        </div>
        <div class="about-copy">
          <h2>About</h2>
          <p>
            I'm a solo web developer building websites for small businesses, creatives, and sole traders. You work
            directly with me—no agency overheads or hand-offs—so decisions stay simple and progress stays quick. I
            value clear communication, fair pricing, and reliable, modern builds tailored to how you work. If you want
            a partner who listens, keeps you informed, and delivers on time, that's what I do.
          </p>
        </div>
      </div>
    </section>
    <ChatWidget />
  </main>
</template>

<script setup>
import emailjs from '@emailjs/browser'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import ProjectCard from './components/ProjectCard.vue'
import HeroCanvas from './components/HeroCanvas.vue'
import ChatWidget from './components/ChatWidget.vue'
import { projects } from './data/projects'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const skylineRef = ref(null)
let observer
let prefersReducedMotion
const reduceMotion = ref(false)
let ticking = false
const contactName = ref('')
const contactEmail = ref('')
const contactMessage = ref('')
const formStatus = ref('idle')
const formMessage = ref('')
const isSending = ref(false)

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const resetMouseTilt = () => {
  if (!skylineRef.value) return
  skylineRef.value.style.setProperty('--mouse-tilt-x', '0')
  skylineRef.value.style.setProperty('--mouse-tilt-y', '0')
}

const handleContactSubmit = async () => {
  if (!serviceId || !templateId || !publicKey) {
    formStatus.value = 'error'
    formMessage.value = 'EmailJS environment variables are missing. Please add your service, template, and public keys.'
    return
  }

  isSending.value = true
  formStatus.value = 'idle'
  formMessage.value = ''

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: contactName.value,
        reply_to: contactEmail.value,
        message: contactMessage.value,
      },
      {
        publicKey,
      }
    )

    contactName.value = ''
    contactEmail.value = ''
    contactMessage.value = ''
    formStatus.value = 'success'
    formMessage.value = 'Thank you! Your message has been sent.'
  } catch (error) {
    console.error('EmailJS error', error)
    formStatus.value = 'error'
    formMessage.value = 'Something went wrong while sending. Please try again or email me directly.'
  } finally {
    isSending.value = false
  }
}

const updateProgress = () => {
  if (!skylineRef.value) return

  if (reduceMotion.value) {
    skylineRef.value.style.setProperty('--scroll-progress', '0')
    return
  }

  const rect = skylineRef.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  const progress = Math.min(
    1,
    Math.max(0, 1 - (rect.top + rect.height * 0.2) / (viewportHeight + rect.height))
  )
  skylineRef.value.style.setProperty('--scroll-progress', progress.toFixed(4))
}

const handleScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    updateProgress()
    ticking = false
  })
}

const handlePointerMove = (event) => {
  if (!skylineRef.value || reduceMotion.value) return

  const rect = skylineRef.value.getBoundingClientRect()
  const offsetX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
  const offsetY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)

  const clampedX = Math.max(-1, Math.min(1, offsetX))
  const clampedY = Math.max(-1, Math.min(1, offsetY))

  skylineRef.value.style.setProperty('--mouse-tilt-x', clampedX.toFixed(4))
  skylineRef.value.style.setProperty('--mouse-tilt-y', clampedY.toFixed(4))
}

const handleReduceMotionChange = (event) => {
  reduceMotion.value = event.matches
  resetMouseTilt()
  updateProgress()
}

onMounted(() => {
  prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  reduceMotion.value = prefersReducedMotion.matches

  resetMouseTilt()
  updateProgress()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', updateProgress, { passive: true })
  prefersReducedMotion.addEventListener('change', handleReduceMotionChange)

  observer = new IntersectionObserver(() => updateProgress(), {
    threshold: [0, 0.25, 0.5, 0.75, 1],
  })

  if (skylineRef.value) {
    observer.observe(skylineRef.value)
    skylineRef.value.addEventListener('pointermove', handlePointerMove)
    skylineRef.value.addEventListener('mouseleave', resetMouseTilt)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateProgress)
  prefersReducedMotion?.removeEventListener('change', handleReduceMotionChange)
  if (observer && skylineRef.value) {
    observer.unobserve(skylineRef.value)
  }
  if (skylineRef.value) {
    skylineRef.value.removeEventListener('pointermove', handlePointerMove)
    skylineRef.value.removeEventListener('mouseleave', resetMouseTilt)
  }
})
</script>

<style scoped>
:global(body) {
  background: radial-gradient(circle at 18% 20%, rgba(224, 175, 160, 0.22), transparent 34%),
    radial-gradient(circle at 78% 12%, rgba(188, 184, 177, 0.26), transparent 42%),
    linear-gradient(135deg, #463f3a 0%, #8a817c 55%, #463f3a 100%);
  color: #f4f3ee;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  min-height: 100vh;
}

@media (max-width: 768px) {
  :global(html),
  :global(body) {
    overflow-x: hidden;
  }
}

.lightrope {
  text-align: center;
  white-space: nowrap;
  position: absolute;
  z-index: 1;
  margin: -25px 0 0 0;
  padding: 0;
  pointer-events: none;
  width: 100%;
}

@media (max-width: 768px) {
  .lightrope {
    left: 0;
    right: 0;
    max-width: 100vw;
    overflow-x: hidden;
  }
}
.lightrope li {
  position: relative;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  list-style: none;
  margin: 0;
  padding: 0;
  display: block;
  width: 12px;
  height: 28px;
  border-radius: 50%;
  margin: 20px;
  display: inline-block;
  background: #e41311;
  box-shadow: 0px 4.6666666667px 24px 3px #e41311;
  -webkit-animation-name: flash-1;
          animation-name: flash-1;
  -webkit-animation-duration: 2s;
          animation-duration: 2s;
}
.lightrope li:nth-child(2n+1) {
  background: #008556;
  box-shadow: 0px 4.6666666667px 24px 3px rgba(21, 43, 153, 0.5);
  -webkit-animation-name: flash-2;
          animation-name: flash-2;
  -webkit-animation-duration: 0.4s;
          animation-duration: 0.4s;
}
.lightrope li:nth-child(4n+2) {
  background: #e41311;
  box-shadow: 0px 4.6666666667px 24px 3px #e41311;
  -webkit-animation-name: flash-3;
          animation-name: flash-3;
  -webkit-animation-duration: 1.1s;
          animation-duration: 1.1s;
}
.lightrope li:nth-child(odd) {
  -webkit-animation-duration: 1.8s;
          animation-duration: 1.8s;
}
.lightrope li:nth-child(3n+1) {
  -webkit-animation-duration: 1.4s;
          animation-duration: 1.4s;
}
.lightrope li:before {
  content: "";
  position: absolute;
  background: #222;
  width: 10px;
  height: 9.3333333333px;
  border-radius: 3px;
  top: -4.6666666667px;
  left: 1px;
}
.lightrope li:after {
  content: "";
  top: -14px;
  left: 9px;
  position: absolute;
  width: 52px;
  height: 18.6666666667px;
  border-bottom: solid #222 2px;
  border-radius: 50%;
}
.lightrope li:last-child:after {
  content: none;
}
.lightrope li:first-child {
  margin-left: -40px;
}

@-webkit-keyframes flash-1 {
  0%, 100% {
    background: #e41311;
    box-shadow: 0px 4.6666666667px 24px 3px #e41311;
  }
  50% {
    background: rgba(228, 19, 17, 0.4);
    box-shadow: 0px 4.6666666667px 24px 3px rgba(228, 19, 17, 0.2);
  }
}

@keyframes flash-1 {
  0%, 100% {
    background: #e41311;
    box-shadow: 0px 4.6666666667px 24px 3px #e41311;
  }
  50% {
    background: rgba(228, 19, 17, 0.4);
    box-shadow: 0px 4.6666666667px 24px 3px rgba(228, 19, 17, 0.2);
  }
}
@-webkit-keyframes flash-2 {
  0%, 100% {
    background: #008556;
    box-shadow: 0px 4.6666666667px 24px 3px #008556;
  }
  50% {
    background: rgba(0, 133, 86, 0.4);
    box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 133, 86, 0.2);
  }
}
@keyframes flash-2 {
  0%, 100% {
    background: #008556;
    box-shadow: 0px 4.6666666667px 24px 3px #008556;
  }
  50% {
    background: rgba(0, 133, 86, 0.4);
    box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 133, 86, 0.2);
  }
}
@-webkit-keyframes flash-3 {
  0%, 100% {
    background: #e41311;
    box-shadow: 0px 4.6666666667px 24px 3px #e41311;
  }
  50% {
    background: rgba(228, 19, 17, 0.4);
    box-shadow: 0px 4.6666666667px 24px 3px rgba(228, 19, 17, 0.2);
  }
}
@keyframes flash-3 {
  0%, 100% {
    background: #e41311;
    box-shadow: 0px 4.6666666667px 24px 3px #e41311;
  }
  50% {
    background: rgba(228, 19, 17, 0.4);
    box-shadow: 0px 4.6666666667px 24px 3px rgba(228, 19, 17, 0.2);
  }
}
  
.parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 4;
}

.div2 {
  grid-area: 2 / 1 / 3 / 4;
}

.div3 {
  grid-area: 3 / 1 / 4 / 4;
}

.div4 {
  grid-area: 4 / 1 / 5 / 4;
}

.div5 {
  grid-area: 5 / 1 / 6 / 4;
}

.div6 {
  grid-area: 6 / 1 / 7 / 4;
}

.div7 { 
  grid-area: 7 / 1 / 8 / 4; 
}
  
.div8 { 
  grid-area: 8 / 1 / 9 / 4;
}
  
.div9 {
  grid-area: 9 / 1 / 10 / 4;
}

.div10 {
  grid-area: 10 / 1 / 11 / 4;
}

.pricing {
  display: grid;
  gap: clamp(16px, 3vw, 28px);
  padding: clamp(24px, 6vw, 48px);
  border-radius: 24px;
  background: radial-gradient(circle at 10% 20%, rgba(224, 175, 160, .1), transparent 35%), radial-gradient(circle at 80% 0%, rgba(188, 184, 177, .12), transparent 25%), #463f3ad1;
  border: 1px solid rgba(244, 243, 238, .1);
  backdrop-filter: blur(8px);
  color: #f8f9fb;
}

.pricing h2 {
  font-size: clamp(1.6rem, 2.2vw, 2rem);
  margin: 0;
  text-align: center;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: clamp(12px, 2vw, 20px);
}

.pricing-card {
  background: rgba(13, 19, 33, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  padding: clamp(16px, 2.5vw, 22px);
  display: grid;
  gap: 10px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.25);
}

.pricing-card__header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
}

.pricing-card__emoji {
  font-size: 1.6rem;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));
}

.pricing-card h3 {
  margin: 0;
  font-size: 1.1rem;
}

.pricing-card__subtitle {
  margin: 2px 0 0;
  color: rgba(248, 249, 251, 0.78);
  font-size: 0.95rem;
}

.pricing-card__price {
  margin: 0;
  font-weight: 700;
  color: #dce7ff;
}

.pricing-card ul {
  margin: 0;
  padding-left: 20px;
  display: grid;
  gap: 6px;
  color: rgba(248, 249, 251, 0.92);
}

.pricing-card__note,
.pricing-card__aside {
  margin: 0;
  color: rgba(248, 249, 251, 0.78);
}

.pricing-card__aside {
  font-size: 0.9rem;
  font-style: italic;
}

.skyline {
  position: relative;
  height: clamp(320px, 44vw, 200px);
  overflow: hidden;
  isolation: isolate;
  perspective: 900px;
  --scroll-progress: 0;
  --mouse-tilt-x: 0;
  --mouse-tilt-y: 0;
}
@keyframes shake {
  0%,
  50%,
  100% {
    transform: translate(-50%, -50%) rotate(0deg) translate(0, 0);
  }
  25% {
    transform: translate(-50%, -50%) rotate(4deg) translate(0, -10%);
  }
  75% {
    transform: translate(-50%, -50%) rotate(-6deg) translate(0, -12%);
  }
}

.faq {
  display: grid;
  gap: clamp(14px, 2vw, 20px);
  padding: clamp(22px, 5vw, 38px);
  background: radial-gradient(circle at 10% 20%,rgba(224,175,160,.1),transparent 35%),radial-gradient(circle at 80% 0%,rgba(188,184,177,.12),transparent 25%),#463f3ad1;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  color: #f8f9fb;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.3);
}

.faq h2 {
  margin: 0;
  text-align: center;
  font-size: clamp(1.5rem, 2.1vw, 2rem);
}

.faq-visual {
  display: flex;
  justify-content: center;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(14px, 2vw, 18px);
}

.faq-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: clamp(14px, 2vw, 18px);
  display: grid;
  gap: 10px;
  line-height: 1.6;
  position: relative;
}

.faq-item[open] {
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
}

.faq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  list-style: none;
  cursor: pointer;
  padding: 0;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary:focus-visible {
  outline: 2px solid #9ecbff;
  outline-offset: 4px;
  border-radius: 10px;
}

.faq-item h3 {
  margin: 0;
  font-size: 1.05rem;
  color: #dce7ff;
}

.faq-item p {
  margin: 0;
  color: rgba(248, 249, 251, 0.86);
}

.faq-item ul {
  margin: 0;
  padding-left: 18px;
  color: rgba(248, 249, 251, 0.86);
  display: grid;
  gap: 4px;
}

.faq-content {
  display: grid;
  gap: 8px;
}

.faq-toggle {
  width: 22px;
  height: 22px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.05);
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.faq-toggle::before,
.faq-toggle::after {
  content: '';
  position: absolute;
  background: #dce7ff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.faq-toggle::before {
  width: 10px;
  height: 2px;
}

.faq-toggle::after {
  width: 2px;
  height: 10px;
}

.faq-item[open] .faq-toggle {
  transform: rotate(45deg);
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.08);
}

.something {
  width: 50%;
  height: 50%;
  left: 50%;
  bottom: 23%;
  transform: translate(-50%, 0);
  /* From Clippy by Bennett Feely */
  /*   clip-path: polygon(18% 100%, 24% 91%, 25% 85%, 25% 76%, 17% 84%, 11% 86%, 3% 86%, 1% 78%, 3% 70%, 14% 63%, 19% 55%, 24% 49%, 31% 45%, 37% 44%, 37% 38%, 43% 41%, 48% 42%, 47% 35%, 43% 26%, 47% 12%, 46% 7%, 49% 4%, 51% 8%, 59% 5%, 66% 7%, 70% 16%, 71% 23%, 70% 31%, 68% 46%, 76% 51%, 79% 47%, 80% 41%, 86% 48%, 88% 50%, 88% 53%, 87% 56%, 90% 63%, 98% 75%, 99% 82%, 98% 91%, 95% 96%, 88% 93%, 77% 85%, 78% 100%);
  background: url(https://alvaromontoro.com/images/me6.webp);
  background-size: cover; */
  background: radial-gradient(circle at 45% 22%, #222 3%, #0000 0),
    radial-gradient(circle at 58% 22%, #222 3%, #0000 0),
    radial-gradient(circle at 58% 60%, #222 3%, #0000 0),
    radial-gradient(circle at 60% 70%, #222 2.75%, #0000 0),
    radial-gradient(circle at 58% 80%, #222 2.5%, #0000 0),
    conic-gradient(at 100% 50%, #0000 260deg, orange 0 280deg, #0000 0) 60% 25% /
      15% 15%,
    linear-gradient(30deg, #0000 40%, brown 0 50%, #0000 0) 100% 70% / 20% 20%,
    linear-gradient(0deg, #0000 40%, brown 0 60%, #0000 0) 100% 70% / 10% 10%,
    linear-gradient(60deg, #0000 40%, brown 0 55%, #0000 0) 100% 74% / 10% 10%,
    linear-gradient(-30deg, #0000 40%, brown 0 50%, #0000 0) 5% 67% / 20% 20%,
    linear-gradient(20deg, #0000 40%, brown 0 60%, #0000 0) 5% 65% / 10% 10%,
    linear-gradient(130deg, #0000 40%, brown 0 60%, #0000 0) 6% 72% / 10% 10%,
    radial-gradient(circle at 50% 25%, #fff, #eee 22%, #0000 0),
    radial-gradient(circle at 50% 30%, #000, #0000 20%),
    radial-gradient(circle at 50% 70%, #fff, #eee 40%, #0000 0);
  background-repeat: no-repeat;
}

  
.layer {
  position: absolute;
  inset: 0;
  transform-origin: center;
  transition: transform 0.4s ease-out;
}

.layer--stars {
  background: radial-gradient(circle at 24% 18%, rgba(255, 255, 255, 0.35), transparent 36%),
    radial-gradient(circle at 78% 24%, rgba(255, 255, 255, 0.2), transparent 30%);
  transform: translateX(calc(var(--mouse-tilt-x) * 10px))
    translateY(calc(var(--scroll-progress) * -8px + var(--mouse-tilt-y) * -4px)) scale(1.02);
}

.star {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  animation: twinkle 8s ease-in-out infinite;
}

.star--tiny {
  width: 2px;
  height: 2px;
  animation-duration: 10s;
}
/* customizable snowflake styling */
.snowflake {
  color: #fff;
  font-size: 1em;
  font-family: Arial;
  text-shadow: 0 0 1px #000;
}

@-webkit-keyframes snowflakes-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@-webkit-keyframes snowflakes-shake {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  50% {
    -webkit-transform: translateX(80px);
    transform: translateX(80px);
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
}
@keyframes snowflakes-fall {
  0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }
}
@keyframes snowflakes-shake {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(80px);
  }
  100% {
    transform: translateX(0px);
  }
}
.snowflake {
  position: fixed;
  top: -10%;
  z-index: 9999;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  -webkit-animation-name: snowflakes-fall, snowflakes-shake;
  -webkit-animation-duration: 10s, 3s;
  -webkit-animation-timing-function: linear, ease-in-out;
  -webkit-animation-iteration-count: infinite, infinite;
  -webkit-animation-play-state: running, running;
  animation-name: snowflakes-fall, snowflakes-shake;
  animation-duration: 10s, 3s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running;
}
.snowflake:nth-of-type(0) {
  left: 1%;
  -webkit-animation-delay: 0s, 0s;
  animation-delay: 0s, 0s;
}
.snowflake:nth-of-type(1) {
  left: 10%;
  -webkit-animation-delay: 1s, 1s;
  animation-delay: 1s, 1s;
}
.snowflake:nth-of-type(2) {
  left: 20%;
  -webkit-animation-delay: 6s, 0.5s;
  animation-delay: 6s, 0.5s;
}
.snowflake:nth-of-type(3) {
  left: 30%;
  -webkit-animation-delay: 4s, 2s;
  animation-delay: 4s, 2s;
}
.snowflake:nth-of-type(4) {
  left: 40%;
  -webkit-animation-delay: 2s, 2s;
  animation-delay: 2s, 2s;
}
.snowflake:nth-of-type(5) {
  left: 50%;
  -webkit-animation-delay: 8s, 3s;
  animation-delay: 8s, 3s;
}
.snowflake:nth-of-type(6) {
  left: 60%;
  -webkit-animation-delay: 6s, 2s;
  animation-delay: 6s, 2s;
}
.snowflake:nth-of-type(7) {
  left: 70%;
  -webkit-animation-delay: 2.5s, 1s;
  animation-delay: 2.5s, 1s;
}
.snowflake:nth-of-type(8) {
  left: 80%;
  -webkit-animation-delay: 1s, 0s;
  animation-delay: 1s, 0s;
}
.snowflake:nth-of-type(9) {
  left: 90%;
  -webkit-animation-delay: 3s, 1.5s;
  animation-delay: 3s, 1.5s;
}
/* Demo Purpose Only*/
.demo {
  font-family: "Raleway", sans-serif;
  color: #fff;
  display: block;
  margin: 0 auto;
  padding: 15px 0;
  text-align: center;
}
.demo a {
  font-family: "Raleway", sans-serif;
  color: #000;
}

.star--small {
  width: 3px;
  height: 3px;
  animation-duration: 9s;
}

.star--bright {
  width: 6px;
  height: 6px;
  filter: drop-shadow(0 0 18px rgba(255, 255, 255, 0.8));
  animation-duration: 7s;
}

.layer--stars-back .star:nth-child(1) {
  top: 18%;
  left: 22%;
}

.layer--stars-back .star:nth-child(2) {
  top: 32%;
  left: 66%;
}

.layer--stars-back .star:nth-child(3) {
  top: 42%;
  left: 48%;
}

.layer--stars-back .star:nth-child(4) {
  top: 26%;
  left: 82%;
}

.layer--stars-back .star:nth-child(5) {
  top: 14%;
  left: 12%;
}

.layer--stars-mid .star:nth-child(1) {
  top: 48%;
  left: 18%;
}

.layer--stars-mid .star:nth-child(2) {
  top: 58%;
  left: 64%;
}

.silhouette--back {
  bottom: 34%;
  background-image: linear-gradient(180deg, rgba(104, 112, 140, 0.4) 0%, rgba(50, 58, 92, 0.8) 100%);
  clip-path: polygon(
    4% 70%,
    12% 48%,
    18% 54%,
    22% 42%,
    30% 60%,
    36% 46%,
    44% 52%,
    48% 36%,
    56% 58%,
    64% 44%,
    70% 52%,
    76% 38%,
    84% 58%,
    94% 44%,
    94% 100%,
    4% 100%
  );
}

.silhouette--mid {
  bottom: 24%;
  background-image: linear-gradient(180deg, rgba(82, 92, 130, 0.8) 0%, rgba(34, 42, 78, 0.95) 100%);
  clip-path: polygon(
    6% 76%,
    14% 52%,
    20% 58%,
    24% 38%,
    30% 64%,
    38% 48%,
    46% 56%,
    50% 32%,
    58% 60%,
    66% 46%,
    72% 56%,
    80% 34%,
    86% 62%,
    94% 46%,
    94% 100%,
    6% 100%
  );
}

.layer--background {
  transform: translateX(calc(var(--mouse-tilt-x) * 8px))
    translateY(calc(var(--scroll-progress) * -18px + var(--mouse-tilt-y) * -6px)) scale(1.02);
}

.layer--mid {
  transform: translateX(calc(var(--mouse-tilt-x) * 12px))
    translateY(calc(var(--scroll-progress) * -26px + var(--mouse-tilt-y) * -8px)) scale(1.03);
}

.layer--foreground {
  display: flex;
  align-items: flex-end;
  transform: translateX(calc(var(--mouse-tilt-x) * 16px))
    translateY(calc(var(--scroll-progress) * -42px + var(--mouse-tilt-y) * -10px)) scale(1.04);
}

.layer--stars-mid .star:nth-child(4) {
  top: 62%;
  left: 36%;
}

.layer--stars-mid .star:nth-child(5) {
  top: 46%;
  left: 52%;
}

.layer--stars-foreground .star:nth-child(1) {
  top: 68%;
  left: 18%;
}

.layer--stars-foreground .star:nth-child(2) {
  top: 72%;
  left: 72%;
}

.shooting-star {
  position: absolute;
  width: 120px;
  height: 1px;
  top: 22%;
  left: 16%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, transparent 100%);
  filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.6));
  transform: rotate(12deg);
  animation: shoot 12s ease-in-out infinite;
}

@keyframes shoot {
  0% {
    opacity: 0;
    transform: translate3d(-80px, 22px, 0) rotate(12deg);
  }
  12% {
    opacity: 1;
    transform: translate3d(60px, -12px, 0) rotate(12deg);
  }
  20% {
    opacity: 0;
    transform: translate3d(140px, -24px, 0) rotate(12deg);
  }
  100% {
    opacity: 0;
    transform: translate3d(-80px, 22px, 0) rotate(12deg);
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.4;
    transform: scale(0.98);
  }
  50% {
    opacity: 1;
    transform: scale(1.06);
  }
}

@media (prefers-reduced-motion: reduce) {
  .layer {
    transition: none;
    transform: none !important;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 18px;
}

.codepen-card {
  position: relative;
  overflow: hidden;
  display: grid;
  align-items: stretch;
  min-height: 320px;
}

.codepen-scene {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  min-height: 320px;
}

.glow {
  position: absolute;
  width: 320px;
  height: 320px;
  filter: blur(60px);
  mix-blend-mode: screen;
  opacity: 0.8;
  animation: float 16s ease-in-out infinite;
}

.glow-one {
  background: radial-gradient(circle, rgba(255, 133, 92, 0.6), transparent 58%);
  top: -40px;
  left: -60px;
  animation-delay: -4s;
}

.glow-two {
  background: radial-gradient(circle, rgba(103, 163, 255, 0.65), transparent 60%);
  bottom: -80px;
  right: -20px;
  animation-duration: 18s;
}

.glow-three {
  background: radial-gradient(circle, rgba(255, 219, 120, 0.6), transparent 62%);
  top: 40px;
  right: 120px;
  animation-duration: 20s;
  animation-delay: -10s;
}

@keyframes float {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(40px, -16px, 0) scale(1.05);
  }
  100% {
    transform: translate3d(-12px, 20px, 0);
  }
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 22px 22px;
  opacity: 0.3;
  mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 45%, rgba(0, 0, 0, 1) 100%);
  transform: perspective(520px) rotateX(66deg) translateY(36px);
  transform-origin: center top;
}

.particle-field {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 18px rgba(255, 255, 255, 0.7);
  animation: drift 14s linear infinite;
}

.particle:nth-child(1) {
  top: 14%;
  left: 16%;
  animation-delay: -2s;
  animation-duration: 16s;
}

.particle:nth-child(2) {
  top: 40%;
  left: 58%;
  animation-delay: -6s;
  animation-duration: 18s;
}

.particle:nth-child(3) {
  top: 68%;
  left: 22%;
  animation-delay: -10s;
}

.particle:nth-child(4) {
  top: 78%;
  left: 72%;
  animation-duration: 12s;
}

.particle:nth-child(5) {
  top: 16%;
  left: 80%;
  animation-duration: 20s;
  animation-delay: -8s;
}

.particle:nth-child(6) {
  top: 32%;
  left: 32%;
  animation-duration: 15s;
}

.particle-message {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 18px 28px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(244, 243, 238, 0.9);
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  pointer-events: none;
}

@keyframes drift {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate3d(14px, -26px, 0) scale(0.9);
    opacity: 0.8;
  }
  100% {
    transform: translate3d(-10px, 30px, 0) scale(1.05);
    opacity: 1;
  }
}

.codepen-copy {
  padding: 28px 28px 32px;
  align-self: center;
}

.eyebrow {
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.75rem;
  opacity: 0.7;
  margin: 0 0 10px;
}

.codepen-copy h2 {
  margin: 0 0 12px;
  font-size: 1.5rem;
}

.codepen-copy p {
  margin: 0;
  color: rgba(244, 243, 238, 0.86);
  line-height: 1.6;
}

  @media (max-width: 960px) {
    .codepen-card {
      grid-template-columns: 1fr;
    }

    .codepen-copy {
      padding: 22px;
    }
  }
  .contact {
    display: grid;
    place-items: center;
    padding: clamp(24px, 6vw, 56px);
  }

  .about {
    display: grid;
    place-items: center;
    padding: clamp(24px, 6vw, 56px);
  }

  .about-card {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: clamp(16px, 3vw, 28px);
    padding: clamp(24px, 6vw, 40px);
    border-radius: 20px;
    background: radial-gradient(circle at 10% 20%,rgba(224,175,160,.1),transparent 35%),radial-gradient(circle at 80% 0%,rgba(188,184,177,.12),transparent 25%),#463f3ad1;
    border: 1px solid rgba(244, 243, 238, 0.08);
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.24);
  }

  .about-visual {
    display: grid;
    place-items: center;
  }

  .about-visual :deep(dotlottie-player) {
    max-width: 100%;
    height: auto;
  }

  .about-copy {
    display: grid;
    gap: 8px;
  }

  .about h2 {
    margin: 0;
  }

  .about p {
    margin: 0;
    color: rgba(244, 243, 238, 0.86);
    line-height: 1.6;
  }

  @media (max-width: 820px) {
    .about-card {
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: center;
    }

    .about-copy {
      justify-items: center;
    }
  }

  .contact-card {
    width: min(980px, 100%);
    display: grid;
    gap: clamp(20px, 3vw, 28px);
    padding: clamp(24px, 6vw, 48px);
    border-radius: 24px;
    background: radial-gradient(circle at 10% 20%,rgba(224,175,160,.1),transparent 35%),radial-gradient(circle at 80% 0%,rgba(188,184,177,.12),transparent 25%),#463f3ad1;
    border: 1px solid rgba(244, 243, 238, 0.08);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
  }

  .contact-header h2 {
    margin: 6px 0 10px;
  }

  .contact-header p {
    margin: 0;
    color: rgba(244, 243, 238, 0.86);
  }

  .contact-reassurance {
    padding: 16px 18px;
    border-radius: 14px;
    border: 1px solid rgba(244, 243, 238, 0.08);
    background: rgba(244, 243, 238, 0.03);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    display: grid;
    gap: 6px;
    color: rgba(244, 243, 238, 0.86);
  }

  .contact-reassurance__heading {
    margin: 0;
    font-weight: 700;
    color: #f4f3ee;
  }

  .contact-form {
    display: grid;
    gap: 16px;
  }

  .field {
    display: grid;
    gap: 8px;
    font-weight: 600;
    color: rgba(244, 243, 238, 0.9);
  }

  .field input,
  .field textarea {
    width: 100%;
    border-radius: 12px;
    border: 1px solid rgba(244, 243, 238, 0.16);
    background: rgba(20, 24, 33, 0.75);
    color: #f4f3ee;
    padding: 12px 14px;
    font: inherit;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .field input:focus,
  .field textarea:focus {
    outline: none;
    border-color: rgba(238, 192, 139, 0.8);
    box-shadow: 0 10px 30px rgba(238, 192, 139, 0.12);
  }

  .field textarea {
    resize: vertical;
    min-height: 140px;
  }

  .submit {
    justify-self: start;
    padding: 12px 18px;
    border-radius: 14px;
    border: none;
    background: linear-gradient(135deg, rgb(224, 175, 160), rgb(244, 243, 238));
    color: #463f3a;
    font-weight: 700;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  }

  .submit:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  }

  .submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .status {
    margin: 4px 0 0;
    font-weight: 600;
  }

  .status--success {
    color: #b3f7cf;
  }

  .status--error {
    color: #ffc9c9;
  }

  .contact .eyebrow {
    color: rgba(244, 243, 238, 0.6);
  }
  @media (max-width: 768px) {
    .mobilehide {
      display: none;
  }
}
</style>
