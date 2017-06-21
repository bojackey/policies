using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Policies.Data.Model
{
    public interface IInsured
    {
        int Id { get; set; }
        string givenName { get; set; }
        string familyName { get; set; }
        string name { get; }
        string streetAddress { get; set; }
        string city { get; set; }
        string state { get; set; }
        string zip { get; set; }
    }
}
