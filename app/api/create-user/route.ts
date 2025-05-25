import { sql } from '@vercel/postgres';
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const hashedPassword = await bcryptjs.hash('password', 10);
    
    const result = await sql`
      INSERT INTO users (email, name, password)
      VALUES ('admin@gmail.com', 'Admin User', ${hashedPassword})
      ON CONFLICT (email) DO NOTHING
      RETURNING id, email, name
    `;
    
    return NextResponse.json({ 
      success: true, 
      message: 'User created successfully',
      user: result.rows[0]
    });
  } catch (error) {
    console.error('Create user error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Send POST request to create user admin@gmail.com with password "password"' 
  });
}