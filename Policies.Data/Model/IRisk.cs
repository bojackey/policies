using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Policies.Data.Model
{
    public enum Construction
    {
        Unknown,
        SiteBuiltHome,
        ModularHome,
        SingleWide,
        ManufacturedHome,
        DoubleWideManufacturedHome
    }

    public interface IRisk
    {
        int Id { get; set; }
        Construction construction { get; set; }
        DateTime yearBuilt { get; set; }
        string streetAddress { get; set; }
        string city { get; set; }
        string state { get; set; }
        string zip { get; set; }
    }
}
