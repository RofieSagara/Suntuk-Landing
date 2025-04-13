const ChildSafetyPolicy = () => {
    const appName = "Suntuk";
    const developerName = "Bukan Lantai Dasar"; // Replace with actual developer name
    const contactEmail = "hello@suntuk.xyz"; // Replace with your email

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                Child Safety & CSAE Policy for {appName}
            </h1>

            <div className="mb-8">
                <p className="text-lg text-gray-600 mb-4">
                    At {appName}, we are committed to protecting children from sexual abuse, exploitation (CSAE),
                    and harm. Our platform strictly prohibits any content or behavior that endangers minors.
                </p>
            </div>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Zero Tolerance for CSAE</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>{appName} does not allow:
                        <ul className="list-[circle] pl-6 mt-2 space-y-2">
                            <li>Child sexual abuse material (CSAM) or links to such content</li>
                            <li>Grooming, predatory behavior, or sexualization of minors</li>
                            <li>Sharing of sexually explicit content involving underage users</li>
                        </ul>
                    </li>
                    <li>Violations will result in <strong>immediate account termination</strong>, content removal,
                        and reporting to law enforcement and the <a
                            href="https://report.cybertip.org/"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer">
                            National Center for Missing & Exploited Children (NCMEC)
                        </a></li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Reporting CSAE</h2>
                <div className="space-y-3 text-gray-700">
                    <div>
                        <h3 className="font-medium mb-1">In-app reporting:</h3>
                        <p>Tap the "Report" button on profiles, posts, or messages to flag harmful content.</p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-1">Email:</h3>
                        <p>Send detailed reports to <a
                            href={`mailto:${contactEmail}`}
                            className="text-blue-600 hover:underline">
                            {contactEmail}
                        </a> with evidence (screenshots, timestamps).</p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-1">NCMEC:</h3>
                        <p>We forward all CSAE-related reports to <a
                            href="https://report.cybertip.org/"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer">
                            NCMEC's CyberTipline
                        </a> within 24 hours.</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Age Restrictions & Safety Measures</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Users must be <strong>18+</strong> to access dating features</li>
                    <li>We use automated tools and human moderation to detect and block CSAM</li>
                    <li>Accounts posing risks to minors are permanently banned</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Legal Compliance</h2>
                <p className="text-gray-700">
                    We comply with global child protection laws, including Indonesia's <strong>Child Protection Act (UU No. 35/2014)</strong>
                    and the <strong>U.S. PROTECT Act</strong>.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Contact Us</h2>
                <p className="text-gray-700">
                    For child safety concerns, email {' '}
                    <a
                        href={`mailto:${contactEmail}`}
                        className="text-blue-600 hover:underline">
                        {contactEmail}
                    </a>.
                </p>
            </section>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">
                    Developer: {developerName}<br />
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
};

export default ChildSafetyPolicy;