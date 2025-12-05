import { NextResponse } from 'next/server'

export async function GET() {
  // Simple heartbeat indicating the server can handle requests.
  return NextResponse.json({ status: 'ok' }, { status: 200 })
}
