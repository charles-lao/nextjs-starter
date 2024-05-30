import { db } from "@/db/index";
import { person } from "@/db/schema"
import Image from "next/image";

export default async function Home() {
  const data1:any = await db.select().from(person); // SAMPLE SELECT on DRIZZLE
  //const data1:any = await db.insert(person).values({ id: 2, userName: 'Charles123', userCountry: 'Philippines' }); // SAMPLE INSERT on DRIZZLE

  console.log(data1);
  return (
    <div>page</div>
  );
}
