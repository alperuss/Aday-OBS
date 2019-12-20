using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Ogrenci.Data.Dto
{
    public class OBSSendActionDto
    {
        [Required, MinLength(2), MaxLength(50)]
        public int StudentNo { get; set; }
        [Required, MinLength(2), MaxLength(50)]
        public string Name { get; set; }
        [Required, MinLength(2), MaxLength(50)]
        public string Surname { get; set; }
        [Required, MinLength(10), MaxLength(12)]
        public string TcId { get; set; }
        [Required, MinLength(2), MaxLength(50)]
        public string Email { get; set; }
        [Required, MinLength(2), MaxLength(12)]
        public string Phone { get; set; }
        [Required, MinLength(1), MaxLength(10)]
        public string Gender { get; set; }
        [Required, MinLength(2), MaxLength(50)]
        public string Birthday { get; set; }
        [Required, MinLength(2), MaxLength(50)]
        public string BirthPlace { get; set; }
        [Required, MinLength(2), MaxLength(50)]
        public string Department { get; set; }
        [Required, MinLength(2), MaxLength(50)]
        public int Startdate { get; set; }
    }
}
