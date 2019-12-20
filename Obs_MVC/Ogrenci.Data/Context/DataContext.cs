using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Ogrenci.Data.Model;

namespace Ogrenci.Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }

        public DbSet<OgrenciData> OgrenciDatas { get; set; }
    }
}
