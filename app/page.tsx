import { db } from "@/db/index";
import { person } from "@/db/schema"
import Image from "next/image";


import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default async function Home() {
  const data1:any = await db.select().from(person); // SAMPLE SELECT ALL on DRIZZLE
  //const data1:any = await db.insert(person).values({ id: 2, userName: 'Charles123', userCountry: 'Philippines' }); // SAMPLE INSERT on DRIZZLE

  console.log(data1);
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <Card className="w-[350px] shadow-md">
        <CardHeader>
          <CardTitle>Login account</CardTitle>
          <CardDescription>Please enter your credentials to log in.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
