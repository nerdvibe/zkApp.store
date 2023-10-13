import { Card, CardBody } from "@nextui-org/react";
import MDEditor from "@uiw/react-md-editor";
import mock from "@/mocks/product-description.json";
import { useState } from "react";
import EditableCard from "../../../Card/EditableCard";
export default function Description() {
  // TODO: Add markdown
  return (
    // <Card className="w-full  bg-[#1D1932]">
    //   <CardBody>
    //     <div data-color-mode="dark">
    //       <MDEditor value={value} onChange={setValue} />
    //       <MDEditor.Markdown
    //         source={value}
    //         style={{ whiteSpace: "pre-wrap", background: "none" }}
    //       />
    //     </div>
    //     {/* <p>
    //       Welcome to CyberpunKYC, the cutting-edge zkApp designed to
    //       revolutionize the way Know Your Customer (KYC) processes are
    //       conducted. Built on the secure and scalable Mina Protocol, CyberpunKYC
    //       offers a decentralized and privacy-preserving solution that ensures
    //       user data integrity while complying with regulatory requirements. In
    //       an increasingly interconnected digital world, traditional KYC
    //       processes have become cumbersome, time-consuming, and vulnerable to
    //       data breaches. CyberpunKYC addresses these challenges head-on,
    //       combining the power of zero-knowledge proofs (zk-SNARKs) with the
    //       robustness of Mina Protocol to deliver a streamlined and secure KYC
    //       experience for businesses and individuals alike. Key Features:
    //       Privacy-Preserving: CyberpunKYC leverages zero-knowledge proofs to
    //       verify user identities without exposing sensitive personal
    //       information. Your data remains securely encrypted and inaccessible to
    //       anyone but yourself. Data Integrity: By utilizing Mina Protocol's
    //       immutable blockchain, CyberpunKYC ensures the integrity and
    //       immutability of all verified KYC data, providing a reliable source of
    //       truth for businesses and regulators. Seamless User Experience: With a
    //       user-friendly interface, CyberpunKYC simplifies the KYC process,
    //       reducing friction and enhancing user adoption. Say goodbye to lengthy
    //       paperwork and cumbersome verification steps. Cross-Border
    //       Compatibility: CyberpunKYC facilitates seamless KYC verification
    //       across borders, eliminating the need for multiple KYC processes for
    //       international transactions. Businesses can now operate globally with
    //       ease. Trustworthy Validation: The decentralized nature of Mina
    //       Protocol guarantees that no single entity has control over the KYC
    //       process. CyberpunKYC ensures trust through the collective agreement of
    //       network participants. Embrace the future of KYC with CyberpunKYC on
    //       Mina Protocol. Whether you're a financial institution, cryptocurrency
    //       exchange, or any business requiring KYC compliance, our innovative
    //       zkApp simplifies the process, protects user privacy, and enhances
    //       security. Join us today at cyberpnk.mina and experience a new era of
    //       trust and efficiency in KYC verification.
    //     </p> */}
    //   </CardBody>
    // </Card>
    <EditableCard initialValue={mock.description} />
  );
}
