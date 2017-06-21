using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Policies.Data;
using Policies.Data.Infrastructure;

namespace Policies.Data.Migrations
{
    [DbContext(typeof(PolicyContext))]
    partial class PolicyContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Policies.Data.Insured", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("city");

                    b.Property<string>("familyName");

                    b.Property<string>("givenName");

                    b.Property<string>("state");

                    b.Property<string>("streetAddress");

                    b.Property<string>("zip");

                    b.HasKey("Id");

                    b.ToTable("Insureds");
                });

            modelBuilder.Entity("Policies.Data.Policy", b =>
                {
                    b.Property<int>("policyNumber")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("effectiveDate");

                    b.Property<DateTime>("expirationDate");

                    b.Property<int?>("primaryInsuredId");

                    b.Property<int?>("riskId");

                    b.HasKey("policyNumber");

                    b.HasIndex("primaryInsuredId");

                    b.HasIndex("riskId");

                    b.ToTable("Policies");
                });

            modelBuilder.Entity("Policies.Data.Risk", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("city");

                    b.Property<int>("construction");

                    b.Property<string>("state");

                    b.Property<string>("streetAddress");

                    b.Property<DateTime>("yearBuilt");

                    b.Property<string>("zip");

                    b.HasKey("Id");

                    b.ToTable("Risks");
                });

            modelBuilder.Entity("Policies.Data.Policy", b =>
                {
                    b.HasOne("Policies.Data.Insured", "primaryInsured")
                        .WithMany()
                        .HasForeignKey("primaryInsuredId");

                    b.HasOne("Policies.Data.Risk", "risk")
                        .WithMany()
                        .HasForeignKey("riskId");
                });
        }
    }
}
