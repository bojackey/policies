namespace Policies.Data.Model
{
    public interface IRisk
    {
        int Id { get; set; }
        Construction construction { get; set; }
        int yearBuilt { get; set; }
        string streetAddress { get; set; }
        string city { get; set; }
        string state { get; set; }
        string zip { get; set; }
    }
}
