import { signUpUser } from '@/Modele/signupModel';
import { alertController } from '@ionic/vue';
import { useRouter } from 'vue-router';

export function useSignUpController() {
  const router = useRouter();

  const handleSignUp = async (firstName: string, lastName: string, email: string, password: string) => {
    try {
      console.log('Tentative d\'inscription avec les valeurs :', { firstName, lastName, email, password });
      const response = await signUpUser(firstName, lastName, email, password);

      console.log('Réponse de l\'API :', response);

      if (response.ok) {
        router.push({ path: '/login' });
      } else {
        throw new Error('Erreur lors de l\'inscription : ' + (response.statusText || 'Réponse non valide.'));
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erreur lors de l\'inscription.';

      console.error('Erreur capturée lors de l\'inscription :', error);

      const alert = await alertController.create({
        header: 'Erreur',
        message: errorMessage,
        buttons: ['OK'],
      });
      await alert.present();
    }
  };

  return { handleSignUp };
}
