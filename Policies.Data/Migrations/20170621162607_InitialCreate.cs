using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Policies.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Insureds",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    city = table.Column<string>(nullable: true),
                    familyName = table.Column<string>(nullable: true),
                    givenName = table.Column<string>(nullable: true),
                    state = table.Column<string>(nullable: true),
                    streetAddress = table.Column<string>(nullable: true),
                    zip = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Insureds", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Risks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    city = table.Column<string>(nullable: true),
                    construction = table.Column<int>(nullable: false),
                    state = table.Column<string>(nullable: true),
                    streetAddress = table.Column<string>(nullable: true),
                    yearBuilt = table.Column<DateTime>(nullable: false),
                    zip = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Risks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Policies",
                columns: table => new
                {
                    policyNumber = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    effectiveDate = table.Column<DateTime>(nullable: false),
                    expirationDate = table.Column<DateTime>(nullable: false),
                    primaryInsuredId = table.Column<int>(nullable: true),
                    riskId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Policies", x => x.policyNumber);
                    table.ForeignKey(
                        name: "FK_Policies_Insureds_primaryInsuredId",
                        column: x => x.primaryInsuredId,
                        principalTable: "Insureds",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Policies_Risks_riskId",
                        column: x => x.riskId,
                        principalTable: "Risks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Policies_primaryInsuredId",
                table: "Policies",
                column: "primaryInsuredId");

            migrationBuilder.CreateIndex(
                name: "IX_Policies_riskId",
                table: "Policies",
                column: "riskId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Policies");

            migrationBuilder.DropTable(
                name: "Insureds");

            migrationBuilder.DropTable(
                name: "Risks");
        }
    }
}
