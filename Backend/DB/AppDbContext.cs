using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.DB
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Picture> Pictures { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Picture>(entity =>
            {
                entity.Property(p => p.Name).IsRequired().HasMaxLength(50);
                entity.Property(p => p.Description).HasMaxLength(250);
                entity.Property(p => p.FileName).IsRequired();
                entity.HasIndex(p => p.FileName).IsUnique(); // Prevent duplicates
            });
        }
    }
}
