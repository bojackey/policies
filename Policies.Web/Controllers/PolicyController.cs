using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Policies.Data.Infrastructure;
using Policies.Data.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Policies.Controllers
{
    [Route("api/[controller]")]
    public class PolicyController : Controller
    {
        readonly IPolicyRepository policyRepository;

        public PolicyController(IPolicyRepository policyRepository)
        {
            this.policyRepository = policyRepository;
        }

        // GET: api/policy
        [HttpGet]
        public IEnumerable<IPolicy> Get()
        {
            return policyRepository.Get();
        }

        // GET api/policy/5
        [HttpGet("{id}")]
        public IPolicy Get(int id)
        {
            return policyRepository.Get(id);
        }

        // PUT api/policy
        [HttpPut()]
        public void Put([FromServices] IPolicy policy)
        {
            policyRepository.Put(policy);
        }
    }
}
