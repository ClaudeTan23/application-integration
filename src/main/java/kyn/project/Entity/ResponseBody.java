package kyn.project.Entity;

public class ResponseBody 
{
    public String status;
    
    public String type;

    public String token;

    public String id;

    public String name;

    public GoogleUser user;

    public Neighbour neighbour;

    public String getStatus()
    {
        return this.status;
    }

    public String setStatus(String status)
    {
        return this.status = status;
    }

    public String getType()
    {
        return this.type;
    }

    public String setType(String type)
    {
        return this.type = type;
    }

    public String getToken()
    {
        return this.token;
    }

    public String setToken(String token)
    {
        return this.token = token;
    }

    public String getId()
    {
        return this.id;
    }

    public String setId(String id)
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

    public GoogleUser getUser()
    {
        return this.user;
    }

    public GoogleUser setUser(GoogleUser user)
    {
        return this.user = user;
    }

    public Neighbour getNeighbour()
    {
        return this.neighbour;
    }

    public Neighbour setNeighbour(Neighbour neighbour)
    {
        return this.neighbour = neighbour;
    }
}
