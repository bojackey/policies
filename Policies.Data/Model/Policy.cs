using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Policies.Data.Model
{
    public class Policy : IPolicy
    {
        [Key]
        public int policyNumber { get; set; }
        public DateTime effectiveDate { get; set; }
        public DateTime expirationDate { get; set; }
        public Insured primaryInsured { get; set; }
        public Risk risk { get; set; }
    }
}
