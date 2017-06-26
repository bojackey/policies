using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

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
}
