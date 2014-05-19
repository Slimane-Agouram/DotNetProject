using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GaragisteProjet.Models
{
    public class Transmission_Result
    {
        public List<TransmissionGaragiste> lgaragistes
    {
        get;
        set;
    }
        public List<TransmissionVoiture> lvoitures { get; set; }

        public int duration { get; set; }
        public string dateDebut { get; set; }
    }
}