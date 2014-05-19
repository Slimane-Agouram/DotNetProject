namespace GaragisteProjet.Models
{
    public class TransmissionVoiture
    {
        public int nombre { get; set; }
        public string voiture { get; set; }

        public TransmissionVoiture(int nombre, string voiture)
        {
            this.nombre = nombre;
            this.voiture = voiture;
        }
    }
}
