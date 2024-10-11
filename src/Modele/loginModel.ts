export async function loginUser(email: string, password: string): Promise<any> {
    const url = 'https://server-1-t93s.onrender.com/api/tp/login';
  
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    return await response.json();
  }
  