using System;
using Moq;
using Policies.Data;
using Xunit;
using Microsoft.EntityFrameworkCore;
using Policies.Data.Infrastructure;

namespace Policies.Test
{
    public class DataTests
    {
        [Theory]
        public void AddPolicy()
        {
            var mockSet = new Mock<DbSet<PolicyContext>>();
        }
    }
}
