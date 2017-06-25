using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Policies.Data.Model
{

    class ConstructionTypes: IConstructionTypes
    {
        public int[] values
        {
            get
            {
                var values = Extensions.GetEnumValues<Construction>();
                return values;
            }
        }

        public string[] names
        {
            get
            {
                var names =  Extensions.GetEnumNames<Construction>();
                return names;
            }
        }
    }
}
