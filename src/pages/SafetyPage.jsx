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

function SafetySection({ title, children }) {
  return (
    <section className="policy-section" style={sectionStyle}>
      <h2>{title}</h2>
      <div className="policy-copy" style={copyStyle}>{children}</div>
    </section>
  );
}

export default function SafetyPage() {
  return (
    <div className="legal-page" style={legalPageStyle}>
      <div className="legal-hero" style={sectionStyle}>
        <span className="eyebrow">Safety</span>
        <h1>Safety Guidelines</h1>
        <p>
          CuddleBuddy is built for safe, respectful, platonic companionship. These
          guidelines help clients and providers understand what is expected before,
          during, and after every session.
        </p>
      </div>

      <SafetySection title="1. Platonic companionship only">
        <p>
          CuddleBuddy is strictly for non-sexual, respectful, platonic companionship.
          Sexual requests, sexual conduct, harassment, coercion, or pressure are not
          allowed.
        </p>
        <p>
          Either person may end a session if boundaries are crossed or if they feel
          uncomfortable for any reason.
        </p>
      </SafetySection>

      <SafetySection title="2. Meet in safe, agreed-upon locations">
        <p>
          Users should only meet at the location agreed to in the booking details.
          Public meetup locations are encouraged, especially for first sessions.
        </p>
        <p>
          Do not change the meeting location at the last minute unless both people
          clearly agree and the new location feels safe.
        </p>
      </SafetySection>

      <SafetySection title="3. Confirm arrival and session status in the app">
        <p>
          Use the in-app session tools to mark arrival, start the session, end the
          session, and report any issues. These actions help create a clear record for
          safety, support, dispute review, refunds, and payouts.
        </p>
      </SafetySection>

      <SafetySection title="4. Respect boundaries at all times">
        <p>
          Consent can be changed or withdrawn at any time. If someone says stop, slow
          down, no, or expresses discomfort, the other person must respect that
          immediately.
        </p>
        <p>
          Providers and clients should communicate clearly about comfort level,
          boundaries, session expectations, and any concerns before continuing.
        </p>
      </SafetySection>

      <SafetySection title="5. Keep communication on platform when possible">
        <p>
          In-app chat helps CuddleBuddy review safety concerns, booking details, and
          disputes. Avoid moving conversations off-platform before trust is established.
        </p>
        <p>
          Never share sensitive personal information unless necessary and only when you
          feel comfortable doing so.
        </p>
      </SafetySection>

      <SafetySection title="6. Report issues immediately">
        <p>
          If a session feels unsafe, ends too early, involves a no-show, includes a
          boundary concern, or does not match the booking, report the issue through the
          app as soon as possible.
        </p>
        <p>
          Reported bookings may be placed under admin review. During review, payouts,
          refunds, chat, cancellation, or session actions may be held or limited while
          the admin team reviews what happened.
        </p>
      </SafetySection>

      <SafetySection title="7. Payments, refunds, and payouts">
        <p>
          Payments and payouts may be processed through PayPal or another supported
          payment provider. Refunds and payouts may depend on booking status, payment
          status, session outcome, no-show status, cancellation timing, and admin review.
        </p>
        <p>
          If a payout request requires manual review, providers should allow 24–48 hours
          for admin processing when applicable.
        </p>
      </SafetySection>

      <SafetySection title="8. Emergency situations">
        <p>
          CuddleBuddy is not an emergency service. If you are in immediate danger or
          need urgent help, contact local emergency services right away.
        </p>
      </SafetySection>

      <SafetySection title="9. Community expectations">
        <p>
          Treat every person with dignity, patience, and respect. Discrimination,
          threats, intimidation, exploitation, intoxicated behavior, stalking, or abusive
          conduct may result in account restriction or removal from the platform.
        </p>
      </SafetySection>

      <SafetySection title="10. Contact">
        <p>monTech Enterprise LLC</p>
        <p>Baltimore, Maryland, USA</p>
        <p>Email: montech.enterprise.company@gmail.com</p>
        <p>Website: cuddlebuddy.me</p>
      </SafetySection>
    </div>
  );
}