import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/salesman-delivery-privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Laaxx Kart Partner" },
      {
        name: "description",
        content:
          "Privacy policy for Laaxx Kart Partner, including foreground and background location data collection and use.",
      },
    ],
  }),
  component: SalesmanDeliveryPrivacy,
});

function SalesmanDeliveryPrivacy() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-3xl px-4 pt-32 pb-20">
        <Link to="/" className="text-sm font-semibold">
          ← Back to home
        </Link>

        <h1 className="text-4xl font-extrabold mt-4">Privacy Policy</h1>

        <p className="mt-2 text-sm text-muted-foreground">Laaxx Kart Partner</p>

        <p className="mt-2 text-sm text-muted-foreground">Last updated: November 12, 2026</p>

        <div className="mt-8 space-y-6 leading-relaxed">
          <p>
            LAAXX Consulting Pvt Ltd operates the Laaxx Kart Partner app (package name:
            com.cmd.partner), which is used by authorised salespeople and delivery personnel to
            manage assigned orders, sales visits, deliveries, and related field operations. This
            policy explains how the app collects, uses, stores, and shares personal information,
            including foreground and background location data.
          </p>

          <h2 className="text-2xl font-bold">1. Information We Collect</h2>
          <p>
            Depending on the features used, we may collect account details, name, phone number,
            assigned orders, sales visit information, delivery status, device information, and
            precise location data.
          </p>

          <h2 className="text-2xl font-bold">2. Foreground Location</h2>
          <p>
            When location permission is granted, the app may access precise location while the app
            is in use to support assigned sales visits, delivery navigation, address verification,
            and delivery operations.
          </p>

          <h2 className="text-2xl font-bold">3. Background Location</h2>
          <p>
            Where enabled and permitted, the app may collect precise location while running in the
            background or when the app is not actively displayed. This supports authorised field
            operations, such as tracking assigned sales visits or delivery progress when required by
            the service.
          </p>
          <p>
            Background location is collected only for the operational features implemented in the
            app. It is not used for advertising.
          </p>

          <h2 className="text-2xl font-bold">4. How We Use Location</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Support assigned sales visits and deliveries.</li>
            <li>Help authorised staff monitor work and delivery progress.</li>
            <li>Verify relevant visits, addresses, and delivery activities.</li>
            <li>Resolve operational issues and delivery disputes.</li>
          </ul>

          <h2 className="text-2xl font-bold">5. Data Sharing</h2>
          <p>
            Relevant information, including location where necessary, may be transmitted to our
            backend and made available to authorised company personnel for sales, delivery, and
            operational management. Information may also be processed by mapping, hosting, and
            infrastructure providers when required for app functionality.
          </p>
          <p>We do not sell personal location data.</p>

          <h2 className="text-2xl font-bold">6. Data Security and Retention</h2>
          <p>
            We use reasonable safeguards to protect personal information. Data is retained only as
            long as necessary for the purposes described in this policy and applicable legal or
            business requirements, and is then deleted or anonymised where appropriate.
          </p>

          <h2 className="text-2xl font-bold">7. Permissions and Choices</h2>
          <p>
            Users can manage location permissions through their device settings. Disabling location
            access may affect sales or delivery features that depend on location. The app explains
            the purpose of background location access before requesting the relevant permission.
          </p>

          <h2 className="text-2xl font-bold">8. Contact Us</h2>
          <p>
            LAAXX Consulting Pvt Ltd
            <br />
            34, KPV Complex, 1st Floor, Kilari Road, Chickpet,
            <br />
            Bangalore South, Karnataka, India - 560053
            <br />
            Mobile: +91 8904880530
            <br />
            CIN: U70200KA2025PTC208853
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
