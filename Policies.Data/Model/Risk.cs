using System;
using System.ComponentModel.DataAnnotations;

namespace Policies.Data.Model
{
    public class Risk : IRisk
    {
        [Key]
        public int Id { get; set; }
        public Construction construction { get; set; }

        public string constructionName
        {
            get
            {
                return construction.Name();
            }
        }

        public string[] constructionNames
        {
            get
            {
                return Extensions.GetEnumNames<Construction>();
            }
        }

        public int yearBuilt { get; set; }
        public string streetAddress { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }
    }
}
