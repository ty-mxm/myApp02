import { loginUser } from '@/Modele/loginModel';
import { alertController } from '@ionic/vue';
import { useRouter } from 'vue-router';

export function useLoginController() {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    if (!email || !password) {
      const alert = await alertController.create({
        header: 'Erreur',
        message: 'Veuillez entrer votre email et mot de passe.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    try {
      const data = await loginUser(email, password);
      localStorage.setItem('user', JSON.stringify(data));
      router.push({ path: '/geolocations' });
    } catch (error) {
      const alert = await alertController.create({
        header: 'Échec de la connexion',
        message: 'Email ou mot de passe invalide.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  };

  return { handleLogin };
}
