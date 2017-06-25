using Policies.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Policies.Data.Infrastructure
{
    internal static class DbInitializer
    {
        internal static void Initialize(PolicyContext context)
        {
            context.Database.EnsureCreated();

            // Are there any records in the DB?
            if (context.Policies.Any())
            {
                return; // DB has been seeded
            }

            int policyNum = 1;
            var policies = new Policy[]
            {
                new Policy
                {
                    effectiveDate = DateTime.Now.AddYears(policyNum++),
                    expirationDate = DateTime.Now.AddYears(100+policyNum),
                    risk = new Risk
                    {
                        city = "Irvine",
                        state = "CA",
                        streetAddress = "18100 Von Karman",
                        zip = "92612",
                        construction = Construction.ModularHome,
                        yearBuilt = 2001
                    },
                    primaryInsured = new Insured
                    {
                        city = "Irvine",
                        state = "CA",
                        streetAddress = "200 Jamboree",
                        zip = "92614",
                        familyName = "Smith",
                        givenName = "Brad",
                    }
                },
                new Policy
                {
                    effectiveDate = DateTime.Now.AddYears(policyNum++),
                    expirationDate = DateTime.Now.AddYears(100+policyNum),
                    risk = new Risk
                    {
                        city = "Irvine",
                        state = "CA",
                        streetAddress = "#1 Spectrum Drive",
                        zip = "92618",
                        construction = Construction.SingleWide,
                        yearBuilt = 2002
                    },
                    primaryInsured = new Insured
                    {
                        city = "Irvine",
                        state = "CA",
                        streetAddress = "100 Michelson",
                        zip = "92614",
                        familyName = "Williams",
                        givenName = "Biil",
                    }
                }
            };
            foreach (var p in policies)
            {
                context.Policies.Add(p);
            }
            context.SaveChanges();
        }
    }
}
