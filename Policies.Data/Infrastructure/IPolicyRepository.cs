using Policies.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Policies.Data.Infrastructure
{
    public interface IPolicyRepository
    {
        // create or update
        void Put(IPolicy policy);
        void Save();

        IPolicy Get(int policyNumber);
        IEnumerable<IPolicy> Get();

        void Initialize();
    }
}
