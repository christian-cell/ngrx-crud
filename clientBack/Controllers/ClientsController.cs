using clients.Data;
using clients.Models;
using clients.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using System;
using System.Configuration;
using System.Collections.Generic;

namespace clients.Controllers;
[ApiController]
[Route("[controller]")]

public class ClientController : ControllerBase
{
    DataContextDapper _dapper;

    public ClientController(IConfiguration config)
    {
        _dapper = new DataContextDapper(config);
    }

    [HttpGet("TestConnection")]
    public DateTime TestConnection()
    {
        Console.WriteLine(_dapper.LoadDataSingle<DateTime>("SELECT GETDATE()"));
        return _dapper.LoadDataSingle<DateTime>("SELECT GETDATE()");
    }

    [HttpGet("GetClients")]
    public IEnumerable<Client> GetClients()
    {
        string sql = @"
            SELECT  [ClientId],
            [Name],
            [LastName],
            [DNI],
            [Age] FROM laboratory_schema.Clients 
        ";

        IEnumerable<Client> clients = _dapper.LoadData<Client>(sql);
        return clients;
    }

    [HttpGet("GetSingleClient/{clientId}")]
    public Client GetSingleClient( int clientId )
    {
        string sql = @"
            SELECT  [ClientId],
            [Name],
            [LastName],
            [DNI],
            [Age] FROM laboratory_schema.Clients WHERE ClientId = " + clientId.ToString();
        
         
        Client client= _dapper.LoadDataSingle<Client>(sql);
        return client;
    }

    [HttpPost("AddClient")]
    public IActionResult AddClient(ClientToAddDto client)
    {
        string sql = @"
        INSERT laboratory_schema.Clients
        (  
            [Name],
            [LastName],
            [DNI],
            [Age]
        )VALUES('" + client.Name +
            "','"   + client.LastName + 
            "','"   + client.DNI + 
            "','"   + client.Age + 

        "')";

        if(_dapper.ExecuteSql(sql))
        {
            return Ok();
        }

        throw new Exception("Error al crear el cliente con nombre = " + client.Name);
    }

    [HttpPut("EditClient")]
    public IActionResult EditClient( Client client )
    {
        string sql = @"UPDATE laboratory_schema.Clients
            SET [Name] = '" + client.Name +
            "' ,[LastName] = '" + client.LastName +
            "' ,[DNI] = '" + client.DNI +
            "' ,[Age] = '" + client.Age +
        "' WHERE ClientId = " + client.ClientId;

        Console.WriteLine(sql);
        if(_dapper.ExecuteSql(sql))
        {
            return Ok();
        }

        throw new Exception("Error al editar el cliente con id = " + client.ClientId);
    }

    [HttpDelete("DeleteClient")]
    public string DeleteClient(int clientId)
    {
        string sql = " DELETE FROM laboratory_schema.Clients WHERE ClientId = " + clientId.ToString();

        Console.WriteLine(sql);
        if(_dapper.ExecuteSql(sql))
        {
            return " cliente con id" + " " + clientId + " " + "ha sido eliminado correctamente";
        }

        throw new Exception("Error al eliminar el cliente con id = " + clientId.ToString());
    }
}
