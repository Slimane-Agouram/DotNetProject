using System;
using System.Collections.Generic;
using System.ComponentModel.Design.Serialization;
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
        public GaragisteController()
        {

        }

        // GET api/<controller>
//        public Rootobject Get()
//        {
//
//            string[] series = {"serie1", "serie2", "serie3"};
//            int[] valeurs = new int[3];
//            valeurs[0] = 1;
//            valeurs[1] = 2;
//            valeurs[2] = 3;
//            Datum[] datum = new Datum[2];
//            datum[0] = new Datum("x", valeurs, "tooltip");
//            int[] valeurs2 = new int[3];
//            valeurs2[0] = 3;
//            valeurs2[1] = 4;
//            valeurs2[2] = 1;
//            datum[1] = new Datum("y", valeurs2, "tooltip");
//            return new Rootobject(series, datum);
//        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "test";
        }
        
        [ActionName("Collect")]
        [HttpGet]

        public Rootobject GetAll([FromUri]dummy d)
        {
            string[] series = { "serie1", "serie2", "serie3" };
            int[] valeurs = new int[3];
            valeurs[0] = 1;
            valeurs[1] = 2;
            valeurs[2] = 3;
            Datum[] datum = new Datum[2];
            datum[0] = new Datum("x", valeurs, "tooltip");
            int[] valeurs2 = new int[3];
            valeurs2[0] = 3;
            valeurs2[1] = 4;
            valeurs2[2] = 1;
            datum[1] = new Datum("y", valeurs2, "tooltip");
                        System.Diagnostics.Debug.WriteLine("membre1: " + d.Garagiste_nombre + "\n membre2: " + d.Garagiste_franchise +"\n membre3 : " + d.Voiture_nombre + "\n membre4:" + d.Voiture_Voiture + "\n membre5: " + d.duration + "\n membre6:" + d.dateDebut );

            return new Rootobject(series, datum);

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