package rest.api.Entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "bidding")
public class Bidding 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(length = 255, nullable = false)
    String bookDate;

    @Column(length = 255, nullable = false)
    String carId;

    @Column(length = 255, nullable = false)
    String userId;

    @Column(length = 255, nullable = false)
    String ownerId;
    
    @Column(length = 255, nullable = false)
    String bidPrice;

    @Column(length = 255, nullable = false)
    String result;

    @ManyToMany(fetch = FetchType.EAGER)
    Set<User> users = new HashSet<User>();

    @ManyToMany(fetch = FetchType.EAGER)
    Set<Cars> cars = new HashSet<Cars>();

    public Long getId()
    {
        return this.id;
    }

    public Long setId(Long id)
    {
        this.id = id;
        return this.id;
    }

    public String getBookDate()
    {
        return this.bookDate;
    }

    public String setBookDate(String bookDate)
    {
        this.bookDate = bookDate;
        return this.bookDate;
    }

    public String getCarId()
    {
        return this.carId;
    }

    public String setCarId(String carId)
    {
        this.carId = carId;
        return this.carId;
    }

    public String getUserId()
    {
        return this.userId;
    }

    public String setUserId(String userId)
    {
        this.userId = userId;
        return this.userId;
    }

    public String getOwnerId()
    {
        return this.ownerId;
    }

    public String setOwnerId(String ownerId)
    {
        this.ownerId = ownerId;
        return this.ownerId;
    }

    public String getBidPrice()
    {
        return this.bidPrice;
    }

    public String setBidPrice(String bidPrice)
    {
        this.bidPrice = bidPrice;
        return this.bidPrice;
    }

    public String getResult()
    {
        return this.result;
    }

    public String setResult(String result)
    {
        this.result = result;
        return this.result;
    }

    public Set<User> getUser()
    {
        return this.users;
    }

    public void setUser(User users)
    {
        this.users.add(users);
    }

    public Set<Cars> getCars()
    {
        return this.cars;
    }

    public void setCars(Cars cars)
    {
        this.cars.add(cars);
    }

}
