package rest.api.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import rest.api.Entity.Cars;

public interface CarsRepo extends CrudRepository<Cars, Long>
{
    @Query(value = "SELECT * FROM cars u WHERE u.active = 'active' ORDER BY u.id DESC", nativeQuery = true)
    List<Cars> findAllCars();

    @Query(value = "SELECT * FROM cars u WHERE u.make_by LIKE %?1% AND u.active = 'active' ORDER BY u.id DESC", nativeQuery = true)
    List<Cars> searchMakeBy(String value);

    @Query(value = "SELECT * FROM cars u WHERE u.model LIKE %?1% AND u.active = 'active' ORDER BY u.id DESC", nativeQuery = true)
    List<Cars> searchModel(String value);

    @Query(value = "SELECT * FROM cars u WHERE u.price LIKE %?1% AND u.active = 'active' ORDER BY u.id DESC", nativeQuery = true)
    List<Cars> searchPrice(String value);

    @Query(value = "SELECT * FROM cars u WHERE u.registration_date LIKE %?1% AND u.active = 'active' ORDER BY u.id DESC", nativeQuery = true)
    List<Cars> searchRegistration(String value);

    @Query(value = "SELECT * FROM cars u WHERE u.id = ?1 AND u.active = 'active' ORDER BY u.id DESC", nativeQuery = true)
    Cars findByCarId(String id);

    @Query(value = "SELECT * FROM cars u WHERE u.user_id = ?1 AND u.active = 'active' ORDER BY u.id DESC", nativeQuery = true)
    List<Cars> findByUserId(String id);
}
