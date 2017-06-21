using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Policies.Data.Model
{
    public class Risk : IRisk
    {
        [Key]
        public int Id { get; set; }
        public Construction construction { get; set; }
        public DateTime yearBuilt { get; set; }
        public string streetAddress { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }
    }
}
