package kyn.project.Entity;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(nullable = false, length = 255)
    String username;
    
    @Column(nullable = false, length = 255)
    String password;

    public Long getId()
    {
        return this.id;
    }

    public Long setId(Long id)
    {
        return this.id = id;
    }

    public String getUsername()
    {
        return this.username;
    }

    public String setUsername(String username)
    {
        return this.username = username;
    }

    public String getPassword()
    {
        return this.password;
    }

    public String setPassword(String password)
    {
        return this.password = password;
    }
}
