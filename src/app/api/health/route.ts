// src/app/api/health/route.ts
import type { NextRequest } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request: NextRequest) {
  const client = await clientPromise;
  const db = client.db();        // defaults to database in your URI
  await db.command({ ping: 1 }); // throws on failure

  return new Response(JSON.stringify({ status: 'ok' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
