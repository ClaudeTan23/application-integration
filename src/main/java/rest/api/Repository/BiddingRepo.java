package rest.api.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import rest.api.Entity.Bidding;



public interface BiddingRepo extends CrudRepository<Bidding, Long>
{
    @Query(value = "SELECT * FROM bidding u WHERE u.car_id = ?1 ORDER BY u.id DESC", nativeQuery = true)
    List<Bidding> findByCarId(String carId);

    @Query(value = "SELECT * FROM bidding u WHERE u.user_id = ?1 ORDER BY u.id DESC", nativeQuery = true)
    List<Bidding> findByUserId(String userId);

    @Query(value = "SELECT * FROM bidding u WHERE u.id = ?1", nativeQuery = true)
    Bidding findById(String id);
}
