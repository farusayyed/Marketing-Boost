import { useState } from "react";
import "./HomePage.css";

const marketingBoost = "https://marketingboost.com";

const steps = [
  {
    label: "Step 1:",
    title: "Stop undercutting yourself.",
    image: "/assets/img_Step01.jpg",
    imageAlt: "Two business people shaking hands after a meeting",
    paragraphs: [
      "All of those \"don't tell anyone\" discounts you've been giving just to push prospects over the edge? Your customers are telling their friends about them. Same with all the incentives you pay for out of pocket, like expensive dinners and service enhancements.",
      "Stick to your pricing and stop paying for extras. Otherwise, it becomes impossible to stop giving away all of your profits.",
      "Every time you accept less money than you ask for, or pay for freebies out of your own pocket, it robs you of income you deserve to grow your business and secure your financial freedom.",
      'That\'s exactly why countless business owners feel stuck - unable to break through their personal "income ceilings."',
    ],
  },
  {
    label: "Step 2:",
    title: "Offer a high-value incentive you don't personally have to fulfill.",
    image: "/assets/img_Step02.jpg",
    imageAlt: "A couple relaxing on beach chairs beside a tropical sea",
    reverse: true,
    content: (
      <>
        <p>
          Potential buyers are <em>heavily</em> influenced by bonuses,
          especially high-value incentives that aren&apos;t available just
          anywhere.{" "}
          <strong>After all, people love to be treated like royalty.</strong>
        </p>
        <div className="step2-callout">
          <p>
            No matter what kinds of products or services you sell, NOTHING
            seduces a fence-sitter like throwing in a free vacation when they
            say YES to your offer, upsell, or referral request.
          </p>
        </div>
        <p className="step2-travel-copy">
          Your products and services become irresistible when your prospects
          start picturing themselves{" "}
          <em>
            relaxing on a sun-soaked beach... gazing at the endless neon of the
            Vegas Strip... or sampling local cuisine at a picturesque Mexican
            plaza
          </em>{" "}
          - all on someone else&apos;s dime.
        </p>
        <p className="step2-final-copy">
          And being able to provide your new buyers with fantastic vacations
          feels great too... especially{" "}
          <strong>
            since it&apos;s not <em>YOUR</em> dime.
          </strong>{" "}
          (It&apos;s ours.)
        </p>
      </>
    ),
  },
  {
    label: "Step 3:",
    title: "Let us WOW your new clients and customers!",
    image: "/assets/img_Step3.jpg",
    imageAlt: "Two women enjoying a meal together",
    paragraphs: [
      "Once you welcome your new client or customer on board, you'll set them up to receive a certificate to redeem their vacation package. They'll then have 7-days to activate their certificates.",
      "Once activated, the certificates are valid for 18 months, and certificate holders can book and travel any time within that timeframe.",
      "So your buyers get complete freedom to enjoy their memorable, luxury trips!",
    ],
  },
];

const memberStories = [
  {
    quote:
      "“I’ve been able to generate over 400K in additional revenue from Marketing Boost”",
    name: "Michael Mansell",
    role: "Online Marketer",
    videoId: "6soemexjvo",
  },
  {
    quote: "“I did over $200,000 in sales & we just continue to grow”",
    name: "Cajuan Mayo",
    role: "Affiliate Marketer",
    videoId: "znuj2y07on",
  },
  {
    quote:
      "\"Over the last 12 months I've seen an increase of over $100,000 in Income\"",
    name: "Javier Rodriguez",
    role: "Insurance Sales",
    videoId: "7j9ijdhgek",
  },
  {
    quote: "\"In 48 hours we had done $9,000 in Sales\"",
    name: "Taylor Morgan",
    role: "eCommerce",
    videoId: "7oygzwsm4w",
  },
  {
    quote:
      "\"It made me one of the top affiliates on the leaderboard week after week, it's awesome\"",
    name: "Greg Blazer",
    role: "Digital Marketer",
    videoId: "9horx1ec3q",
  },
  {
    quote:
      "\"It's allowed me to increase my sales by over $80,000 and give back where I care about the most\"",
    name: "James Neville-Taylor",
    role: "Affiliate Marketer",
    videoId: "dhd2w7o72h",
  },
  {
    quote:
      "\"I have done over $175,000 extra through the agency and obtained a bunch of new customers\"",
    name: "Tony Mathew",
    role: "Marketing Agency",
    videoId: "t7miec4321",
  },
  {
    quote:
      "\"Our sales have jumped over 50% since we started using Marketing Boost, it's been amazing\"",
    name: "Vernon Taylor",
    role: "Fitness Training",
    videoId: "kqcxic6mud",
  },
  {
    quote:
      "\"In just the first 3 weeks that I tried Marketing Boost I made over $15,000\"",
    name: "Alex Vidal",
    role: "Insurance Marketing",
    videoId: "98bryf8g6u",
  },
];

function TrialLink({
  children = "Start My 7-Day Free Trial Now",
  className = "",
}: {
  children?: string;
  className?: string;
}) {
  return (
    <a
      className={`trial-button${className ? ` ${className}` : ""}`}
      href={`${marketingBoost}/plan_listing`}
    >
      <span>{children}</span>
      <small>Then only $37 per month after</small>
    </a>
  );
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
  );
}

function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

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
  );
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

      <section className="steps-section" id="features">
        {steps.map((step) => (
          <article
            className={`step-row${step.reverse ? " step-row-reverse" : ""}`}
            key={step.label}
          >
            <div className="step-inner">
              <div className="step-image">
                <img src={step.image} alt={step.imageAlt} />
              </div>
              <div className="step-copy">
                <h2>
                  <span>{step.label}</span> {step.title}
                </h2>
                {"content" in step
                  ? step.content
                  : step.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mid-cta">
        <div className="mid-cta-inner">
          <p>It&apos;s that simple.</p>
          <h2>Try MarketingBoost for 7-Days - FREE!</h2>
          <a className="mid-cta-button" href={`${marketingBoost}/plan_listing`}>
            YES, I WANT TO BOOST MY SALES!
          </a>
        </div>
      </section>

      <section className="why-section section-space">
        <div className="content-width why-grid">
          <div className="why-copy">
            <h2 className="why-title">Why vacation incentives?</h2>
            <h3 className="why-subtitle">
              I&apos;m not in the travel industry.
            </h3>
            <p>
              Perfect! Neither are most of the 10000+ business owners who have
              given away more than 500,000 vacations through MarketingBoost!
            </p>
            <p className="why-space">
              The simple fact is that it doesn&apos;t matter what niche
              you&apos;re in or what you&apos;re selling...{" "}
              <em>people love to travel...</em> and the prospect of a free
              luxury vacation influences them FAR more than discounts!
            </p>
          </div>
          <div className="story-card">
            <div className="story-card-copy">
              <p>
                A study by Oxford Economics showed that people are 3 times more
                motivated to take action when offered tangible incentives (like
                travel) than when offered cash incentives (like discounts.)
              </p>
              <p className="why-space">
                And when you give your buyers, clients, and repeat customers
                luxury vacations, you&apos;re not only boosting their desire to
                buy - you&apos;re creating a permanent positive impression. The
                Oxford study explains:
              </p>
              <p className="why-space why-quote">
                &ldquo;It&apos;s just the way our brains work. People are able
                to remember and visualize tangible items better than cash, and
                are therefore more actively engaged...&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="vacation-example-section"
        aria-label="Vacation incentive case study"
      >
        <div className="vacation-example-inner">
          <div className="vacation-example-intro">
            <p>
              But let&apos;s not just trust our futures to academic studies.
            </p>
            <p className="vacation-example-followup">
              Instead, let&apos;s see an example of how vacation incentives
              motivate buyers in real life:
            </p>
          </div>
          <div className="vacation-example-grid">
            <div className="vacation-example-post">
              <h3>
                Sold 12k coaching package
                <br />
                with vacation giveaway
              </h3>
              <img src="/assets/img_Giveaway.png" alt="Giveaway programs" />
            </div>
            <div className="vacation-example-vacation">
              <img src="/assets/img_Vacation.jpg" alt="Vacation certificates" />
              <p>
                ONE 5-night vacation - which cost Eddie Espiritu <i>nothing</i>{" "}
                above his MarketingBoost membership investment, convinced one of
                his buyers to make a payment of{" "}
                <span>over $8000... more than 30 DAYS EARLY!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="content-width stats-inner">
          <div className="stats-intro">
            <h2>Empowering business owners to thrive</h2>
            <p>
              Join the 10000+ business owners who are enthusiastically giving
              away MarketingBoost vacation certificates... and dramatically
              growing their sales and incomes!
            </p>
          </div>
          <div className="stats-list">
            <div className="stat">
              <strong>10000+</strong>
              <span>Marketing Boost Members</span>
            </div>
            <div className="stat">
              <strong>500,000+</strong>
              <span>Vacation Certificates Gifted</span>
            </div>
            <div className="stat">
              <strong>$375,000,000+</strong>
              <span>of Vacations Gifted</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sales-proof-section">
        <div className="sales-proof-inner">
          <h2>
            Can this really boost <i>my</i> sales by 60% or more, though?
          </h2>
          <div className="sales-proof-grid">
            <div className="sales-proof-video">
              <iframe
                src="https://fast.wistia.net/embed/iframe/x9gxfc20qz?seo=false&videoFoam=true"
                title="Brett Jones of NuVision Auto Glass"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
            <div className="sales-proof-copy">
              <strong>Let’s ask Brett Jones of NuVision Auto Glass:</strong>
              <p>
                &quot;If you were add up the total gross sales from the
                marketing incentives we’ve given out, it would equate to over a
                half a million dollars.&quot;
              </p>
            </div>
          </div>
          <p className="sales-proof-detail">
            YES! When your buyers enjoy their amazing vacation experiences,
            they&apos;ll want to tell EVERYONE that you gave it to them! And that
            translates to tons of visibility, glowing referrals, and new buyers{" "}
            <strong>
              <i>you don&apos;t have to pay for!</i>
            </strong>
          </p>
          <p className="sales-proof-detail">
            Remember, it&apos;s not just about making your core offer irresistible
            - giving away free trips lets you{" "}
            <strong>incentivize upsells, referrals, and repeat business...</strong>{" "}
            letting you dramatically decrease your advertising expenses.
          </p>
          <div className="sales-proof-divider" aria-hidden="true">
            {Array.from({ length: 30 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="testimonial-section section-space"
        id="member-stories"
      >
        <div className="content-width">
          <div className="testimonial-heading">
            <p>Can You See Why So Many People Just Like You Are</p>
            <h2>Exploding Their Sales &amp; Marketing with Marketing Boost</h2>
          </div>
          <div className="testimonials-grid">
            {memberStories.map((story) => (
              <article className="testimonial-card" key={story.name}>
                <blockquote>{story.quote}</blockquote>
                <div className="testimonial-video">
                  <iframe
                    src={`https://fast.wistia.net/embed/iframe/${story.videoId}?seo=false&videoFoam=true`}
                    title={`${story.name} testimonial`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <h3 className="testimonial-name">{story.name}</h3>
                <p className="testimonial-role">{story.role}</p>
              </article>
            ))}
          </div>
          <div className="testimonial-cta">
            <TrialLink className="testimonial-trial-button">
              START MY 7-DAY FREE TRIAL NOW
            </TrialLink>
          </div>
        </div>
      </section>

      <section className="who-pays-section">
        <div className="who-pays-inner">
          <div className="who-pays-heading">
            <h2>So if I don&apos;t pay for these trips,</h2>
            <h3>who does?</h3>
          </div>
          <div className="who-pays-detail">
            <p className="who-pays-lead">
              <em>We do.</em>
            </p>
            <p>
              We work closely with industry insiders who have information not
              available to the public about unsold premium accommodations at
              must-see destinations in the U.S. and beyond. We work with
              providers to secure these unsold rooms as exceptionally low
              prices.
            </p>
            <p>
              Why? Because property owners know they can recoup their costs with
              in-house dining and room service, casino earnings, spa services,
              valet parking, and other add-ons.
            </p>
            <p className="who-pays-revenue">
              That&apos;s income they can&apos;t earn if a room is sitting empty.
              <strong>
                So they&apos;re happy to practically give away their unsold rooms
                just to bring in revenue!
              </strong>
            </p>
            <p className="who-pays-highlight">
              See, in the luxury travel industry, profits don&apos;t come from
              nightly rates.
            </p>
            <p>
              What that means for you is that you can give your new buyers and
              best clients unforgettable vacation experiences that they&apos;ll
              LOVE you for.
            </p>
            <p>
              And that means loyal buyers, referral partners, and brand
              champions for life.
            </p>
            <p className="who-pays-emphasis">
              All for an investment that&apos;s probably less than you gave away
              in discounts last month.
            </p>
          </div>
          <img
            className="who-pays-graphic"
            src="/assets/img_HotelOccupancy.png"
            alt="Hotels have 70% occupancy on average, while MarketingBoost members fill the other 30% of unsold rooms"
            width="1147"
            height="626"
          />
        </div>
      </section>

      <section className="post-travel-cta">
        <div className="post-travel-cta-inner">
          <p>It&apos;s that simple.</p>
          <h2>Try MarketingBoost for 7-Days - FREE!</h2>
          <a
            className="post-travel-cta-button"
            href={`${marketingBoost}/plan_listing`}
          >
            YES, I WANT TO BOOST MY SALES!
          </a>
        </div>
      </section>

      <section className="audience-section" id="ideal-for">
        <div className="audience-panel">
          <div className="audience-container">
            <div className="audience-row">
              <div className="audience-image-column">
                <img
                  src="/assets/img_Who.jpg"
                  alt="Business team meeting in a modern office"
                  width="708"
                  height="756"
                />
              </div>
              <div className="audience-copy-column">
                <h2>Who is Marketing Boost for?</h2>
                <p>
                  We partner with business owners and independent sales
                  professionals in a wide range of industries. Real estate and
                  insurance agents, coaches, marketing agencies, authors, travel
                  agents, and many others delight their prospects, customers,
                  and staff members with our high-value vacation certificates
                  every day.
                </p>
                <p>
                  MarketingBoost is NOT a good fit for you if you don&apos;t
                  already have a business that is generating reasonably
                  consistent income, though. The platform is about helping you
                  make more sales and grow customer and employee loyalty - it&apos;s
                  NOT a standalone business opportunity.
                </p>
              </div>
            </div>
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
  );
}

export default HomePage;
