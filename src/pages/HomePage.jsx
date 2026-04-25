import React from "react";
import FooterSection from "../components/FooterSection";
import Button from "../components/ui/Button";

const paths = {
  dealership: {
    id: "dealership",
    label: "Used Car Dealerships",
    shortLabel: "Dealerships",
    symbol: "AUTO",
    eyebrow: "Dealer workflow automation",
    heroTitle:
      "Connect your DMS to auctions, lenders, inventory tools, and vendor websites.",
    heroText:
      "WebBridge gives used car dealerships a dedicated work browser that turns disconnected portals into faster, cleaner, automated workflows.",
    cta: "View Dealership Path",
    pain:
      "Stop retyping vehicle, customer, and finance data across dealership websites.",
    outcome:
      "Move auction purchases, credit applications, inventory details, photos, and vendor data with fewer clicks.",
    examples: [
      "Auction platform → Inventory workflow",
      "Credit app → Lender portal",
      "Vehicle page → DMS or listing tool",
      "Vendor portal → Dealership operations",
    ],
    cards: [
      [
        "01",
        "Auction-to-inventory",
        "Move newly purchased vehicles from browser-based auction platforms into inventory workflows.",
      ],
      [
        "02",
        "Credit app transfer",
        "Push customer details into lender portals with less duplicate typing.",
      ],
      [
        "03",
        "Vehicle data extraction",
        "Extract VINs, photos, descriptions, and listing information from webpages.",
      ],
    ],
  },
  business: {
    id: "business",
    label: "General Business + Vendor Automations",
    shortLabel: "Business Platform",
    symbol: "BIZ",
    eyebrow: "Platform-to-vendor automation",
    heroTitle:
      "Connect your business platform to QuickBooks, vendor portals, and third-party websites.",
    heroText:
      "WebBridge helps businesses automate data movement between management systems, QuickBooks, vendor resources, client profiles, and product pages.",
    cta: "View Business Path",
    pain:
      "Stop manually moving the same information between accounting, vendor, and business platforms.",
    outcome:
      "Connect QuickBooks workflows, vendor portals, product pages, client records, and third-party resources.",
    examples: [
      "Business platform → QuickBooks",
      "Vendor website → Product workflow",
      "Client profile → Third-party portal",
      "Web resource → Internal process",
    ],
    cards: [
      [
        "01",
        "QuickBooks workflows",
        "Bridge business management sites to QuickBooks-related accounting and back-office workflows.",
      ],
      [
        "02",
        "Vendor portal automation",
        "Move information between core systems and third-party vendor websites.",
      ],
      [
        "03",
        "Client/profile transfer",
        "Transfer customer, client, contact, or profile data between non-integrated websites.",
      ],
    ],
  },
};

const benefits = [
  "Eliminates endless copy and paste",
  "Eliminates redundant data entry",
  "Eliminates typos and omissions",
  "Automates repetitive tasks",
  "Streamlines workflows",
  "Increases productivity",
  "Reduces frustration",
  "Saves valuable time",
];

const overviewCards = [
  [
    "01",
    "Organize work websites",
    "Keep business websites in their own focused browser window.",
  ],
  [
    "02",
    "Connect web resources",
    "Connect data from other websites to your active workflow.",
  ],
  [
    "03",
    "Automate routines",
    "Automate frequent tasks from any site or between sites.",
  ],
  [
    "04",
    "Extract page data",
    "Summarize pages and extract inventory, contacts, photos, product details, and more.",
  ],
];

const Badge = ({ children }) => (
  <span className="inline-flex rounded-full border border-[#f49f1c]/30 bg-[#f49f1c]/10 px-4 py-2 text-sm text-[#ffd08a]">
    {children}
  </span>
);

const NumberCard = ({ number, title, text }) => (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/10 sm:p-6">
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f49f1c] text-sm font-black text-[#111b20] sm:mb-5 sm:h-12 sm:w-12">
      {number}
    </div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
  </div>
);

const HomePage = ({ onContactClick }) => {
  const [selectedPath, setSelectedPath] = React.useState("dealership");
  const current = paths[selectedPath];
  const other =
    selectedPath === "dealership" ? paths.business : paths.dealership;

  const handleContactClick = () => {
    if (typeof onContactClick === "function") {
      onContactClick();
    }
  };

  return (
    <>
      <main className="min-h-screen bg-[#0d1418] text-white">
        <section
          id="hero"
          className="relative scroll-mt-24 overflow-hidden border-b border-white/10 pt-[4.5rem] sm:pt-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(244,159,28,0.22),transparent_26%),radial-gradient(circle_at_86%_18%,rgba(255,255,255,0.10),transparent_24%),linear-gradient(135deg,#101c22_0%,#0d1418_54%,#15100a_100%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-10">
            <div className="flex flex-col gap-4 rounded-[24px] border border-white/10 bg-[#101a20]/80 px-4 py-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between lg:px-5">
              <p className="text-sm text-white/62">
                The World's 1st B2B Browser
              </p>
              <div className="flex flex-wrap gap-2 rounded-[22px] border border-white/10 bg-white/[0.04] p-1 sm:rounded-full">
                {Object.values(paths).map((path) => (
                  <Button
                    key={path.id}
                    variant={selectedPath === path.id ? "primary" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedPath(path.id)}
                    className="rounded-full"
                  >
                    {path.shortLabel}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 py-6 sm:gap-6 sm:py-8 lg:grid-cols-2 lg:py-10">
              {Object.values(paths).map((path) => {
                const active = selectedPath === path.id;

                return (
                  <button
                    key={path.id}
                    type="button"
                    onClick={() => setSelectedPath(path.id)}
                    className={`group min-h-[280px] overflow-hidden rounded-[28px] border p-5 text-left transition-all duration-300 sm:rounded-[36px] sm:p-7 md:min-h-[320px] md:p-8 ${
                      active
                        ? "scale-[1.01] border-[#f49f1c]/70 bg-[#f49f1c]/15 shadow-2xl shadow-[#f49f1c]/15"
                        : "border-white/10 bg-white/[0.035] hover:border-white/25 hover:bg-white/[0.055]"
                    }`}
                  >
                    <div className="mb-6 flex items-start justify-between gap-4 sm:mb-8 sm:gap-6">
                      <div
                        className={`rounded-[24px] px-4 py-3 text-sm font-black tracking-[0.2em] ${
                          active
                            ? "bg-[#f49f1c] text-[#111b20]"
                            : "bg-white/10 text-white/70"
                        }`}
                      >
                        {path.symbol}
                      </div>
                      <div className="text-sm text-white/50">Select path</div>
                    </div>
                    <div className="max-w-xl">
                      <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#f49f1c]">
                        {path.eyebrow}
                      </div>
                      <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                        {path.heroTitle}
                      </h1>
                      <p className="mt-4 text-base leading-7 text-white/72 sm:mt-5 sm:leading-8">
                        {path.heroText}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#ffd08a]">
                      {path.cta}
                      <span className="text-xl" aria-hidden="true">→</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto grid max-w-7xl scroll-mt-24 gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-10 lg:py-16"
        >
          <div key={`${selectedPath}-copy`} className="wb-view-enter">
            <Badge>{current.eyebrow}</Badge>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {current.pain}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              {current.outcome}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button size="lg" onClick={handleContactClick} className="w-full sm:w-auto">
                Request a WebBridge Demo
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setSelectedPath(other.id)}
                className="w-full sm:w-auto"
              >
                Switch to {other.shortLabel}
              </Button>
            </div>
          </div>

          <div key={`${selectedPath}-workflow`} className="wb-view-enter rounded-[28px] border border-white/10 bg-[#121d22] p-4 shadow-2xl shadow-black/20 sm:rounded-[36px] sm:p-5">
            <div className="rounded-[24px] border border-[#f49f1c]/20 bg-[#0d1418] p-4 sm:rounded-[28px] sm:p-6">
              <div className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#f49f1c]">
                Example workflow routes
              </div>
              <div className="grid gap-4">
                {current.examples.map((example, index) => (
                  <div
                    key={example}
                    className="grid items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-[48px_1fr_48px]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f49f1c] text-sm font-black text-[#111b20]">
                      {index + 1}
                    </div>
                    <div className="text-base font-medium text-white/86">
                      {example}
                    </div>
                    <div
                      className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-[#ffd08a] sm:flex"
                      aria-hidden="true"
                    >
                      →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="tools"
          className="scroll-mt-24 border-y border-white/10 bg-white/[0.025]"
        >
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#f49f1c]">
                  What WebBridge does
                </div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  A dedicated work browser for universal automation and
                  integration.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/70">
                  Use your current browser for personal and miscellaneous
                  websites. Use WebBridge for work-related websites.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {overviewCards.map(([number, title, text]) => (
                  <NumberCard
                    key={title}
                    number={number}
                    title={title}
                    text={text}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
        >
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#f49f1c]">
              Selected path details
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Designed for {current.label.toLowerCase()}.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {current.cards.map(([number, title, text]) => (
              <NumberCard
                key={title}
                number={number}
                title={title}
                text={text}
              />
            ))}
          </div>
        </section>

        <section
          id="testimonials"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-12 sm:px-6 sm:pb-14 lg:px-10 lg:pb-16"
        >
          <div className="rounded-[30px] border border-[#f49f1c]/25 bg-[linear-gradient(135deg,rgba(244,159,28,0.20),rgba(244,159,28,0.06)_38%,rgba(255,255,255,0.04)_100%)] p-5 sm:rounded-[40px] sm:p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#ffd08a]">
                  Business impact
                </div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Less copy-paste. Less retyping. More connected work.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/78">
                  WebBridge connects any two websites in any industry for
                  automated and streamlined workflows, whether you start with
                  dealerships or general business platform-to-vendor
                  automations.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-2xl border border-white/10 bg-[#101a20]/80 px-4 py-4 text-sm text-white/82"
                  >
                    <span className="mr-2 text-[#f49f1c]" aria-hidden="true">
                      ✓
                    </span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button size="lg" onClick={handleContactClick} className="w-full sm:w-auto">
                Start With {current.shortLabel}
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setSelectedPath(other.id)}
                className="w-full sm:w-auto"
              >
                Compare {other.shortLabel}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <div id="contact" className="scroll-mt-24">
        <FooterSection onContactUs={handleContactClick} />
      </div>
    </>
  );
};

export default HomePage;
