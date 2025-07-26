using Backend.DB;
using Backend.DTOs;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PicturesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PicturesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: /api/pictures
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Picture>>> GetPictures()
        {
            return await _context.Pictures
                .Select(p => new Picture
                {
                    Id = p.Id,
                    Name = p.Name
                })
                .ToListAsync();
        }

        [HttpPut]
        public async Task<ActionResult<int>> PutPicture([FromBody] PictureUploadDto dto)
        {
            if (await _context.Pictures.AnyAsync(p => p.FileName == dto.FileName))
            {
                return BadRequest("A picture with this file name already exists.");
            }

            try
            {
                var picture = new Picture
                {
                    Name = dto.Name,
                    Description = dto.Description,
                    Date = dto.Date,
                    FileName = dto.FileName,
                    FileContent = Convert.FromBase64String(dto.FileContentBase64)
                };

                _context.Pictures.Add(picture);
                await _context.SaveChangesAsync();

                return Ok(picture.Id);
            }
            catch (FormatException)
            {
                return BadRequest("Invalid base64 string.");
            }
        }
    }
}
