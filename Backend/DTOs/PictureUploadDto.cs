namespace Backend.DTOs
{
    public class PictureUploadDto
    {
        public string Name { get; set; }
        public DateTime? Date { get; set; }
        public string? Description { get; set; }
        public string FileName { get; set; }
        public string FileContentBase64 { get; set; }
    }
}
