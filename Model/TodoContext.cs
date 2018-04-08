
using Microsoft.EntityFrameworkCore;

namespace todoApp.Model
{
    public class TodoContex : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=TODO_DB.db");
        }

        public DbSet<TodoModel> TodoITem { get; set; }

    }

    public class TodoModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}