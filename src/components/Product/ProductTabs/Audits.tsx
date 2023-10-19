import { Button, Card, CardBody } from "@nextui-org/react";

export default function Audits() {
  return (
    <Card className="w-full auth-card">
      <CardBody className="flex flex-col gap-4 w-full items-stretch">
        <h1 className="text-2xl font-bold">
          CyberpunKYC has been audited 4 times.
        </h1>
        <ul>
          <li>On 23/04/2023 conducted by ZKAuditCompany. View report</li>
          <li>On 10/02/2023 conducted by ZKAuditCompany. View report</li>
          <li>On 30/12/2022 conducted by ZKAuditCompany. View report</li>
          <li>On 21/05/2022 conducted by ZKAuditCompany. View report</li>
        </ul>
        <div className="flex flex-row justify-end gap-4">
          <Button variant="light">Contact the developer</Button>
          <Button color="danger" variant="light">
            Report an issue
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
