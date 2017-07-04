using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Policies.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Policies.Data.Infrastructure
{
    public class PolicyRepository : IPolicyRepository
    {
        PolicyContext context;
        readonly ILogger<PolicyRepository> _log;

        // this constructor supports unit tests
        public PolicyRepository(PolicyContext context, ILogger<PolicyRepository> log)
        {
            _log = log;
            this.context = context;
        }

        //internal PolicyRepository()
        //{
        //}

        public IPolicy Get(int policyNumber)
        {
            var policy = context.Policies
                                .Where(p => p.policyNumber == policyNumber)
                                .Include(p => p.primaryInsured)
                                .Include(p => p.risk)
                                .FirstOrDefault();

            return policy;
        }

        public IEnumerable<IPolicy> Get()
        {
            var policies = context.Policies
                                .Include(p => p.primaryInsured)
                                .Include(p => p.risk).AsEnumerable();

            return policies;
        }

        public void Put(IPolicy policy)
        {
            context.Add<Policy>(policy as Policy);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        public void Initialize()
        {
            _log.LogInformation(context.Database.GetDbConnection().ConnectionString);
            DbInitializer.Initialize(context);
        }
    }
}
