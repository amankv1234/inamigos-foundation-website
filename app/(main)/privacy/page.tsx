export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-3xl mx-auto glass dark:glass-dark p-8 md:p-12 rounded-3xl">
        <h1 className="text-4xl font-extrabold mb-6">Privacy <span className="text-gradient">Policy</span></h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At InAmigos Foundation, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8">Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our programs, or when you participate in activities on the website.
          </p>
          <h2 className="text-xl font-bold text-foreground mt-8">How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <p>We do not sell, rent, or trade your personal information to third parties.</p>
        </div>
      </div>
    </div>
  )
}
