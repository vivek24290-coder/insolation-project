using System.Threading.Tasks;
using System.Web.Http.Cors;
using Microsoft.AspNetCore.Mvc;

namespace InsolationAPI.Controllers
{
    [Route("api/[controller]")]
    public class InsolationController : ControllerBase
    {
        public InsolationDb Db { get; }
        public InsolationController(InsolationDb db)
        {
            Db = db;
        }

        [HttpPost]

        public async Task<IActionResult> Post([FromBody] Insolation body)
        {
            await Db.Connection.OpenAsync();
            body.Db = Db;
            await body.InsertAsync();
            return new OkObjectResult(body);
        }

        [HttpGet]
        public async Task<IActionResult> GetLatest()
        {
            await Db.Connection.OpenAsync();
            var query = new UserQuery(Db);
            var result = await query.FindAll();
            return new OkObjectResult(result);
        }
    }

}