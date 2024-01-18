using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core_Models.Domains
{
    public class Response<T>
    {
        public T Result { get; set; }

        public IDictionary<string, string[]> Errors { get; set; }

    }
}
