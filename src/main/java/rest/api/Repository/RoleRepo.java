package rest.api.Repository;

import org.springframework.data.repository.CrudRepository;

import rest.api.Entity.Role;

public interface RoleRepo extends CrudRepository<Role, Long>
{
    Role findByRoles(String role);
}
