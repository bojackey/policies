using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Policies.Data.Model
{
    public enum Construction
    {
        [Display(Name = "Unknown")]
        Unknown,
        [Display(Name = "Site Built Home")]
        SiteBuiltHome,
        [Display(Name = "Modular Home")]
        ModularHome,
        [Display(Name = "Single Wide Home")]
        SingleWide,
        [Display(Name = "Manufactured Home")]
        ManufacturedHome,
        [Display(Name = "Double Wide Manufactured Home")]
        DoubleWideManufacturedHome
    }

    public interface IRisk
    {
        int Id { get; set; }
        Construction construction { get; set; }
        string constructionName { get; }
        int yearBuilt { get; set; }
        string streetAddress { get; set; }
        string city { get; set; }
        string state { get; set; }
        string zip { get; set; }
    }
}
