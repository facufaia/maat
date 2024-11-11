// components/ui/ReportDialog.jsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScamReportForm } from "@/components/forms/scam-report";
import { ReportButton } from "@/components/ui/ReportButton";

export function ReportDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ReportButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Report a Problem</DialogTitle>
          <DialogDescription>
            Please provide details about the issue you encountered with this
            store. Your report will be reviewed by our team.
          </DialogDescription>
        </DialogHeader>
        <ScamReportForm />
      </DialogContent>
    </Dialog>
  );
}
