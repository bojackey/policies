using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Policies.Data.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Policies.Web.Controllers
{
    [Route("api/[controller]")]
    public class MetaDataController : Controller
    {
        Metadata meta = new Metadata();

        public MetaDataController()
        {

        }
        //
        // GET api/values/5
        [HttpGet()]
        public object Get()
        {
            return meta;
        }
    }
}

