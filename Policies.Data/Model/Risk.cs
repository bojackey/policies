using System;
using System.ComponentModel.DataAnnotations;

namespace Policies.Data.Model
{
    public class Risk : IRisk
    {
        [Key]
        public int Id { get; set; }
        public Construction construction { get; set; }
        public int yearBuilt { get; set; }
        public string streetAddress { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }
    }
}
