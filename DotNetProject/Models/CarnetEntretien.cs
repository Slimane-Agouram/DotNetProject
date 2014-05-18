using System.ComponentModel.DataAnnotations;

namespace DotNetProject.Models
{
    public class CarnetEntretien
    {
        [Key, ScaffoldColumn(false)]
        public int CarnetID { get; set; }

        [Required, StringLength(100), Display(Name = "Marque")]
        public string carnetMarque { get; set; }

        [Required, Display(Name = "Année")]
        public int MarqueYear { get; set; }

        [Required, Display(Name = "Vidange")]
        public int FrequenceVidange { get; set; }

        [Required, Display(Name = "DuréeVidange")]
        public int DureeVidange { get; set; }

        [Required, Display(Name = "RévisionMoteur")]
        public int FrequenceRevision { get; set; }

        [Required, Display(Name = "DuréeRev")]
        public int DureeRevision { get; set; }

    }
}