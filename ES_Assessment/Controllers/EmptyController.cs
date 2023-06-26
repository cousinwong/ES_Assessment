using Microsoft.AspNetCore.Mvc;

namespace ES_Assessment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmptyController : ControllerBase
    {
        private readonly ILogger<EmptyController> _logger;

        public EmptyController(ILogger<EmptyController> logger)
        {
                _logger = logger;
        }
    }
}
