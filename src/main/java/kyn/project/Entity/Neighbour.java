package kyn.project.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "neighbour")
public class Neighbour 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(nullable = false, length = 255)
    String name;
    
    @Column(nullable = false, length = 255)
    String location;

    @Column(nullable = false, length = 255)
    String image;

    public Long getId()
    {
        return this.id;
    }

    public Long setId(Long id)
    {
        return this.id = id;
    }

    public String getName()
    {
        return this.name;
    }

    public String setName(String name)
    {
        return this.name = name;
    }

    public String getLocation()
    {
        return this.location;
    }

    public String setLocation(String location)
    {
        return this.location = location;
    }

    public String getImage()
    {
        return this.image;
    }

    public String setImage(String image)
    {
        return this.image = image;
    }
}
