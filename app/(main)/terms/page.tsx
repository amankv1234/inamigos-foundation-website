export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-3xl mx-auto glass dark:glass-dark p-8 md:p-12 rounded-3xl">
        <h1 className="text-4xl font-extrabold mb-6">Terms of <span className="text-gradient">Service</span></h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Welcome to InAmigos Foundation. These Terms of Service outline the rules and regulations for the use of our website.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use InAmigos Foundation if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8">2. Donations</h2>
          <p>
            All donations made through our platform are final and non-refundable, except in the case of technical errors or fraud. We pledge to use all funds transparently as outlined in our Transparency reports.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8">3. User Conduct</h2>
          <p>
            You agree to use our website only for lawful purposes. You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.
          </p>
        </div>
      </div>
    </div>
  )
}
