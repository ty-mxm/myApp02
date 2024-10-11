import { signUpUser } from '@/Modele/SignupModel'; // Rajouté "S" majuscule
import { alertController } from '@ionic/vue';
import { useRouter } from 'vue-router';

export function useSignUpController() {
  const router = useRouter();
  
  const handleSignUp = async (firstName: string, lastName: string, email: string, password: string) => {
    try {
      await signUpUser(firstName, lastName, email, password);
      router.push({ path: '/login' });
    } catch (error) {
      
      const errorMessage = error instanceof Error ? error.message : 'Erreur lors de l\'inscription.';

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
