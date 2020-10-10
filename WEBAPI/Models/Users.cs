using System.Data;
using System.Threading.Tasks;
using MySqlConnector;

namespace InsolationAPI
{
    public class Insolation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public string MobileNumber { get; set; }
        public string Course { get; set; }
        public string Specialization { get; set; }
        public int Experience { get; set; }
        internal InsolationDb Db { get; set; }

        public Insolation() { }
        internal Insolation(InsolationDb db)
        {
            Db = db;
        }

        public async Task InsertAsync()
        {
            using var cmd = Db.Connection.CreateCommand();
            cmd.CommandText = @"INSERT INTO `Users` (`Name`, `EmailAddress`,`Password`,`MobileNumber`,`Course`
                                ,`Specialization`,`Experience`) VALUES (@name, @emailaddress,@password,@mobilenumber
                                ,@course,@specialization,@experience);";
            BindParams(cmd);
            await cmd.ExecuteNonQueryAsync();
            Id = (int)cmd.LastInsertedId;
        }

        private void BindParams(MySqlCommand cmd)
        {
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@name",
                DbType = DbType.String,
                Value = Name,
            });
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@emailaddress",
                DbType = DbType.String,
                Value = EmailAddress,
            });
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@password",
                DbType = DbType.String,
                Value = Password,
            });
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@mobilenumber",
                DbType = DbType.String,
                Value = MobileNumber,
            });
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@course",
                DbType = DbType.String,
                Value = Course,
            });
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@specialization",
                DbType = DbType.String,
                Value = Specialization,
            });
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@experience",
                DbType = DbType.String,
                Value = Experience,
            });
        }
    }
}