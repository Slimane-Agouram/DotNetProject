using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL_GaragisteProjet.Models;
using GaragisteProjet.Models;

namespace GaragisteProjet
{
    public class GaragisteController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "";
        }

       

        public HttpResponseMessage Post([FromBody] Transmission_Result resultat)
        {

            foreach (var iterator in resultat.lgaragistes )
            {
                System.Diagnostics.Debug.WriteLine("Nombre : " + iterator.nombre + " , Franchise : " + iterator.franchise);
            }

            foreach (var iterator in resultat.lvoitures)
            {
                System.Diagnostics.Debug.WriteLine("Nombre : " + iterator.nombre + " , Voiture : " + iterator.voiture);
            }

            System.Diagnostics.Debug.WriteLine("Date: " + resultat.duration.ToString());
            System.Diagnostics.Debug.WriteLine("Date : " + resultat.dateDebut);

            return Request.CreateResponse(HttpStatusCode.OK, "Liste Garagistes OK");

        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}