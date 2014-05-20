using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GaragisteProjet.Models
{

    public class Rootobject
    {
        public string[] series { get; set; }
        public Datum[] data { get; set; }

        public Rootobject(string[] series, Datum[] data)
        {
            this.series = series;
            this.data = data;
        }
    }

    public class Datum
    {
        public string x { get; set; }
        public int[] y { get; set; }
        public string tooltip { get; set; }

        public Datum(string x, int[] y, string tooltip)
        {
            this.x = x;
            this.y = y;
            this.tooltip = tooltip;
        }
    }

}