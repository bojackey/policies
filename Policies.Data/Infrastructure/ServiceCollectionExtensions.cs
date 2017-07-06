using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Policies.Data.Infrastructure
{
    public static class ServiceCollectionExtensions
    {
        public static void AddPolicyRepository(this IServiceCollection services, string connectionString)
        {
            services.AddDbContext<PolicyContext>(options =>
                options.UseSqlite(PolicyContext.ConnectionString)
                );

            services.AddScoped(typeof(IPolicyRepository), typeof(PolicyRepository));
        }
    }
}
