using System;
using System.Collections.Generic;
using System.Text;

namespace Policies.Data.Model
{
    public interface IMetadata
    {
        List<KeyValuePair<string, int>> constructionTypes { get; }
    }
}
