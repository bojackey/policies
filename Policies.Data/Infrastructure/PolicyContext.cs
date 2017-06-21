using Microsoft.EntityFrameworkCore;
using Policies.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Policies.Data.Infrastructure
{
    public class PolicyContext : DbContext
    {
        public PolicyContext(DbContextOptions<PolicyContext> options)
        : base(options)
        {
        }

        //public PolicyContext()
        //{
        //}

        public virtual DbSet<Policy> Policies { get; set; }
        public virtual DbSet<Insured> Insureds { get; set; }
        public virtual DbSet<Risk> Risks { get; set; }
    }
}
