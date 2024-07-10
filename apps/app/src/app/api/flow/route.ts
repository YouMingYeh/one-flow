import * as jwt from 'jsonwebtoken';
import createSupabaseServerClient from '../../../../lib/supabase/server';

const secretKey = process.env.SECRET_KEY!;

export async function GET(request: Request) {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;
  if (!user) {
    return new Response(JSON.stringify({ error: 'User not found' }), {
      status: 404,
    });
  }

  const { name } = (await request.json()) as { name: string };

  const token = issueToken(user.id, name);
  return new Response(JSON.stringify({ token }), { status: 200 });
}

export async function POST(request: Request) {
  const { token } = (await request.json()) as { token: string };
  try {
    const { userId, name } = verifyToken(token);
    return new Response(JSON.stringify({ userId, name }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid or expired token' }), {
      status: 401,
    });
  }
}

// Function to issue a token
function issueToken(userId: string, name: string, expiresIn = '30d'): string {
  return jwt.sign({ userId, name }, secretKey, { expiresIn });
}

// Function to verify a token
function verifyToken(token: string): { userId: string; name: string } {
  try {
    return jwt.verify(token, secretKey) as { userId: string; name: string };
  } catch (error) {
    throw new Error('Token verification failed');
  }
}
