using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Policies.Data.Model
{
    public interface IPolicy
    {
        int policyNumber { get; set; }
        DateTime effectiveDate { get; set; }
        DateTime expirationDate { get; set; }
        Insured primaryInsured { get; set; }
        Risk risk { get; set; }
    }
}
