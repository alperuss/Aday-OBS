using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Ogrenci.Data.Context;
using Ogrenci.Data.Dto;
using Ogrenci.Data.Model;

namespace Obs_MVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly DataContext _dataContext;
        public HomeController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Kayit()
        {
            return View();
        }
        public IActionResult Departments()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }
        public IActionResult SendAction([FromBody]OBSSendActionDto obsSendActionDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Error");
            }
            OgrenciData ogrenciData = new OgrenciData();
            ogrenciData.Name = obsSendActionDto.Name;
            ogrenciData.Surname = obsSendActionDto.Surname;
            ogrenciData.Email = obsSendActionDto.Email;
            ogrenciData.StudentNo = obsSendActionDto.StudentNo;
            ogrenciData.TcId = obsSendActionDto.TcId;
            ogrenciData.Phone = obsSendActionDto.Phone;
            ogrenciData.Gender = obsSendActionDto.Gender;
            ogrenciData.Birthday = obsSendActionDto.Birthday;
            ogrenciData.BirthPlace = obsSendActionDto.BirthPlace;
            ogrenciData.Department = obsSendActionDto.Department;
            ogrenciData.Startdate = obsSendActionDto.Startdate;

            _dataContext.OgrenciDatas.Add(ogrenciData);
            _dataContext.SaveChanges();

            return new JsonResult("ok");
        }
    }
}