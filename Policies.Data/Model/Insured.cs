using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Policies.Data.Model
{
    public class Insured : IInsured
    {
        [Key]
        public int Id { get; set; }
        public string givenName { get; set; }
        public string familyName { get; set; }
        public string name { get; }
        public string streetAddress { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }
    }
}
