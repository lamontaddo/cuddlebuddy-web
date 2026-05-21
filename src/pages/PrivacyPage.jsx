const effectiveDate = 'March 29, 2026';

const legalPageStyle = {
  width: '100%',
  maxWidth: 900,
  margin: '0 auto',
  padding: '96px 20px 64px',
  boxSizing: 'border-box',
};

const sectionStyle = {
  width: '100%',
  boxSizing: 'border-box',
};

const copyStyle = {
  maxWidth: 760,
  overflowWrap: 'anywhere',
  wordBreak: 'normal',
};

function PolicySection({ title, children }) {
  return (
    <section className="policy-section" style={sectionStyle}>
      <h2>{title}</h2>
      <div className="policy-copy" style={copyStyle}>{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="legal-page" style={legalPageStyle}>
      <div className="legal-hero" style={sectionStyle}>
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <p>
          Effective date: {effectiveDate}. This policy explains how CuddleBuddy collects,
          uses, and protects user information.
        </p>
      </div>

      <PolicySection title="1. Information we collect">
        <p>
          We may collect account information such as your name, email address, profile
          photo, preferences, and login-related data.
        </p>
        <p>
          We may also collect profile details, booking history, session information,
          messages between users, reviews, ratings, issue reports, and identity
          verification information when provided.
        </p>
        <p>
          We may process location-related data to help show nearby providers and support
          booking logistics. Payments and payouts may be processed through PayPal or
          other third-party payment providers. We do not store full payment account,
          card, or PayPal login details on our servers.
        </p>
      </PolicySection>

      <PolicySection title="2. How we use information">
        <p>
          We use information to create accounts, support bookings, process payments,
          manage payouts, send notifications, investigate disputes, maintain safety,
          provide support, improve the service, and comply with legal obligations.
        </p>
      </PolicySection>

      <PolicySection title="3. How information may be shared">
        <p>
          We may share limited information with other users when needed for confirmed
          bookings, with PayPal or other payment providers for payment processing and
          payouts, with vendors that help operate the service, or when required by law
          or to protect rights and safety.
        </p>
        <p>We do not sell personal information.</p>
      </PolicySection>

      <PolicySection title="4. Account deletion">
        <p>
          Users can request account deletion from within the app. Deleting an account may
          remove profile visibility and cancel future bookings. Some transaction, safety,
          dispute, or compliance records may be retained where legally required.
        </p>
      </PolicySection>

      <PolicySection title="5. Data security">
        <p>
          We use reasonable administrative, technical, and organizational measures to help
          protect personal information. No method of storage or transmission is completely
          secure, so we cannot guarantee absolute security.
        </p>
      </PolicySection>

      <PolicySection title="6. Age requirement">
        <p>
          CuddleBuddy is intended only for adults age 18 and older. We do not knowingly
          collect personal information from children.
        </p>
      </PolicySection>

      <PolicySection title="7. Your choices">
        <p>
          You may update account information, manage certain profile details, or request
          account deletion. Contact us if you have privacy questions or requests.
        </p>
      </PolicySection>

      <PolicySection title="8. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. Material changes may be
          communicated through the app, website, or other appropriate channels.
        </p>
      </PolicySection>

      <PolicySection title="9. Contact">
        <p>monTech Enterprise LLC</p>
        <p>Baltimore, Maryland, USA</p>
        <p>Email: montech.enterprise.company@gmail.com</p>
        <p>Website: cuddlebuddy.me</p>
      </PolicySection>
    </div>
  );
}
