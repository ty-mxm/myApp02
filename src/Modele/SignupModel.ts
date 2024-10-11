export async function signUpUser(firstName: string, lastName: string, email: string, password: string) {
    const url = 'https://server-1-t93s.onrender.com/api/tp/signup';
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Erreur lors de l\'inscription.');
    }
  
    return response;
  }
  