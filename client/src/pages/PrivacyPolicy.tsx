import Footer from "@/components/Footer/Footer";
import { Card } from "@nextui-org/react";
import MDEditor from "@uiw/react-md-editor";

const privacyText = `
### Introduction
Welcome to zkApp.store! This Privacy Policy outlines how we collect, use, and protect your information in compliance with the General Data Protection Regulation (GDPR). We are committed to safeguarding your privacy.

### Data Controller
zkApp.store operates as the data controller for the purposes of GDPR. Our contact information is provided at the end of this policy.

### Data Collection
We collect email addresses for essential purposes like app login and transactional communications. Additionally, basic tracking through Google Analytics helps us understand the number of visitors.

### Legal Basis for Processing
The legal basis for processing your data is your explicit consent for specific purposes and the legitimate interests pursued by zkApp.store.

### Data Usage
Your email addresses are solely used for app-related functionalities and transactional communications, ensuring a seamless experience.

### Third-Party Disclosure
Occasionally, we may use third-party services, such as Google Analytics, to enhance our services. Any third-party involvement will be transparently communicated to our users.

### User Rights
In accordance with GDPR, you have the right to access, rectify, and erase your personal data. You can also restrict or object to its processing and request data portability.

### Security Measures
We implement stringent security measures to protect your data, ensuring its confidentiality and integrity.

### Data Retention
We retain user email addresses for a specific duration, aligning with business needs and legal requirements. The criteria for determining this duration are outlined in our Data Retention Policy, available upon request.

### Communication Preferences
You have control over your communication preferences, allowing you to opt in or out of promotional emails.

### Updates to the Privacy Policy
This privacy policy may be updated to reflect any changes in our practices. Users will be notified promptly in compliance with GDPR requirements.

### Contact Information
For privacy concerns or data-related inquiries, reach out to our Data Protection Officer at privacy [at} westake.club.

### Final Review
This privacy policy is crafted in clear and understandable language, prioritizing accessibility for all users and strictly adhering to GDPR regulations.
`;

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col gap-4 my-11 md:mx-8">
      <h1 className="text-5xl text-white font-bold my-5">
        {"> Privacy policy for zkApp.store"}
      </h1>
      <Card className="flex flex-col gap-4 p-4">
        <MDEditor.Markdown
          source={privacyText}
          style={{ whiteSpace: "pre-wrap", background: "none", color: "white" }}
        />
      </Card>
      <Footer />
    </div>
  );
}
