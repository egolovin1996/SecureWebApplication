using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Repository.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vulnerabilities",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Identifier = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    SoftwareVendor = table.Column<string>(nullable: true),
                    SofrwareName = table.Column<string>(nullable: true),
                    SoftwareVersion = table.Column<string>(nullable: true),
                    SoftwareType = table.Column<string>(nullable: true),
                    HardwareType = table.Column<string>(nullable: true),
                    Class = table.Column<string>(nullable: true),
                    DetectionDate = table.Column<DateTime>(nullable: false),
                    CVSS2 = table.Column<string>(nullable: true),
                    CvSS3 = table.Column<string>(nullable: true),
                    DangerLevel = table.Column<string>(nullable: true),
                    EliminationMeasures = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    ExploitAvailability = table.Column<string>(nullable: true),
                    RemovalInformation = table.Column<string>(nullable: true),
                    SourceLink = table.Column<string>(nullable: true),
                    SystemsIdentifier = table.Column<string>(nullable: true),
                    OtherInformation = table.Column<string>(nullable: true),
                    CWEErrorDescription = table.Column<string>(nullable: true),
                    CWEErrorType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vulnerabilities", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vulnerabilities");
        }
    }
}
