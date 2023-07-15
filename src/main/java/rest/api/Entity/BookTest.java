package rest.api.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "testdrive")
public class BookTest 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(length = 255, nullable = false)
    String book_date;

    @Column(length = 255, nullable = false)
    String carId;

    @Column(length = 255, nullable = false)
    String userId;

    @Column(length = 255, nullable = false)
    String ownerId;

    public Long getId()
    {
        return this.id;
    }

    public Long setId(Long id)
    {
        this.id = id;
        return this.id;
    }

    public String getBook_date()
    {
        return this.book_date;
    }

    public String setBook_date(String book_date)
    {
        this.book_date = book_date;
        return this.book_date;
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
   
}
