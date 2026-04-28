import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlankRenderer } from "@am25/plank-react-renderer";
import type { NodeComponents, TiptapDoc } from "@am25/plank-react-renderer";
import { ArrowUpRightIcon } from "lucide-react";

interface Props {
  get_started: string;
}

const components: NodeComponents = {
  heading: ({ level, children }) => {
    const Tag = `h${level}` as "h1" | "h2" | "h3";
    return (
      <Tag
        className={
          level === 2 ? "text-2xl font-bold uppercase pt-6 pb-3" : undefined
        }
      >
        {children}
      </Tag>
    );
  },
  bulletList: ({ children }) => (
    <ul className="list-disc pl-5 space-y-2 marker:text-am-y">{children}</ul>
  ),
  orderedList: ({ children }) => (
    <ol className="list-decimal pl-5 space-y-2 marker:text-am-y">{children}</ol>
  ),
  link: ({ href, target, rel, children }) => (
    <a
      href={href}
      target={target ?? undefined}
      rel={rel ?? undefined}
      className="inline-flex items-center hover:font-bold"
    >
      {children}
      <ArrowUpRightIcon
        size={20}
        className="text-am-y group-data-[variant=yellow]:text-black group-data-[variant=light]:text-black shrink-0"
      />
    </a>
  ),
};

interface Props {
  content: string | TiptapDoc;
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
        <PlankRenderer content={get_started} components={components} />
      </DialogContent>
    </Dialog>
  );
}
