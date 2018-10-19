using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Repository.Interfaces;
using Repository.Repositories;
using Repository.Factories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using SecureWeb.Helpers;
using SecureWeb.Hubs;
using SecureWeb.Middleware;

namespace SecureWeb
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuer = AuthOptions.Issuer,
                    ValidAudience = AuthOptions.Audience,
                    IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ClockSkew = TimeSpan.Zero
                };
            });

            // Разрешаем подключение независмого источника
            services.AddCors(options => options.AddPolicy("CorsPolicy", builder =>
                {
                    builder
                        .AllowAnyOrigin()
                        //.WithOrigins("http://localhost:3000")
                        .AllowCredentials()
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                })
            );

            services.AddSignalR();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            // AddScope – инстанс создается 1 раз на каждый request от клиента к серверу
            services.AddScoped<IRepositoryContextFactory, PostgreSqlContextFactory>();
            services.AddScoped<IVulnerabilityRepository>(provider =>
                new VulnerabilityRepository(Configuration.GetConnectionString("PostgreSQLConnection"),
                    provider.GetService<IRepositoryContextFactory>()));
            services.AddScoped<IUserRepository>(provider =>
                new UserRepository(Configuration.GetConnectionString("PostgreSQLConnection"),
                    provider.GetService<IRepositoryContextFactory>()));
            services.AddScoped<IChatRepository>(provider =>
                new ChatRepository(Configuration.GetConnectionString("PostgreSQLConnection"),
                    provider.GetService<IRepositoryContextFactory>()));
        }
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseCors("CorsPolicy");
            app.UseSignalR(routes =>
            {
                routes.MapHub<ChatHub>("/chat");
            });

            app.UseAuthentication();
            // app.UseHttpsRedirection();
            app.UseMiddleware(typeof(ErrorHandlingMiddleware));
            app.UseMvc();
        }
    }
}
