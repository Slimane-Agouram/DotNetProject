using System.ComponentModel.DataAnnotations;

namespace DotNetProject.Models
{
    public class Voiture
    {
        [Key, ScaffoldColumn(false)]
        public int VoitureID { get; set; }

        [Required, StringLength(100), Display(Name = "Marque")]
        public string VoitureMarque { get; set; }

        [Required, StringLength(100), Display(Name = "Modèle")]
        public string VoitureModel { get; set; }

        [Required, Display(Name = "Année")]
        public int VoitureYear { get; set; }

        [Required, Display(Name = "kilométrage")]
        public int VoitureKm { get; set; }

        public int? GaragisteID { get; set; }

        public virtual Garagiste Garagiste { get; set; }

    }
}