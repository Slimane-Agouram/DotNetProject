using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DotNetProject.Models
{
    public class Garagiste
    {
        [Key, ScaffoldColumn(false)]
        public int GaragisteID { get; set; }

        [Required, StringLength(100), Display(Name = "Name")]
        public string GaragisteName { get; set; }

        [Required, Display(Name="durée_fermeture")]
        public int GaragisteFerm { get; set; }

        [Required, Display(Name = "debut_fermeture")]
        public DateTime GaragisteDebFerm { get; set; }

        public virtual ICollection<Voiture> Voitures { get; set; }
    }
}