import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Auth endpoint not used' });
}

export async function POST() {
  return NextResponse.json({ message: 'Auth endpoint not used' });
}