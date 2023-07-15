package rest.api.Entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;


@Entity
@Table(name = "users")
public class User 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(length = 255, nullable = false)
    String username;

    @Column(length = 255, nullable = false)
    String password;

    @Column(length = 255, nullable = false)
    String email;

    @Column(length = 255, nullable = true)
    String phone_number;

    @Column(length = 255, nullable = true)
    String location;

    @ManyToMany(fetch = FetchType.EAGER)
    Set<Role> roles = new HashSet<Role>();

    @ManyToMany(mappedBy = "users")
    Set<Bidding> bidding;



    public Long getId()
    {
        return this.id;
    }

    public Long setId(Long id)
    {
        this.id = id;
        return this.id;
    }

    public String getUsername()
    {
        return this.username;
    }

    public String setUsername(String username)
    {
        this.username = username;
        return this.username;
    }

    public String getPassword()
    {
        return this.password;
    }

    public String setPassword(String password)
    {
        this.password = password;
        return this.password;
    }

    public String getEmail()
    {
        return this.email;
    }

    public String setEmail(String email)
    {
        this.email = email;
        return this.email;
    }

    public String getPhone_number()
    {
        return this.phone_number;
    }

    public String setPhone_number(String phone_number)
    {
        this.phone_number = phone_number;
        return this.phone_number;
    }

    public String getLocation()
    {
        return this.location;
    }

    public String setLocation(String location)
    {
        this.location = location;
        return this.location;
    }

    public Set<Role> getRoles()
    {
        return this.roles;
    }

    public void setRoles(Role roles)
    {
        this.roles.add(roles);
    }
}
