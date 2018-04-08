using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using todoApp.Model;



namespace todoApp.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<TodoModel> GetAll()
        {

            using (var ctx = new TodoContex())
            {

                return ctx.TodoITem.ToList();
            }
        }

        [HttpPost("[action]")]
        public IActionResult Insert([FromBody] TodoModel model)
        {
            using (var ctx = new TodoContex())
            {
                var item = ctx.TodoITem.Add(model);
                ctx.SaveChanges();

                return Ok(item.Entity);
            }
        }

        [HttpPost("[action]")]
        public IActionResult Delete([FromBody] TodoModel row)
        {
            using (var ctx = new TodoContex())
            {
                ctx.TodoITem.Remove(row);
                ctx.SaveChanges();

                return Ok();
            }
        }
    }
}