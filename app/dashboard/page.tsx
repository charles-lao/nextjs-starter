import * as React from "react";

import { verifyAuth } from '@/lib/auth';
import { redirect } from "next/navigation";

export default async function DashboardPage() {

  // protect route from unauthorized users
  const result = await verifyAuth();

  if(!result.user) {
    return redirect('/');
  }

  

  return (
    <div>
      <h1>WELCOME TO YOUR DASHBOARD</h1>
    </div>
  );
}