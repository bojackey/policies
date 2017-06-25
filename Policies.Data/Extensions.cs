using Policies.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Policies.Data
{
    public static class Extensions
    {
        public static string[] GetEnumNames<T>()
        {
            Type enumType = typeof(T);

            if (enumType.GetTypeInfo().BaseType != typeof(Enum))
                throw new ArgumentException("T is not System.Enum");
                    
            var values = Enum.GetValues(enumType);
            string[] names = new string[values.Length];

            foreach(Enum v in values)
            {
                names[Convert.ToInt32(v)] = Name(v);
            }
            return names;
        }

        public static string Description(this Enum value)
        {
            // get attributes  
            var field = value.GetType().GetField(value.ToString());
            var attributes = field.GetCustomAttributes(false);

            // Description is in a hidden Attribute class called DisplayAttribute
            // Not to be confused with DisplayNameAttribute
            dynamic displayAttribute = null;

            if (attributes.Any())
            {
                displayAttribute = attributes.ElementAt(0);
            }

            // return description
            return displayAttribute?.Description ?? "Description Not Found";
        }

        public static string Name(this Enum value)
        {
            // get attributes  
            var field = value.GetType().GetField(value.ToString());
            var attributes = field.GetCustomAttributes(false);

            // Description is in a hidden Attribute class called DisplayAttribute
            // Not to be confused with DisplayNameAttribute
            dynamic displayAttribute = null;

            if (attributes.Any())
            {
                displayAttribute = attributes.ElementAt(0);
            }

            // return description
            return displayAttribute?.Name ?? value.ToString();
        }
    }
}
