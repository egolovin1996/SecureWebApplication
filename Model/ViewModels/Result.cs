using System;
namespace Model.ViewModels
{
    public class Result
    {
        public string Identifier { get; }
        public string Description { get; }
        public string Software { get; }
        public DateTime Date { get; }

        public Result(Vulnerability vulnerability){
            Identifier = vulnerability.Identifier;
            Description = vulnerability.Description;
            Software = vulnerability.SofrwareName;
            Date = vulnerability.DetectionDate;
        }
    }
}
