const guidePageStyle = {
    width: "100%",
    maxWidth: 900,
    margin: "0 auto",
    padding: "96px 20px 64px",
    boxSizing: "border-box",
  };
  
  const sectionStyle = {
    width: "100%",
    boxSizing: "border-box",
  };
  
  const copyStyle = {
    maxWidth: 760,
    overflowWrap: "anywhere",
    wordBreak: "normal",
  };
  
  function GuideSection({ title, children }) {
    return (
      <section className="policy-section" style={sectionStyle}>
        <h2>{title}</h2>
        <div className="policy-copy" style={copyStyle}>{children}</div>
      </section>
    );
  }
  
  export default function CuddlerOnboardingPage() {
    return (
      <div className="legal-page" style={guidePageStyle}>
        <div className="legal-hero" style={sectionStyle}>
          <span className="eyebrow">Cuddler Guide</span>
          <h1>How to Get Started as a Cuddler</h1>
          <p>
            This guide walks you through creating your cuddler profile, setting up
            payouts, managing availability, accepting bookings, and withdrawing
            eligible earnings.
          </p>
        </div>
  
        <GuideSection title="1. Create your cuddler profile">
          <p>
            Start by creating your cuddler profile inside the app. Add your bio,
            session types, price, general location, profile photos, comfort
            preferences, and boundaries.
          </p>
          <p>
            Your profile helps clients understand who you are, what kind of
            supportive companionship you offer, and whether you may be a good fit
            for their needs.
          </p>
        </GuideSection>
  
        <GuideSection title="2. Verify your identity">
          <p>
            Cuddlers may be asked to upload identity verification materials such as
            a government ID and selfie. This helps CuddleBuddy build trust and keep
            the platform safer for both clients and cuddlers.
          </p>
          <p>
            Once submitted, your verification will be reviewed. While it is
            pending, you may not be able to submit another verification request
            until the review is complete.
          </p>
        </GuideSection>
  
        <GuideSection title="3. Set your availability">
          <p>
            Use Availability Settings to choose the days and times you are open for
            bookings. Keeping your availability accurate helps prevent scheduling
            conflicts and gives clients a better booking experience.
          </p>
        </GuideSection>
  
        <GuideSection title="4. Add your PayPal payout email">
          <p>
            After your cuddler profile is created, add your PayPal payout email
            from the Cuddler Tools section of your profile screen.
          </p>
          <p>
            This email is used so eligible earnings can be sent to you through
            PayPal withdrawals.
          </p>
        </GuideSection>
  
        <GuideSection title="5. Accept bookings">
          <p>
            When a client requests a session, you can review the booking details
            before accepting or declining. Once a booking is accepted and paid, the
            in-app chat opens so you and the client can coordinate the session.
          </p>
        </GuideSection>
  
        <GuideSection title="6. Follow boundaries and safety guidelines">
          <p>
            CuddleBuddy is built around emotional support, consent, respect, and
            clear boundaries. Always follow the platform safety guidelines and only
            participate in sessions that feel safe and appropriate.
          </p>
          <p>
            If something feels wrong, unsafe, or outside your boundaries, do not
            continue the session. Report the issue through the app.
          </p>
        </GuideSection>
  
        <GuideSection title="7. Complete the session">
          <p>
            After the session is finished, follow the in-app flow to complete the
            booking. Completion helps the platform determine payout eligibility and
            keeps the booking record accurate.
          </p>
        </GuideSection>
  
        <GuideSection title="8. Withdraw eligible earnings">
          <p>
            Once a session is completed and your earnings become eligible, you can
            withdraw available funds from the Cuddler Dashboard.
          </p>
          <p>
            Some bookings may require review before payout, especially if there is
            a cancellation, no-show, early ending, dispute, or reported issue.
          </p>
        </GuideSection>
  
        <GuideSection title="9. Need help?">
          <p>
            If you have questions about your profile, verification, availability,
            payouts, or a booking, contact CuddleBuddy support through the app or
            website.
          </p>
        </GuideSection>
      </div>
    );
  }