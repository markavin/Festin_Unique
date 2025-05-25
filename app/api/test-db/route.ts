import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Test basic connection
    const result = await sql`SELECT NOW() as current_time`;
    console.log('Database connection successful');
    
    // Test users table
    const userCheck = await sql`SELECT id, email, name FROM users WHERE email = 'admin@gmail.com'`;
    console.log('User found:', userCheck.rows[0]);
    
    return NextResponse.json({ 
      success: true,
      timestamp: result.rows[0],
      user: userCheck.rows[0],
      message: 'Database connection working'
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack'
    }, { status: 500 });
  }
}