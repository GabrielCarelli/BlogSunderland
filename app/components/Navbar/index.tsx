import Link from "next/link";
import { ModeToggle } from "../ModeToggle";

export default function Navbar() {
  return (
    <nav className="tw-w-full tw-relative tw-flex tw-items-center tw-justify-between tw-max-w-2xl tw-mx-auto tw-px-4 tw-py-5">
      <Link href="/" className="tw-font-bold tw-text-3xl">
        Daily<span className="tw-text-primary">Sunderland</span>
      </Link>

      <ModeToggle />
    </nav>
  );
}
