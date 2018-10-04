﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Repository;

namespace Repository.Migrations
{
    [DbContext(typeof(RepositoryContext))]
    partial class RepositoryContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.3-rtm-32065")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("Model.Vulnerability", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CVSS2");

                    b.Property<string>("CWEErrorDescription");

                    b.Property<string>("CWEErrorType");

                    b.Property<string>("Class");

                    b.Property<string>("CvSS3");

                    b.Property<string>("DangerLevel");

                    b.Property<string>("Description");

                    b.Property<string>("DetectionDate");

                    b.Property<string>("EliminationMeasures");

                    b.Property<string>("ExploitAvailability");

                    b.Property<string>("HardwareType");

                    b.Property<string>("Identifier");

                    b.Property<string>("Name");

                    b.Property<string>("OtherInformation");

                    b.Property<string>("RemovalInformation");

                    b.Property<string>("SofrwareName");

                    b.Property<string>("SoftwareType");

                    b.Property<string>("SoftwareVendor");

                    b.Property<string>("SoftwareVersion");

                    b.Property<string>("SourceLink");

                    b.Property<string>("Status");

                    b.Property<string>("SystemsIdentifier");

                    b.HasKey("Id");

                    b.ToTable("Vulnerabilities");
                });
#pragma warning restore 612, 618
        }
    }
}
