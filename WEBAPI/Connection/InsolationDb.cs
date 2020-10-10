using System;
using MySqlConnector;

namespace InsolationAPI
{
    public class InsolationDb : IDisposable
    {
        public MySqlConnection Connection { get; }

        public InsolationDb(string connectionString)
        {
            Connection = new MySqlConnection(connectionString);
        }

        public void Dispose() => Connection.Dispose();
    }
}