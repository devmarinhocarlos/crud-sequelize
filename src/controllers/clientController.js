import ClientRepository from "../../models/client.js";

function findAll(req, res) {
    ClientRepository.findAll().then((result) => res.json(result));
  }
  
  function findClient(req, res) {
    ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  function addClient(req, res) {
    ClientRepository.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      age: req.body.age,
      email: req.body.email,
    }).then((result) => res.json(result));
  }
  
  async function updateClient(req, res) {
    await ClientRepository.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        email: req.body.email,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  
    ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
  }
  
  async function deleteClient(req, res) {
    await ClientRepository.destroy({
      where: {
        id: req.params.id,
      },
    });
  
    ClientRepository.findAll().then((result) => res.json(result));
  }
  
  export default { findAll, addClient, findClient, updateClient, deleteClient };