using System.Data.Entity;

namespace DotNetProject.Models
{
    public class GargistesContext : DbContext
    {
        public GargistesContext() : base("Garagistes")
        {
        }
        public DbSet<Garagiste> Garagistes { get; set; }
        public DbSet<Voiture> Voitures { get; set; }
        public DbSet<CarnetEntretien> CarnetsEntretien { get; set; }
    }
}