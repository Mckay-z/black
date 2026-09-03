/**
 * Sits between the wordmark and the login form.
 *
 * Payload's stock login is an unlabelled email/password pair on a blank page —
 * it gives someone arriving at the URL no indication of what they are signing
 * in to. This names the tool and sets expectations.
 */
export function BeforeLogin() {
  return (
    <div className="admin-welcome">
      <h1 className="admin-welcome__title">Content Dashboard</h1>
      <p className="admin-welcome__subtitle">
        Sign in to manage the website — events, stories, people and photos.
      </p>
    </div>
  );
}
