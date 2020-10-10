using System.Threading.Tasks;
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
    }

}