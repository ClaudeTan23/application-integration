package rest.api.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import rest.api.Entity.User;

import java.util.List;
import java.util.Optional;


public interface UserRepo extends CrudRepository<User, Long> 
{
    User findByUsername(String username);

    User findByEmail(String email);

    @Query(value = "SELECT * FROM users u WHERE u.id = ?1", nativeQuery = true)
    User findUserById(Long id);

    List<User> findAll();
}
