using Microsoft.AspNetCore.Mvc;

namespace nStck.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DemoController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        /// <summary>
        /// Initializes a new instance of the <see cref="DemoController"/> class.
        /// </summary>
        /// <param name="configuration">The configuration.</param>
        public DemoController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        /// <summary>
        /// Get spaBaseUrl
        /// </summary>
        /// <returns>The spaBaseUrl</returns>
        [HttpGet("")]
        public ActionResult<string> Get()
        {
            var spaBaseUrl = _configuration.GetValue<string>("SPA-BaseUrl");
            return Ok(spaBaseUrl);
        }
    }
}
