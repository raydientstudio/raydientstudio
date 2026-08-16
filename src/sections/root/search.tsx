"use client"

import React, { useEffect, useState } from "react";
import {
	Calculator,
	Calendar,
	CreditCard,
	SearchIcon,
	Settings,
	Smile,
	User,
} from "lucide-react";

import {
	SearchDialog,
	SearchEmpty,
	SearchGroup,
	SearchInput,
	SearchItem,
	SearchList,
	SearchSeparator,
	SearchShortcut,
} from "../../components/ui/search";
import Button from "../../components/ui/button";
import { useMobileMenu } from "../../components/mobile-menu";

export default function Search() {
	const [open, setOpen] = useState(false)
	const { isMenuOpen } = useMobileMenu();

	useEffect(() => {
		const down = (event: KeyboardEvent) => {
			if (event.key === "s" && (event.metaKey || event.ctrlKey)) {
				event.preventDefault()
				setOpen((open) => !open)
			}
		}

		document.addEventListener("keydown", down)
		return () => document.removeEventListener("keydown", down)
	}, [])

	return (
		<>
			<Button aria-label="search" asIcon onClick={() => setOpen(true)} disabled={isMenuOpen} variant="outline" size="medium" radius={"full"}>
				<SearchIcon />
			</Button>
			<SearchDialog open={open} onOpenChange={setOpen} className="font-sans">
				<SearchInput placeholder="Type a command or search..." />
				<SearchList>
					<SearchEmpty>No results found.</SearchEmpty>
					<SearchGroup heading="Suggestions">
						<SearchItem>
							<Calendar />
							<span>Calendar</span>
						</SearchItem>
						<SearchItem>
							<Smile />
							<span>Search Emoji</span>
						</SearchItem>
						<SearchItem>
							<Calculator />
							<span>Calculator</span>
						</SearchItem>
					</SearchGroup>
					<SearchSeparator />
					<SearchGroup heading="Settings">
						<SearchItem>
							<User />
							<span>Profile</span>
							<SearchShortcut>⌘P</SearchShortcut>
						</SearchItem>
						<SearchItem>
							<CreditCard />
							<span>Billing</span>
							<SearchShortcut>⌘B</SearchShortcut>
						</SearchItem>
						<SearchItem>
							<Settings />
							<span>Settings</span>
							<SearchShortcut>⌘S</SearchShortcut>
						</SearchItem>
					</SearchGroup>
				</SearchList>
			</SearchDialog>
		</>
	)
}