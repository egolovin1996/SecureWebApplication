using System.Collections.Generic;

namespace Model.Filters
{
    public class FilterOptions
    {
        public int Take { get; set; }
        public int Skip { get; set; }
        public string OrderBy { get; set; }
        public List<WhereFilter> WhereFilters { get; set; }
    }
}
