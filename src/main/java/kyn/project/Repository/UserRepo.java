package kyn.project.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import kyn.project.Entity.User;
import java.util.List;


public interface UserRepo extends CrudRepository<User, Long> 
{
    User findByUsername(String username);

    @Query(value = "SELECT * FROM user u WHERE u.id = ?1", nativeQuery = true)
    User findWithId(String id);
}
