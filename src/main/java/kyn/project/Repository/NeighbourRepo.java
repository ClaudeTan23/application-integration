package kyn.project.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import kyn.project.Entity.Neighbour;
import kyn.project.Entity.User;

public interface NeighbourRepo extends CrudRepository<Neighbour, Long>
{
    List<Neighbour> findAll();

    @Query(value = "SELECT * FROM neighbour u WHERE u.id = ?1", nativeQuery = true)
    Neighbour findWithId(String id);
}
