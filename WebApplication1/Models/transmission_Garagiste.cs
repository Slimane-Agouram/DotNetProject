namespace GaragisteProjet.Models
{
    public class TransmissionGaragiste
    {
        public int nombre { get; set; }
        public string franchise { get; set; }

        public TransmissionGaragiste(int _nombre, string _franchise)
        {
            this.nombre = _nombre;
            this.franchise = _franchise;
        }
    }
}
