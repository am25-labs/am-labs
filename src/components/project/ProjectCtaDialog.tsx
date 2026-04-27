import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ProseRenderer } from "@/components/ProseRenderer";

interface Props {
  get_started: string;
}

export default function ProjectCtaDialog({ get_started }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="rounded-full w-full mt-16 mb-4 md:mt-0 cursor-pointer group-data-[variant=yellow]:bg-black group-data-[variant=light]:bg-black group-data-[variant=yellow]:text-am-y group-data-[variant=light]:text-white group-data-[variant=yellow]:hover:bg-black/80 group-data-[variant=light]:hover:bg-black/80"
          size="lg"
        >
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-bold uppercase">Get Started</DialogTitle>
        </DialogHeader>
        <ProseRenderer content={get_started} />
      </DialogContent>
    </Dialog>
  );
}
