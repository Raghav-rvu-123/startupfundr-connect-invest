
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
            
            <div className="prose max-w-none">
              <p className="mb-4">Last Updated: April 4, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p className="mb-4">
                This Cookie Policy explains how StartupFundr ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website at www.startupfundr.com ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              <p className="mb-4">
                In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. What are cookies?</h2>
              <p className="mb-4">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p className="mb-4">
                Cookies set by the website owner (in this case, StartupFundr) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Why do we use cookies?</h2>
              <p className="mb-4">
                We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics and other purposes. This is described in more detail below.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Types of cookies we use</h2>
              <div className="mt-4 mb-8">
                <h3 className="text-xl font-semibold mb-3">Essential cookies</h3>
                <p className="mb-4">
                  These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the Website, you cannot refuse them without impacting how our Website functions.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Performance and functionality cookies</h3>
                <p className="mb-4">
                  These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Analytics and customization cookies</h3>
                <p className="mb-4">
                  These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Advertising cookies</h3>
                <p className="mb-4">
                  These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Social Media cookies</h3>
                <p className="mb-4">
                  These cookies are used to enable you to share pages and content that you find interesting on our Website through third party social networking and other websites. These cookies may also be used for advertising purposes.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. How can you control cookies?</h2>
              <p className="mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
              </p>
              <p className="mb-4">
                The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.
              </p>
              <p className="mb-4">
                The specific types of first and third party cookies served through our Website and the purposes they perform are described in the table below:
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. How often will we update this Cookie Policy?</h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p className="mb-4">
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Where can you get further information?</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies or other technologies, please email us at privacy@startupfundr.com or by post to:
              </p>
              <p className="mb-8">
                StartupFundr<br />
                1234 Innovation Way<br />
                San Francisco, CA 94103<br />
                United States<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
