using System;
using System.Collections.Generic;
using System.Data.Entity;

namespace DotNetProject.Models
{
    public class VoitureDatabaseInitializer : DropCreateDatabaseIfModelChanges<GargistesContext>
    {
        protected override void Seed(GargistesContext context)
        {
            GetVoitures().ForEach(v => context.Voitures.Add(v));
            GetGaragistes().ForEach(g => context.Garagistes.Add(g));
            GetCarnet().ForEach(c => context.CarnetsEntretien.Add(c));
        }

        private static List<Voiture> GetVoitures()
        {
            string[] marque = new string[7];
            marque[0] = "BMW";
            marque[1] = "WV";
            marque[2] = "Mercedes";
            marque[3] = "Seat";
            Random rnd1 = new Random();
            /*string[] bmw = new string[40];*/
            Random rdn2 = new Random();
            var Voitures = new List<Voiture>();
            Voiture voit;
                for (int i=1; i<=10; i++){
                    voit = new Voiture()
                    {
                        VoitureID = i,
                        VoitureMarque = marque[rnd1.Next(0,3)],
                        VoitureModel = " ",
                        VoitureYear = 2014,
                        VoitureKm = rdn2.Next(20000,200000),
                        GaragisteID = 1,
                    };
                    Voitures.Add(voit);
                }
                return Voitures;
        }

        private static DateTime RandomDay()
        {
            DateTime start = new DateTime(2014, 1, 1);
            Random gen = new Random();

            int range = (DateTime.Today - start).Days;
            return start.AddDays(gen.Next(range));
        }

        private static List<Garagiste> GetGaragistes()
        {
            var Garagistes = new List<Garagiste>();
            Garagiste gr;
            Random rdnFerm = new Random();
            for (int i = 1; i <= 10; i++) {
                gr = new Garagiste()
                {
                    GaragisteID = i ,
                    GaragisteFerm = rdnFerm.Next(0,21),
                    GaragisteName = " ",
                    GaragisteDebFerm = RandomDay(),
                };
                Garagistes.Add(gr);
            }
            return Garagistes;
        }

        private static List<CarnetEntretien> GetCarnet()
        {
            string[] marque = new string[7];
            marque[0] = "BMW";
            marque[1] = "WV";
            marque[2] = "Mercedes";
            marque[3] = "Seat";
            var carnets = new List<CarnetEntretien>();
            CarnetEntretien crt;
            for (int i = 0; i < 4; i++)
            {
                crt = new CarnetEntretien()
                {
                    CarnetID = i+1,
                    carnetMarque = marque[i],
                    MarqueYear = 0,
                    FrequenceVidange = 10000,
                    FrequenceRevision = 20000,
                    DureeVidange = 1,
                    DureeRevision = 2,
                };
                carnets.Add(crt);
            }
            return carnets;
        }
    }
}