import { prisma } from "@/lib/prisma";

export default async function TestPage() {
  const events = await prisma.event.findMany();

  return <main className="overflow-hidden">{JSON.stringify(events)}</main>;
}
