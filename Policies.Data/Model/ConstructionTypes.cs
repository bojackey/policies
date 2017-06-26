using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Policies.Data.Model
{

    internal static class ConstructionTypes
    {
        internal static List<KeyValuePair<string, int>> selections
        {
            get
            {
                List<KeyValuePair<string, int>> result = new List<KeyValuePair<string, int>>();

                var values = Extensions.GetEnumValues<Construction>();
                var names = Extensions.GetEnumNames<Construction>();

                for (var i = 0; i < values.Length; i++)
                {
                    KeyValuePair<string, int> kvp = new KeyValuePair<string, int>(names[i], values[i]);
                    result.Add(kvp);
                }

                return result;
            }
        }
    }
}
