using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Threading.Tasks;
using MySqlConnector;

namespace InsolationAPI
{
    public class UserQuery
    {
        public InsolationDb Db { get; }

        public UserQuery(InsolationDb db)
        {
            Db = db;
        }

        public async Task<List<Insolation>> FindAll()
        {
            using var cmd = Db.Connection.CreateCommand();
            cmd.CommandText = @"SELECT * FROM `Users`";
            var result = await ReadAllAsync(await cmd.ExecuteReaderAsync());
            return result;
        }

        private async Task<List<Insolation>> ReadAllAsync(DbDataReader reader)
        {
            var posts = new List<Insolation>();
            using (reader)
            {
                while (await reader.ReadAsync())
                {
                    var post = new Insolation(Db)
                    {
                        Id = reader.GetInt32(0),
                        Name = reader.GetString(1),
                        EmailAddress = reader.GetString(2),
                        MobileNumber = reader.GetString(4),
                        Course = reader.GetString(5),
                        Specialization = reader.GetString(6),
                        Experience = reader.GetInt32(7)
                    };
                    posts.Add(post);
                }
            }
            return posts;
        }
    }
}