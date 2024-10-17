import { CircleUserRound, Home, Info, MenuIcon, Wrench } from "lucide-react";

import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function MobileMenu() {
    const { t } = useTranslation();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="flex md:hidden">
                <Button
                    variant="outline"
                    className="bg-transparent text-card-foreground"
                >
                    <MenuIcon className="size-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 w-56 py-4">
                <DropdownMenuGroup className="space-y-2">
                    <DropdownMenuItem>
                        <Home className="mr-2 size-4" />
                        <span>{t("header.home")}</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <Wrench className="mr-2 size-4" />
                        <span>{t("header.services")}</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <Info className="mr-2 size-4" />
                        <span>{t("header.about")}</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <CircleUserRound className="mr-2 size-4" />
                        <span>{t("header.contact")}</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="my-2" />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <LanguageSwitcher />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
