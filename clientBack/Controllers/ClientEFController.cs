using AutoMapper;
using clients.Models;
using clients.Data;
using clients.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Configuration;
using System.Collections.Generic;
using System;

namespace clients.Controllers;

[ApiController]
[Route("Controller")]
public class ClientEFController : ControllerBase
{
    IClientRepository _clientRepository;
    IMapper _mapper;

    public ClientEFController(IConfiguration config , IClientRepository clientRepository)
    {
        _clientRepository = clientRepository;
        _mapper = new Mapper(new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<ClientToAddDto, Client>();
        }));
    }

    [HttpGet("GetUsers")]
    public IEnumerable<Client> GetClients()
    {
        IEnumerable<Client> clients = _clientRepository.GetClients();
        return clients;
    } 

    [HttpGet("GetSingleClient")]
    public Client GetSingleClient(int clientId)
    {
        return _clientRepository.GetSingleClient(clientId);
    }

    [HttpPut("EditClient")]
    public IActionResult EditClient(Client client)
    {
        Client? clientdb = _clientRepository.GetSingleClient(client.ClientId);

        if(clientdb != null)
        {
            clientdb.Name = client.Name;
            clientdb.LastName = client.LastName;
            clientdb.DNI = client.DNI;
            clientdb.Age = client.Age;

            if(_clientRepository.SaveChanges())
            {
                return Ok();
            }

            throw new System.Exception("ERROR");
            
        }

        throw new System.Exception("Error al actualizar el cliente con id = " + " " + client.ClientId);
    } 

    [HttpPost("AddUser")]
    public IActionResult AddUser( ClientToAddDto client )
    {
        Client clientDb = _mapper.Map<Client>(client);
        _clientRepository.AddEntity<Client>(clientDb);
        if(_clientRepository.SaveChanges())
        {
            return Ok();
        }

        throw new System.Exception("Error al crear el cliente " );
    }

    [HttpDelete("DeleteUser/{clientId}")]
    public IActionResult DeleteUser(int clientId)
    {
        Client ? clientDb = _clientRepository.GetSingleClient(clientId);

        if(clientDb != null)
        {
            _clientRepository.RemoveEntity<Client>(clientDb);
            if(_clientRepository.SaveChanges())
            {
                return Ok();
            }
        }

        throw new Exception("Error al eliminar el cliente con id = " + " " + clientId);
    }
}
