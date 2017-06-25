using System;

namespace Policies.Data.Model
{
    public class Metadata : IMetadata
    {
        ConstructionTypes constructionTypes_ = new ConstructionTypes();
        public IConstructionTypes constructionTypes
        {
            get
            {
                return constructionTypes_;
            }
        }
    }
}
