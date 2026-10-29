import { NavLink, Outlet } from 'react-router-dom'
import './SiteLayout.css'

const marketingBoost = 'https://marketingboost.com'

const topNavigation = [
  { label: 'Case Studies', href: `${marketingBoost}/case-studies` },
  {
    label: 'Destinations',
    href: `${marketingBoost}/marketing-incentive-vacation-destinations`,
  },
  { label: 'By Industry', href: `${marketingBoost}/industry` },
  {
    label: 'Facebook Group',
    href: 'https://www.facebook.com/groups/1988225651450719/',
  },
  { label: 'Pricing', href: `${marketingBoost}/plan_listing` },
  { label: 'FAQ', href: `${marketingBoost}/faq` },
  { label: 'Blogs', href: `${marketingBoost}/blogs` },
  { label: 'Member Login', href: 'https://members.advertisingboost.com/' },
]

const primaryNavigation = [
  { label: 'Features', href: `${marketingBoost}/features` },
  { label: 'Ideal For', href: `${marketingBoost}/idealfor` },
  { label: 'What Members Say', href: `${marketingBoost}/success-stories` },
  { label: 'Demo', href: `${marketingBoost}/demo` },
]

function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="utility-navigation" aria-label="More information">
          <div className="header-inner utility-inner">
            {topNavigation.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="primary-navigation">
          <div className="header-inner primary-inner">
            <NavLink className="brand-link" to="/" aria-label="MarketingBoost home">
              <img
                src="/assets/marketingboost-logo.png"
                alt="MarketingBoost"
                width="241"
                height="71"
              />
            </NavLink>
            <nav className="primary-links" aria-label="Main navigation">
              {primaryNavigation.map((item) => (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              className="trial-button trial-button-header"
              href={`${marketingBoost}/plan_listing`}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <NavLink className="footer-brand" to="/" aria-label="MarketingBoost home">
          <img
            src="/assets/marketingboost-logo.png"
            alt="MarketingBoost"
            width="241"
            height="71"
          />
        </NavLink>
        <nav className="footer-links" aria-label="Legal and company links">
          <a href={`${marketingBoost}/`}>Marketing Boost</a>
          <a href={`${marketingBoost}/promote-adboost`}>Affiliates</a>
          <a href={`${marketingBoost}/privacy_policy`}>Privacy Policy</a>
          <a href={`${marketingBoost}/gdpr_privacy_policy`}>GDPR Privacy Policy</a>
          <a href={`${marketingBoost}/earnings-disclaimer`}>Earnings Disclaimer</a>
          <a href={`${marketingBoost}/member_terms_of_service`}>
            Member Terms of Service
          </a>
          <a href={`${marketingBoost}/certificate_terms`}>Certificate Terms</a>
        </nav>
        <p className="footer-note">© MarketingBoost</p>
      </footer>
    </div>
  )
}

export default SiteLayout
