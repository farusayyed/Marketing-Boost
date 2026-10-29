import { useState } from 'react'
import './HomePage.css'

const marketingBoost = 'https://marketingboost.com'

const steps = [
  {
    number: '01',
    title: 'Step 1: Stop undercutting yourself.',
    description:
      'Protect your pricing and make the value of your product or service easier to say yes to. A thoughtful bonus can take the place of another discount.',
    accent: 'coral',
  },
  {
    number: '02',
    title: "Step 2: Offer a high-value incentive you don't personally have to fulfill.",
    description:
      'Give prospects something exciting to look forward to. MarketingBoost vacation certificates can complement offers across many kinds of businesses.',
    accent: 'blue',
  },
  {
    number: '03',
    title: 'Step 3: Let us WOW your new clients and customers!',
    description:
      'Welcome new customers with a clear next step and a reward they can enjoy. Strong experiences can encourage repeat business and referrals.',
    accent: 'green',
  },
]

const memberStories = [
  {
    quote: '“Replace this with an approved member testimonial.”',
    name: 'Testimonial placeholder',
    role: 'Replace with approved attribution',
  },
  {
    quote: '“Add an approved quote about a customer experience here.”',
    name: 'Testimonial placeholder',
    role: 'Replace with approved attribution',
  },
  {
    quote: '“Add an approved quote about referrals or repeat business here.”',
    name: 'Testimonial placeholder',
    role: 'Replace with approved attribution',
  },
]

function TrialLink({
  children = 'Start My 7-Day Free Trial Now',
  className = '',
}: {
  children?: string
  className?: string
}) {
  return (
    <a
      className={`trial-button${className ? ` ${className}` : ''}`}
      href={`${marketingBoost}/plan_listing`}
    >
      <span>{children}</span>
      <small>Then only $37 per month after</small>
    </a>
  )
}

function PromoBanner() {
  return (
    <a
      className="promo-banner"
      href={`${marketingBoost}/onboarding-video`}
      aria-label="Watch the MarketingBoost onboarding"
    >
      <img
        src="/assets/onboarding_banner.jpg"
        alt="Get started with Marketing Boost in under 3 minutes - Watch onboarding now"
        width="1024"
        height="232"
      />
    </a>
  )
}

function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="hero-video">
      {isPlaying ? (
        <iframe
          src="https://fast.wistia.net/embed/iframe/1rdo1cs7u5?seo=false&videoFoam=true"
          title="MarketingBoost homepage video"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          className="video-thumbnail"
          type="button"
          aria-label="Play the MarketingBoost homepage video"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src="/assets/homepage-video-thumbnail.jpg"
            alt=""
            width="1920"
            height="1080"
          />
          <span className="video-thumbnail-play" aria-hidden="true">
            ▶
          </span>
        </button>
      )}
    </div>
  )
}

function HomePage() {
  return (
    <div className="homepage">
      <div className="content-width">
        <PromoBanner />
      </div>

      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-heading">
              <h1>How to Instantly Boost Sales by 60% or More...</h1>
              <h2>and Turn Buyers Into Loyal Fans</h2>
              <h2>With Incentive Based Marketing</h2>
            </div>
            <p className="hero-description">
              Discover the 3-step secret weapon of the world&apos;s smartest
              marketers!
            </p>
            <TrialLink className="hero-trial-button" />
          </div>
          <div className="hero-media">
            <HeroVideo />
            <div className="seen-on-wrap">
              <img
                className="seen-on-image"
                src="/assets/ocbs.png"
                alt="As seen on CBS and FOX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="steps-section section-space" id="features">
        <div className="content-width">
          <div className="section-heading">
            <p className="eyebrow">A simple approach</p>
            <h2>Turn a stronger offer into a better customer experience</h2>
            <p>
              Three practical steps help you protect your value while creating
              more reasons for customers to choose you.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <article
                className={`step-card step-card-${step.accent}`}
                key={step.number}
              >
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mid-cta">
        <div className="content-width mid-cta-inner">
          <div>
            <p className="eyebrow">Start with a 7-day trial</p>
            <h2>Try MarketingBoost free for 7 days</h2>
            <p>Explore the platform and see how incentives fit your business.</p>
          </div>
          <a className="trial-button trial-button-light" href={`${marketingBoost}/plan_listing`}>
            Yes, I want to boost my sales
          </a>
        </div>
      </section>

      <section className="why-section section-space">
        <div className="content-width why-grid">
          <div className="why-copy">
            <p className="eyebrow">Why vacation incentives?</p>
            <h2>I&apos;m not in the travel industry.</h2>
            <p>
              You don’t have to be. A travel reward can add a distinctive,
              tangible benefit to an offer in a wide range of industries.
            </p>
            <p>
              MarketingBoost says its members have shared more than half a
              million vacation certificates. The idea is straightforward: give
              customers a memorable experience to associate with your business.
            </p>
            <a className="text-link" href={`${marketingBoost}/marketing-incentive-vacation-destinations`}>
              Explore destinations <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="story-card">
            <div className="story-image-placeholder">
              <span className="placeholder-sun" />
              <span className="placeholder-horizon" />
              <span className="story-image-label">Temporary destination image</span>
            </div>
            <div className="story-card-copy">
              <p className="eyebrow">Member example</p>
              <h3>A valued bonus can help a strong offer stand out</h3>
              <p>
                Use a reward to support a promotion, referral program, or
                customer appreciation campaign.
              </p>
              <a className="text-link" href={`${marketingBoost}/case-studies`}>
                Read member stories <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="content-width stats-inner">
          <div className="stats-intro">
            <p className="eyebrow">A growing community</p>
            <h2>Empowering business owners to thrive</h2>
          </div>
          <div className="stat">
            <strong>10,000+</strong>
            <span>MarketingBoost members</span>
          </div>
          <div className="stat">
            <strong>500,000+</strong>
            <span>Vacation certificates gifted</span>
          </div>
          <div className="stat">
            <strong>$375M+</strong>
            <span>In vacations gifted</span>
          </div>
          <p className="stats-disclaimer">Figures shown as reported by MarketingBoost.</p>
        </div>
      </section>

      <section className="testimonial-section section-space" id="member-stories">
        <div className="content-width">
          <div className="section-heading">
            <p className="eyebrow">Member stories</p>
            <h2>See how members put MarketingBoost to work</h2>
            <p>
              Explore experiences from business owners and marketers in the
              community.
            </p>
          </div>
          <div className="testimonials-grid">
            {memberStories.map((story, index) => (
              <article className="testimonial-card" key={index}>
                <a
                  className={`testimonial-media testimonial-media-${index + 1}`}
                  href={`${marketingBoost}/success-stories`}
                  aria-label="View MarketingBoost member stories"
                >
                  <span className="testimonial-play" aria-hidden="true">▶</span>
                  <span className="testimonial-media-label">
                    Video testimonial placeholder
                  </span>
                </a>
                <blockquote>{story.quote}</blockquote>
                <p className="testimonial-name">{story.name}</p>
                <p className="testimonial-role">{story.role}</p>
              </article>
            ))}
          </div>
          <div className="stories-link-wrap">
            <a className="outline-button" href={`${marketingBoost}/success-stories`}>
              View more member stories
            </a>
          </div>
        </div>
      </section>

      <section className="who-pays-section section-space">
        <div className="content-width who-pays-grid">
          <div className="resort-placeholder" role="img" aria-label="Temporary resort image placeholder">
            <span className="resort-sun" />
            <span className="resort-water" />
            <span className="resort-placeholder-label">Replace with supplied travel image</span>
          </div>
          <div className="who-pays-copy">
            <p className="eyebrow">The reward, made simple</p>
            <h2>So who takes care of the vacation?</h2>
            <p>
              MarketingBoost works with travel providers to make select
              certificate offers available to members. Your role is to share
              the incentive as part of your customer experience.
            </p>
            <p>
              Certificate details, availability, and booking terms vary by
              offer. Review the current terms before sharing a promotion with
              customers.
            </p>
            <a className="text-link" href={`${marketingBoost}/certificate_terms`}>
              Review certificate terms <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="audience-section section-space" id="ideal-for">
        <div className="content-width audience-grid">
          <div className="audience-copy">
            <p className="eyebrow">A flexible incentive platform</p>
            <h2>Who is MarketingBoost for?</h2>
            <p>
              Business owners and independent professionals use incentives to
              support customer appreciation, promotions, referrals, and team
              recognition.
            </p>
            <p>
              It works best as an addition to an established business—not as a
              standalone business opportunity.
            </p>
            <a className="text-link" href={`${marketingBoost}/idealfor`}>
              See who it is designed for <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="audience-tiles" aria-label="Industries served">
            <span>Real Estate</span>
            <span>Insurance</span>
            <span>Coaching</span>
            <span>Marketing</span>
            <span>Travel</span>
            <span>Small Business</span>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="content-width closing-inner">
          <p className="eyebrow">Make your next offer memorable</p>
          <h2>You deserve more customers saying yes.</h2>
          <p>
            Explore MarketingBoost and decide whether incentive-based marketing
            fits your next campaign.
          </p>
          <TrialLink />
          <p className="closing-note">
            Review membership details and current terms before signing up.
          </p>
          <a
            className="facebook-link"
            href="https://www.facebook.com/groups/1988225651450719/"
            target="_blank"
            rel="noreferrer"
          >
            Join our Facebook Group <span aria-hidden="true">→</span>
          </a>
          <span className="closing-community-copy">
            Connect with other MarketingBoost users.
          </span>
        </div>
      </section>
    </div>
  )
}

export default HomePage
