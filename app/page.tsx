import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<div>
			<p>Hello</p>
			<UserButton />
			<DarkModeToggle />
		</div>
	);
}
