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

function RefundSection({ title, children }) {
  return (
    <section className="policy-section" style={sectionStyle}>
      <h2>{title}</h2>
      <div className="policy-copy" style={copyStyle}>{children}</div>
    </section>
  );
}

export default function RefundsPage() {
  return (
    <div className="legal-page" style={legalPageStyle}>
      <div className="legal-hero" style={sectionStyle}>
        <span className="eyebrow">Legal</span>
        <h1>Refund Policy</h1>
        <p>
          Effective date: {effectiveDate}. This policy explains how refunds, cancellations,
          no-shows, disputes, and manual reviews may be handled on CuddleBuddy.
        </p>
      </div>

      <RefundSection title="1. General refund approach">
        <p>
          CuddleBuddy is designed to support fair outcomes for both clients and providers.
          Refunds may depend on the booking status, payment status, cancellation timing,
          session outcome, issue reports, and admin review.
        </p>
        <p>
          Payments and refunds may be processed through PayPal or another supported
          payment provider. Payment provider rules, processing times, and limitations may
          also apply.
        </p>
      </RefundSection>

      <RefundSection title="2. Cancellations before a session">
        <p>
          If a booking is cancelled before the session is completed, CuddleBuddy may issue
          a refund when payment has been captured and the booking is eligible for refund
          under the platform’s cancellation and safety rules.
        </p>
        <p>
          If no payment was captured, there may be no refund to process.
        </p>
      </RefundSection>

      <RefundSection title="3. Declined booking requests">
        <p>
          If a provider declines a paid booking request, the client may be eligible for a
          refund when payment was captured. If the booking was not paid, no refund is
          required.
        </p>
      </RefundSection>

      <RefundSection title="4. Completed sessions">
        <p>
          Completed sessions are generally not refundable unless there is a valid safety
          issue, dispute, no-show concern, early ending, boundary concern, or other issue
          that requires admin review.
        </p>
      </RefundSection>

      <RefundSection title="5. No-shows and early endings">
        <p>
          If a client or provider does not show up, or if a session ends early, CuddleBuddy
          may review the booking record, arrival status, session status, messages, issue
          reports, and other available information before deciding whether to refund the
          client, release payout, hold payout, or take no action.
        </p>
      </RefundSection>

      <RefundSection title="6. Reported issues and manual review">
        <p>
          When an issue is reported, the booking may be placed under manual review. During
          review, payouts, refunds, chat, cancellation, or other session actions may be held
          or limited while the admin team reviews what happened.
        </p>
        <p>
          Admin decisions may include refunding the client, releasing payout to the
          provider, resolving with no change, or taking another action allowed by the
          platform rules.
        </p>
      </RefundSection>

      <RefundSection title="7. Refund timing">
        <p>
          Approved refunds may take time to appear depending on PayPal, the payment
          provider, the user’s bank, card issuer, or account settings. CuddleBuddy cannot
          guarantee exact processing times once a refund has been submitted to the payment
          provider.
        </p>
      </RefundSection>

      <RefundSection title="8. Provider payouts">
        <p>
          Provider payouts may be delayed or held for admin review, safety concerns,
          disputes, refund handling, payment provider requirements, or platform compliance.
          If a payout request requires manual processing, providers should allow 24–48
          hours for admin review when applicable.
        </p>
      </RefundSection>

      <RefundSection title="9. Abuse of refunds or disputes">
        <p>
          Users who abuse refunds, submit false claims, misuse dispute tools, or violate
          platform rules may have their account restricted, suspended, or removed.
        </p>
      </RefundSection>

      <RefundSection title="10. Contact">
        <p>monTech Enterprise LLC</p>
        <p>Baltimore, Maryland, USA</p>
        <p>Email: montech.enterprise.company@gmail.com</p>
        <p>Website: cuddlebuddy.me</p>
      </RefundSection>
    </div>
  );
}