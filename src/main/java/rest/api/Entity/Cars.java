package rest.api.Entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "cars")
public class Cars 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(length = 255, nullable = false)
    String make_by;

    @Column(length = 255, nullable = false)
    String model;

    @Column(length = 255, nullable = false)
    String registration_date;

    @Column(length = 255, nullable = false)
    String price;

    @Column(length = 255, nullable = true)
    String userId;

    @Column(length = 255, nullable = true)
    String active;

    @Column(length = 255, nullable = true)
    String image;
    
    @ManyToMany(mappedBy = "cars")
    Set<Bidding> bids;

    public Long getId()
    {
        return this.id;
    }

    public Long setId(Long id)
    {
        this.id = id;
        return this.id;
    }

    public String getMake_by()
    {
        return this.make_by;
    }

    public String setMake_by(String make_by)
    {
        this.make_by = make_by;
        return this.make_by;
    }

    public String getModel()
    {
        return this.model;
    }

    public String setModel(String model)
    {
        this.model = model;
        return this.model;
    }

    public String getRegistration_date()
    {
        return this.registration_date;
    }

    public String setRegistration_date(String registration_date)
    {
        this.registration_date = registration_date;
        return this.registration_date;
    }

    public String getPrice()
    {
        return this.price;
    }

    public String setPrice(String price)
    {
        this.price = price;
        return this.price;
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

    public String getActive()
    {
        return this.active;
    }

    public String setActive(String active)
    {
        this.active = active;
        return this.active;
    }

    public String getImage()
    {
        return this.image;
    }

    public String setImage(String image)
    {
        this.image = image;
        return this.image;
    }

}
