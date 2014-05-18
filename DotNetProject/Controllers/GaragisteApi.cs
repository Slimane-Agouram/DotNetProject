using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Services.Description;
using DotNetProject.Models;
namespace DotNetProject.Controllers
{
    public class GaragisteApi : ApiController
    {
        // GET api/<controller>

        public List<Garagiste> GetGaragistes()
        {
            var Garagistes = new List<Garagiste>();
            Garagiste gr;
            Random rdnFerm = new Random();
            for (int i = 1; i <= 10; i++)
            {
                gr = new Garagiste()
                {
                    GaragisteID = i,
                    GaragisteFerm = rdnFerm.Next(0, 21),
                    GaragisteName = " ",
                   // GaragisteDebFerm = RandomDay(),
                };
                Garagistes.Add(gr);
            }
            return Garagistes;
        }
        public IEnumerable<Garagiste> Get()
        {
            List<Garagiste> test = GetGaragistes();
            Console.WriteLine("dafuck");
            return test;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
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