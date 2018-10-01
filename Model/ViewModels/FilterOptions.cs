using System.Collections.Generic;

namespace Model.ViewModels
{
    public class FilterOptions
    {
        public int Take { get; set; }
        public int Skip { get; set; }
        public string OrderBy { get; set; }
        public Dictionary<string, string> WhereEqualsOptions { get; set; }
    }

}
