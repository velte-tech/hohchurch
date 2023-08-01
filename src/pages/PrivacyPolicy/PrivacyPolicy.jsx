import React from "react";
import "./PrivacyPolicy.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollTopTop";

function PrivacyPolicy() {
  return (
    <>
      <section id="privacy_policy">
        <div className="privacy_wrapper container">
          <p className="p_head">
            Privacy and Policy for Highway of Holiness Church
          </p>
          <p>
            At the Highway of Holiness Church, we respect your privacy and are
            committed to protecting any personal information you provide to us.
            This privacy policy outlines how we collect, use, and protect your
            personal information. By using our services, you agree to the terms
            of this privacy policy.
          </p>
          <p className="p_sub_head">
            Collection and Use of Personal Information
          </p>
          <p>
            We may collect personal information from you when you voluntarily
            provide it to us, such as when you participate in our counseling
            programs, youth groups, or kids services, or when you make a
            donation to our church. This information may include your name,
            address, phone number, email address, and payment information. We
            use this information to provide you with the services you have
            requested, to communicate with you about your participation in our
            programs, and to process your donations.
          </p>
          <p className="p_sub_head">Protection of Personal Information</p>
          <p>
            We take reasonable steps to protect your personal information from
            unauthorized access, disclosure, or misuse. We use appropriate
            technical and organizational measures to safeguard your personal
            information, including secure storage, encryption, and access
            controls.
          </p>
          <p className="p_sub_head">Disclosure of Personal Information</p>
          <p>
            We will not disclose your personal information to third parties
            except as required by law or as necessary to provide the services
            you have requested. We may share your personal information with
            third-party service providers who assist us in providing our
            services, such as payment processors or email service providers.
            These service providers are required to protect your personal
            information and are prohibited from using it for any other purpose.
          </p>
          <p className="p_sub_head">Children's Privacy</p>
          <p>
            Our church programs and services are not intended for children under
            the age of 13. We do not knowingly collect personal information from
            children under the age of 13. If we become aware that we have
            inadvertently collected personal information from a child under the
            age of 13, we will promptly delete such information from our
            records. purpose.
          </p>
          <p className="p_sub_head">Donations</p>
          <p>
            We use reputable payment processors to process donations made to our
            church. Your payment information is encrypted and transmitted
            securely to the payment processor. We do not store your payment
            information on our servers.
          </p>
          <p className="p_sub_head">Changes to this Privacy Policy</p>
          <p>
            We may update this privacy policy from time to time. The latest
            version of this privacy policy will be available on our website. By
            continuing to use our services after any changes to this privacy
            policy, you agree to the updated terms.
          </p>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}

export default PrivacyPolicy;
