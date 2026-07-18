import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/account-deletion")({
  component: AccountDeletionPage,
});

function AccountDeletionPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO:
    // Call your FastAPI API here

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-20">

        <h1 className="text-4xl font-bold mb-3">
          Delete Your LAAXX KART Account
        </h1>

        <p className="text-muted-foreground mb-10">
          You can request permanent deletion of your LAAXX KART account by
          filling out the form below.
        </p>

        {submitted ? (
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-6">
            <h2 className="text-xl font-semibold">
              Request Submitted
            </h2>

            <p className="mt-3 text-muted-foreground">
              Thank you. Your account deletion request has been received.
              We will process it within 7 working days.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl border border-border p-8 bg-card"
          >
            <div>
              <label className="block mb-2 font-medium">
                Mobile Number *
              </label>

              <input
                required
                type="text"
                className="w-full rounded-lg border border-border bg-background p-3"
                placeholder="Enter your mobile number"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email (Optional)
              </label>

              <input
                type="email"
                className="w-full rounded-lg border border-border bg-background p-3"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Reason (Optional)
              </label>

              <textarea
                rows={5}
                className="w-full rounded-lg border border-border bg-background p-3"
                placeholder="Reason for deleting your account"
              />
            </div>

            <button
              className="rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold"
            >
              Submit Request
            </button>
          </form>
        )}

        <div className="mt-12 space-y-8">

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              What happens after submitting?
            </h2>

            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Your account will be permanently deleted.</li>
              <li>Your saved addresses will be removed.</li>
              <li>Your profile information will be deleted.</li>
              <li>The deletion process usually takes up to 7 working days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data we may retain
            </h2>

            <p className="text-muted-foreground">
              Certain information such as invoices, transaction history,
              and records required for legal, accounting, taxation or fraud
              prevention purposes may be retained for the period required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Need Help?
            </h2>

            <div className="space-y-2 text-muted-foreground">
              <p>Email: support@laaxxkart.shop</p>
              <p>Phone: +91 8904880530</p>
              <p>Website: https://laaxxkart.shop</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}