﻿namespace Backend.Models
{
    public class Picture
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? Date { get; set; }
        public string? Description { get; set; }
        public string FileName { get; set; }
        public byte[] FileContent { get; set; }
    }
}
