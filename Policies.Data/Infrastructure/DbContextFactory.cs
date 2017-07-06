using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace Policies.Data.Infrastructure
{
    class DbContextFactory : IDbContextFactory<PolicyContext>
    {
        public PolicyContext Create(DbContextFactoryOptions options)
        {
            var builder = new DbContextOptionsBuilder<PolicyContext>();
            builder.UseSqlite(PolicyContext.ConnectionString);
            return new PolicyContext(builder.Options);
        }
    }
}
