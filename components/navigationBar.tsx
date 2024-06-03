"use client";

import { logout } from '@/lib/auth-actions';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavigationBar() {
    return (
        <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/dashboard" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Dashboard
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/dashboard" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Components
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        
                            <Link href="/dashboard" legacyBehavior passHref>
                                <NavigationMenuLink onClick={(e) => {
                                    e.preventDefault(); // Prevent the default link behavior
                                    logout(); // Call the logout function
                                }} className={navigationMenuTriggerStyle()}>
                                    Logout
                                </NavigationMenuLink>
                            </Link>
                        
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
    );
}