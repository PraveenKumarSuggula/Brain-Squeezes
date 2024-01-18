using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core_Models.Domains
{
    public class QandACheckObj
    {
        public string type { get; set; } 
        public int? uid { get; set; }
        public string? qid { get; set; }
        public string? file_id { get; set; }
    }
}
