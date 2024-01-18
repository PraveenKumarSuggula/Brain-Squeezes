using Core_Models.Domains;
using Data_Layer.AppDbContext;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BrainSqueezes_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly BrainSqueezesContext _context;
        public UserController(BrainSqueezesContext context)
        {
            _context = context;
        }

        [HttpPost("authentication")]
        public async Task<IActionResult> Authentication([FromBody] User userObject)
        {
            if(userObject == null)
            {
                return BadRequest();
            }

            var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName.ToUpper() == userObject.UserName.ToUpper());

            if(user == null)
            {
                return NotFound(new {message = "Incorrect username"});
            }
            else
            {
                var password = await _context.Users.FirstOrDefaultAsync(x => x.Password == userObject.Password);

                if(password == null)
                {
                    return NotFound(new { message = "Incorrect password" });
                }
                else
                {
                    return Ok(new {message = "Login Successful!!", userID = password.Id});
                }
            }
        }

        [HttpPost("signup")]
        public async Task<IActionResult> RegisterUser([FromBody] User userObject)
        {
            if(userObject == null)
            {
                return BadRequest();
            }
            else
            {
                var usernameExists = await _context.Users.FirstOrDefaultAsync(x => x.UserName.ToUpper() == userObject.UserName.ToUpper());

                if(usernameExists != null)
                {
                    return BadRequest(new { message = "UserName already taken!!" });
                }

                var emailExists = await _context.Users.FirstOrDefaultAsync(x => x.Email.ToUpper() == userObject.Email.ToUpper());

                if (emailExists != null)
                {
                    return BadRequest(new { message = "Email already exist!!" });
                }
            }
            await _context.Users.AddAsync(userObject);
            await _context.SaveChangesAsync();
            return Ok(new {
                message = "Registered Successfully!!"
            });
        }
    }
}
