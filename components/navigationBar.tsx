"use client";

import { logout } from '@/lib/auth-actions';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Card } from './ui/card';

export default function NavigationBar() {
    return (
        <Card>
            <NavigationMenu>
                <NavigationMenuList className="flex justify-between items-center space-x-4 p-3 w-screen">
                    <div className="flex items-center">
                        <NavigationMenuItem>
                            <Link href="/dashboard" legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-bold text-xl`}>
                                    AppName
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/dashboard" legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base`}>
                                    Dashboard
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/dashboard" legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base`}>
                                    SampleLink 1
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/dashboard" legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base`}>
                                    SampleLink 2
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </div>
                    <div className="flex items-center" >
                        <NavigationMenuItem>
                                <Link href="/dashboard" legacyBehavior passHref>
                                    <NavigationMenuLink  onClick={(e) => {
                                        e.preventDefault(); // Prevent the default link behavior
                                        logout(); // Call the logout function
                                    }} className={`${navigationMenuTriggerStyle()} text-base`}>
                                        Logout
                                    </NavigationMenuLink>
                                </Link>
                        </NavigationMenuItem>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </Card>
    );
}