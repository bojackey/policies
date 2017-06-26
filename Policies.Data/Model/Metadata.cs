using System;
using System.Collections.Generic;

namespace Policies.Data.Model
{
    public class Metadata : IMetadata
    {
        public List<KeyValuePair<string, int>> constructionTypes
        {
            get
            {
                return ConstructionTypes.selections;
            }
        }
    }
}
