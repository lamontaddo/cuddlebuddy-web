const effectiveDate = 'March 29, 2026';

function TermsSection({ title, children }) {
  return (
    <section className="policy-section">
      <h2>{title}</h2>
      <div className="policy-copy">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <span className="eyebrow">Legal</span>
        <h1>Terms of Service</h1>
        <p>
          Effective date: {effectiveDate}. These terms govern access to and use of the
          CuddleBuddy website and app.
        </p>
      </div>

      <TermsSection title="1. Platform purpose">
        <p>
          CuddleBuddy provides a marketplace for platonic companionship and comfort-focused
          sessions. Users must follow all platform rules, safety expectations, and local
          laws.
        </p>
      </TermsSection>

      <TermsSection title="2. Eligibility">
        <p>
          You must be at least 18 years old to use CuddleBuddy. By using the platform,
          you represent that the information you provide is accurate and current.
        </p>
      </TermsSection>

      <TermsSection title="3. Accounts and conduct">
        <p>
          Users are responsible for account activity, profile accuracy, respectful conduct,
          and complying with booking, messaging, and safety rules. We may suspend or remove
          accounts that violate these terms.
        </p>
      </TermsSection>

      <TermsSection title="4. Bookings, payments, and payouts">
        <p>
          Clients may be charged in advance through Stripe. Payouts to providers may be
          delayed for review, safety checks, disputes, or refund handling. Platform fees may
          apply.
        </p>
      </TermsSection>

      <TermsSection title="5. Reports, disputes, and refunds">
        <p>
          CuddleBuddy may review reports, hold payouts, cancel bookings, issue refunds, or
          take other action when a dispute, safety concern, or platform rule violation is
          reported.
        </p>
      </TermsSection>

      <TermsSection title="6. No guarantee">
        <p>
          We do not guarantee availability of any provider, uninterrupted access, or that any
          user will obtain a specific result from the service.
        </p>
      </TermsSection>

      <TermsSection title="7. Limitation of liability">
        <p>
          To the fullest extent allowed by law, monTech Enterprise LLC is not liable for
          indirect, incidental, or consequential damages arising from use of the platform.
        </p>
      </TermsSection>

      <TermsSection title="8. Changes">
        <p>
          We may update these Terms from time to time. Continued use of the service after
          changes means you accept the updated Terms.
        </p>
      </TermsSection>

      <TermsSection title="9. Contact">
        <p>monTech Enterprise LLC</p>
        <p>montech.enterprise.company@gmail.com</p>
        <p>Baltimore, Maryland, USA</p>
      </TermsSection>
    </div>
  );
}
